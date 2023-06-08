import Box from '@mui/material/Box';
import React,{useContext,useEffect,useState} from 'react';
import { BiMicrophone,BiStopCircle } from "react-icons/bi";
import MobileStepper from '@mui/material/MobileStepper';
import exam from "./style.module.css";
import {useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { cloudSave } from "../../redux/action/cloudSelect";
import Context from '../context/Context';
import ReactPlayer from "react-player";
import failed from '../../assets/audio2.mp3'
import succ from '../../assets/audio1.mp3'


const Exam = (props)=> {
  const messContext = useContext(Context);
  const [aStep, setAStep] = useState(0);
  const [text, setText] = useState('');
  const [puan, setPuan] = useState(0);
  const [audio,setAudio] = useState({
    audioPlay:false,
    audioType:null
  });
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const maxSteps = props.quiz.length;

  const Next = () => {
  if(props.quiz[aStep].cevap.toLowerCase() === text.toLowerCase()){
    sound(succ);
    if (puan === 2000){ 
      props.nextStep()
    }else{
      
      setAStep((prevActiveStep) => prevActiveStep + 1);
      setPuan(puan + 500);
    }
  }else{
    sound(failed);
    messContext.setAppStore({
    open: true,
    messName: "error",
    messText: "hhhhaaattttaaaaa !!!!"
  })}
    setText('');
  };

  const Back = () => {
    setAStep((prevActiveStep) => prevActiveStep - 1);
  };
  const cloudSave =(e)=> {
    props.cloudSave(e, userData.user._id);
    navigate("/index-page");
  }
  const sound = (e) => {
    const audio = new Audio(e);
    audio.volume= 0.05;
    audio.play();
  };
// record exam

const [isListening, setIsListening] = useState(false);
const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Check if the browser supports the Web Speech API
    if ('webkitSpeechRecognition' in window) {
      const recognitionInstance = new window.webkitSpeechRecognition();
      recognitionInstance.lang = 'tr-TR'; // Set the language to Turkish

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setText(transcript);
      };

      setRecognition(recognitionInstance);
    } else {
      console.log('Speech recognition is not supported in this browser.');
    }

    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, []);
  const toggleListening = () => {
    if (isListening) {
      try {
        recognition.abort();
      } catch (error) {
        console.log('Failed to stop recognition stop:', error);
      }
      setIsListening(false);
    } else {
      try {
        recognition.start();
      } catch (error) {
        console.log('Failed to start recognition rec:', error);
      }
      setIsListening(true);
    }
  };

  return (
    <div>
      {/* ---- EXAM ---- */}
      <div className={exam.body}>
      <MobileStepper 
      LinearProgressProps={{
        sx: {
          width:'100%',
          bgcolor:'darkorange',
          '& .MuiLinearProgress-bar': {
            bgcolor:"blue",
            borderRadius:'10px'
          },
          height:'10px',
          borderRadius:'10px'
          
        }// and set this class
      }}
      
      
      variant="progress" steps={maxSteps} position="static" activeStep={aStep} sx={{bgcolor:'transparent', flexGrow: 1,p:'10px 0'}} />
      {/* <div style={{width:'100%',height:'10px',background:'grey'}}><div style={{background:'blue',width:`${puan*100/2000}%`,height:'100%'}}></div></div> */}
      <div style={{padding:'10px',height:'auto'}}> 
       <div style={{display:'flex',justifyContent:'space-between'}}><p>{props.quiz[aStep].soru}</p>&nbsp;&nbsp;&nbsp;&nbsp;<p>{puan}</p></div><br />
        {/* <p>çalışıyorlar</p><p  >Onlar</p><p>sınava</p> */}
        
        <div className={exam.word}>{props.quiz[aStep].ornek.map((e,i)=><button key={i} onClick={()=>setText(text !== '' ? text + ' ' + e : text+e)}>{e}</button>)}</div>
        </div> 
      <Box>
          <div className={exam.item}>
        
              <input
               placeholder=' ___   ____   ____   ____   ____   ____   ___'
               value={text}
               onChange={(event) =>setText(event.target.value)}
               type="text" onKeyDown={(event) => event.key === "Enter" && aStep !== maxSteps - 1 && Next()}/> 
              <div style={{display:"flex",alignItems:"center"}}> <button onClick={()=>Next()}>NEXT</button> 
              &nbsp;&nbsp;&nbsp; <button onClick={toggleListening}  style={{background:"darkred",width:"70px"}}>
                  {isListening ?<BiStopCircle fontSize={25}/> : <BiMicrophone fontSize={25} onClick={toggleListening} />} 
               </button></div>
          
               {/*aStep !== maxSteps - 1 &&  <button onClick={()=>aStep !== 0 && Back()||props.onClick()}>BACK</button> */}
          </div>
      </Box>
      </div>
      {/* <h1>...</h1> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.cloudReducer.loading,
    error: state.cloudReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    cloudSave: (point, userId) => dispatch(cloudSave(point, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
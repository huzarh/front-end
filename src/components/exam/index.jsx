import Box from '@mui/material/Box';
import React,{useContext,useEffect,useState} from 'react';
import { BiMicrophone,BiStopCircle } from "react-icons/bi";
import MobileStepper from '@mui/material/MobileStepper';
import exam from "./style.module.css";
import { connect } from "react-redux";
import { cloudSave } from "../../redux/action/cloudSelect";
import Context from '../../context';
import failed from '../../assets/audio2.mp3';
import succ from '../../assets/audio1.mp3';
import ReactPlayer from "react-player";


const Exam = (props)=> {
  const messContext = useContext(Context);
  const [kStep, setKStep] = useState(0);
  const [text, setText] = useState('');
  const [puan, setPuan] = useState(0);
  const maxSteps = props.quiz.length-1;
  
  // console.log(props.quiz,'kstepppppp00',kStep,'maxstep',maxSteps,'puan',puan)
  const Next = (a) => {
  if (props.storeStep < Number(localStorage.getItem("konu"))) {
    props.nextStep();

    } else {

    if(props.quiz[kStep].answer.toLowerCase() === text.toLowerCase()){
      sound(succ);
      setPuan(puan + 500);
      // console.log('steep =>',kStep,'odoo puan =>',puan,'niitpuan =>',maxSteps*500);
        if (puan === maxSteps*500){
          localStorage.setItem('konu',props.storeStep + 1);
          props.nextStep();
          setKStep(0);
          setPuan(0);
        }else{
          setKStep((changeDinlemeStep) => changeDinlemeStep + 1);
        }
    }else{
      sound(failed);
      messContext.setAppStore({
      open: true,
      messName: "error",
      messText: "YANLIŞ !"
    })}
      setText('');
    }
  };

  // const Back = () => {
  //   setKStep((changeDinlemeStep) => changeDinlemeStep - 1);
  // };
  // const cloudSave =(e)=> {
  //   props.cloudSave(e, userData.user._id);
  //   navigate("/index-page");
  // }
  const sound = (e) => {
    const audio = new Audio(e);
    audio.volume= 0.03;
    audio.play();
  };

  
// record exam

const [isListening, setIsListening] = useState(false);
const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognitionInstance = new window.webkitSpeechRecognition();
      recognitionInstance.lang = 'tr-TR';

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
    // eslint-disable-next-line
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
      <div  className={exam.line}><div style={{width:`${100*puan/(maxSteps*500)}%`}}></div></div>
      
      <div style={{padding:'10px',height:'auto'}}> 
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

            {props.quiz[kStep].type === 'audio' ? <ReactPlayer url={`https://m.freetranslations.org/speak.php?word=${props.quiz[kStep].question}&lang=tr`} width="80%" volume={0.05} height="20px" style={{margin:'10px 0'}} playing={false} controls={true} /> :<p>{props.quiz[kStep].question}</p>}
            
            &nbsp;&nbsp;&nbsp;&nbsp;

            <p>{puan}</p>
          </div><br />
        {/* {props.quiz[kStep].type === 'voice' ? */}
         {props.quiz[kStep].type === 'voice' &&  <img src={props.quiz[kStep].options[0]} width='50%'/>}
         {props.quiz[kStep].options && props.quiz[kStep].type !== 'voice' && <div className={exam.word}>{props.quiz[kStep].options.map((e,i)=><button key={i} onClick={()=>setText(text !== '' ? text + ' ' + e : text+e)}>{e}</button>)}</div>}
      </div>
      <Box>
          <div className={exam.item}>
              <input
              // style={{display:props.quiz[kStep].type === 'audio' ? 'none' : 'flex'}}
               placeholder=' ___   ____   ____   ____   ____   ____   ___'
               value={text}
               onChange={(event) =>setText(event.target.value)}
               type="text" onKeyDown={(event) => event.key === "Enter" && kStep !== maxSteps - 1 && Next()}/> 

              <div style={{display:"flex",alignItems:"center"}}> <button onClick={()=>Next(puan)}>NEXT</button> 
             {props.quiz[kStep].type === 'voice' && <>&nbsp;&nbsp;&nbsp; 
              <button onClick={toggleListening}  style={{background:"darkred",width:"70px"}}>
                  {isListening ?<BiStopCircle fontSize={25}/> : <BiMicrophone fontSize={25} onClick={toggleListening} />} 
              </button>
              </>}</div>
          </div>
      </Box>
      </div>
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
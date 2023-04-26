import Box from '@mui/material/Box';
import * as React from 'react';
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
  const messContext = React.useContext(Context);
  const [aStep, setAStep] = React.useState(0);
  const [text, setText] = React.useState('');
  const [puan, setPuan] = React.useState(0);
  const [audio,setAudio] = React.useState({
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
       <div style={{display:'flex',justifyContent:'space-between'}}><p>{props.quiz[aStep].soru}</p><p>{puan}</p></div><br />
        {/* <p>çalışıyorlar</p><p  >Onlar</p><p>sınava</p> */}
        
        <div className={exam.word}>{props.quiz[aStep].ornek.map((e,i)=><button key={i} onClick={()=>setText(text !== '' ? text + ' ' + e : text+e)}>{e}</button>)}</div>
        </div> 
      <Box>
          <div className={exam.item}>
              <input
               placeholder=' ___   ____   ____   ____   ____   ____   ___'
               value={text}
               onChange={(event) =>setText(event.target.value)}
               type="text" onKeyPress={(event) => event.key === "Enter" && aStep !== maxSteps - 1 && Next()}/> 
               <button onClick={()=>Next()}>NEXT</button> 
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
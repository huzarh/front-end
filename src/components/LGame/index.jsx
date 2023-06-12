import Box from '@mui/material/Box';
import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import game from "./style.module.css";
import {useNavigate } from "react-router-dom";
import Game1 from "./Game1";
const quiz = [
  {
    soru: 'Doğru cevaplanız !',
    cevap: 'Ben derse geliyorum',
    ornek: ['geliyorum','Ben' ,'derse'],
    img:'https://uploads.codesandbox.io/uploads/user/ca815fc8-8136-4a4b-a77f-00e621d064b4/RWgX-cat.jpg',
  },
  {
    soru: 'Doğru cevaplanız !',
    cevap: 'O spor yapıyor',
    ornek:['yapıyor','spor','O'],
  },
  {
    soru: 'Doğru cevaplanız !',
    cevap: 'Sen neden yazmıyorsun',
    ornek: ['Sen','yazmıyorsun','neden','haha','dese','ndeeden','nqedeewn'],
  },
  {
    soru: 'Doğru cevaplanız !',
    cevap: 'Onlar sınava çalışıyorlar',
    ornek: ['çalışıyorlar','Onlar','sınava'],
  },
];


const LGame = (props)=> {
  const [aStep, setAStep] = React.useState(0);
  const [text, setText] = React.useState('');
  const [puan, setPuan] = React.useState(0);
  const navigate = useNavigate();
  const maxSteps = quiz.length;

  const Next = () => {
    if(quiz[aStep].cevap.toLowerCase() === text.toLowerCase()){
      // if(puan !== 2000){
    setAStep((prevActiveStep) => prevActiveStep + 1);
    setPuan(puan + 500);
  // }else{
  //   console.log('hello world =====>',puan);
  // }
    }
    setText('');
  };

  const Back = () => {
    setAStep((prevActiveStep) => prevActiveStep - 1);
    setPuan(puan !== 0 && puan - 500);
  };

  return (
    <div>
      {/* ---- EXAM ---- */}
       <div className={game.body}>
      {puan === 2000 ? <><div>{puan}</div><button onClick={()=>setAStep((prevActiveStep) => prevActiveStep - 1)}>back</button><button onClick={()=>navigate("/index-page")}>next</button></> : <><MobileStepper 
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
      <div style={{padding:'10px',height:'auto'}}> 
       <div style={{display:'flex',justifyContent:'space-between'}}>
             <p>{quiz[aStep].soru}</p> <p>{puan}</p>
          </div>
        <div style={{display:'flex', justifyContent:'center'}}>
         
          {/* {quiz[aStep].img && <img onClick={()=>console.log("huz...")} src={quiz[aStep].img} style={{margin:'5px',borderRadius:'10px',width:'100px'}}/>} 
          {quiz[aStep].img && <img src={quiz[aStep].img} style={{margin:'5px',borderRadius:'10px',width:'100px'}}/>} 
          {quiz[aStep].img && <img src={quiz[aStep].img} style={{margin:'5px',borderRadius:'10px',width:'100px'}}/>}  */}
          
        </div>
         <br />
         
        <div className={game.word}>{quiz[aStep].ornek.map((e,i)=><button key={i} onClick={()=>setText(text !== '' ? text + ' ' + e : text+e)}>{e}</button>)}</div>
        </div>
      <Box>
          <div className={game.item}>
              <input
               placeholder=' ___   ____   ____   ____   ____   ____   ___'
               value={text}
               onChange={(event) =>setText(event.target.value)}
               type="text" onKeyPress={(event) => event.key === "Enter" && aStep !== maxSteps - 1 && Next()}/> 
               <button onClick={()=>Next()}>NEXT</button> 
               {aStep !== maxSteps &&  <button onClick={()=>aStep !== 0 && Back()}>BACK</button>}
          </div>
      </Box></>}
      </div>
      {/* <LGame1/> */}
      <Game1/>
        
    </div>
  );
}

export default LGame;
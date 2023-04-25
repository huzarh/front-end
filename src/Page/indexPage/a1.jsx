import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { BiArrowBack } from "react-icons/bi";
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import { FcUndo } from "react-icons/fc";
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ReactPlayer from "react-player";
import { Link, useNavigate } from "react-router-dom";
import Exam from '../../components/exam';

import css from "./style.module.css";
const steps = [
  {
    label: 'KONU',
    description: `anlamı`,
    quiz:[
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      }
    ]
  },
  {
    label: 'KONU',
    description: `anlamı`,
    quiz:[
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      }
    ]
  },
  {
    label: 'KONU',
    description: `anlamı`,
    quiz:[
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      },
      {
        soru: 'Soru cumlesi ?',
        cevap: 'Ornek ornek ornek',
        ornek: ['ornek','Ornek' ,'ornek'],
      }
    ]
  }
];


export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [aStep, setAStep] = React.useState(0);
  const [text, setText] = React.useState('')
  const navigate = useNavigate();
  // const maxSteps = quiz.length;

  // const Next = () => {
  //   if(quiz[aStep].cevap.toLowerCase() === text.toLowerCase()){
  //   setAStep((prevActiveStep) => prevActiveStep + 1);
  //   }
  //   setText('');
  // };

  // const Back = () => {
  //   setAStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <div className={css.head}>
          <FcUndo className={css.icon1} onClick={()=>navigate("/index-page")} /><div>türkçe a1&nbsp;&nbsp;📕</div>
      </div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((e, i) => (
          <Step key={i}>
              
            <StepLabel
            StepIconProps={{
              sx: {
                color:'white',
                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  color:"red"
                },
                text:{fill:'black',fontSize:'16px'}
              }
            }}
              optional={
                i === (steps.length - 1) && (<Typography color="darkgoldenrod" variant="caption">son konu</Typography>)}
            > 
              <p style={{color:'white'}} >{e.label}</p>
            </StepLabel>
 
            <StepContent>
                  <Button variant="outlined" onClick={handleBack} sx={{display:i === 0 ? 'none':null,width:'100%', mt: 1, mr: 1 ,background:'oringe'}} >  gerı dönmek </Button>
              <br />
               <p>{e.description}</p>
               <img src="https://media.tenor.com/mWpYDtV1zTkAAAAC/minions-shh.gif" style={{width:"100%",height:"auto",borderRadius:'10px',margin:'10px 0',backgroundSize:'cover'}} /><br/>
               <p>Kullanımı</p>
               <h5>Ornek</h5>
               <br/><div style={{margin:'10px 0',padding:'10px',borderRadius:'10px',background:'rgb(32, 29, 41)'}}>
                 
                 
                 <h5>Ornek</h5>
                 <h5>Ornek</h5>
                 <h5>Ornek</h5>
                 
               <ReactPlayer url="https://www.bensound.com/bensound-music/bensound-memories.mp3"  width="270px" height="20px" style={{margin:'10px 0'}} playing={false} controls={true} />
              </div>
               
              <Typography>{e.description}</Typography>

              {/* ------- Exam ------- */}

               <Exam onClick={handleReset} quiz={e.quiz} nextStep={handleNext} />
               

              {/* ------- Next step button -------  */}

              {/* <Box sx={{ mb: 2 }}>
                <div>
                  <Button variant="contained" onClick={handleNext}  sx={{ mt: 1, mr: 1 }}  >  {i === e.length - 1 ? 'Sınav' : 'tamam'} </Button>
                  <Button variant="outlined" disabled={i === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 ,background:'oringe'}} >  gerı dönmek </Button>
                </div>
              </Box> */}
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <>
        <h1>A1 hepsin yaptin: <button onClick={handleReset}>tekrar çalismak</button></h1>
        </>
      )}
    
    </div>
  );
}

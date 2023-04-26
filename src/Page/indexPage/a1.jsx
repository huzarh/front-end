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
import failed from '../../assets/audio1.mp3'

import css from "./style.module.css";
import Research from '../../components/research';
const steps = [
  {
    label: 'ALPABE',
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
    label: 'GÜNLÜK İFADELER',
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
    label: 'BU-ŞU-0',
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
  const [activeStep, setActiveStep] = React.useState(2);
  const navigate = useNavigate();

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
          <FcUndo className={css.icon1} onClick={()=>navigate("/index-page")} /><div>Türkçe A1&nbsp;&nbsp;📕</div>
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
              optional={i === (steps.length - 1) && (<Typography color="darkgoldenrod" variant="caption">son konu</Typography>)}
            > 
              <p style={{color:'white'}} >{e.label}</p>
            </StepLabel>
 
            <StepContent>
                  <Button variant="outlined" onClick={handleBack} sx={{display:i === 0 ? 'none':null,width:'100%', mt: 1, mr: 1 ,background:'oringe'}} >  geri dön </Button>
              <br />
               <p>{e.description}</p>
               <img src="https://media.tenor.com/mWpYDtV1zTkAAAAC/minions-shh.gif" style={{width:"100%",height:"auto",borderRadius:'10px',margin:'10px 0',backgroundSize:'cover'}} /><br/>
               <p>Kullanımı</p>
               <h5>Ornek</h5>
               <br/><div style={{margin:'10px 0',padding:'10px',borderRadius:'10px',background:'rgb(32, 29, 41)'}}>
                 
                 
                 <h5>Ornek</h5>
                 <h5>Ornek</h5>
                 <h5>Ornek</h5>
                 
               <ReactPlayer url={failed} width="270px" volume={0.05} height="20px" style={{margin:'10px 0'}} playing={false} controls={true} />
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
        <Research/>
        </>
      )}
    
    </div>
  );
}

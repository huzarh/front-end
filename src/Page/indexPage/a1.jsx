import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ReactPlayer from "react-player";
import MobileStepper from '@mui/material/MobileStepper';
import Exam from '../../components/exam';
const steps = [
  {
    label: 'ŞİMDİKİ ZAMAN',
    description: `Türkçede şimdiki zaman kipinin birincil kullanımını sembolize eden bir grafik. Mavi hat eylemin başladığı noktayı, dalgalı kırmızı çizgi eylemin bir süredir devam etmekte olduğunu ve cümle kurulduğu anda (şimdi noktasında) henüz tamamlanmamış olduğunu belirtir.`,
  },
  {
    label: 'Unite',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Unite',
    description: `Üçinci unite dersler`,
  },
  {
    label: 'Unite',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  }
];
const quiz = [
  {
    soru: 'Doğru cevaplanız',
    cevap: 'Ben derse geliyorum',
    ornek: `geliyorum / Ben / derse`,
  },
  {
    soru: 'b',
    cevap: 'O spor yapıyor',
    ornek:'yapıyor / spor / O',
  },
  {
    soru: 'cose Babe',
    cevap: 'Sen neden yazmıyorsun',
    ornek: `Sen / yazmıyorsun / neden`,
  },
  {
    soru: 'd',
    cevap: 'Onlar sınava çalışıyorlar',
    ornek: `çalışıyorlar / Onlar / sınava`,
  },
];


export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [aStep, setAStep] = React.useState(0);
  const [text, setText] = React.useState('');
  const maxSteps = quiz.length;

  const Next = () => {
    if(quiz[aStep].cevap.toLowerCase() === text.toLowerCase()){
    setAStep((prevActiveStep) => prevActiveStep + 1);
    }
    setText('');
  };

  const Back = () => {
    setAStep((prevActiveStep) => prevActiveStep - 1);
  };

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
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
              
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
                index === (steps.length - 1) ? (
                  <Typography color="red" variant="caption">son Unite</Typography>
                ) : null
              }
            ><p style={{color:'white'}} >{step.label}</p>
             
            </StepLabel>
            <StepContent>
              <br />
               <p>Türkçede şimdiki zamanlı bir tümce kurabilmek için eylem kökünün sonuna “-yor” eki getirilir. Türkiye Türkçesinde şimdiki zaman ekinin (-yor) kullanımlarında damak uyumuyla birlikte dudak uyumu bozulur.[2] Geniş Türkçe coğrafyası içinde yalnızca Türkiye Türkçesinde bulunan bu ek, tarihî nedenlerden ötürü tek şekillidir   (-yor)</p>
               <img src="https://img.freepik.com/free-vector/human-hand-drawing-doodle-blank-paper_1308-116655.jpg?w=300" style={{width:"290px",height:"150px",borderRadius:'10px',margin:'10px 0',backgroundSize:'cover'}} /><br/>
               <p>Kullanımı</p>
               <h5>-yor ekinin Türkçede üç temel kullanımı vardır. Birincil kullanımı bir süre önce başlamış ve "şu anda gerçekleşen" eylemler için kullanımıdır:</h5>
               <br/><div style={{margin:'10px 0',padding:'10px',borderRadius:'10px',background:'rgb(32, 29, 41)'}}>
                 
                 
                 <h5>Kardeşim içeride uyuyor.</h5>
                 <h5>Çocuklar sabahtan beri bahçede oynuyorlar.</h5>
                 <h5>O yaziyor.</h5>
                 
               <ReactPlayer url="https://www.bensound.com/bensound-music/bensound-memories.mp3"  width="270px" height="20px" style={{margin:'10px 0'}} playing={false} controls={true} />
              </div>
               
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button variant="contained" onClick={handleNext}  sx={{ mt: 1, mr: 1 }}  >  {index === steps.length - 1 ? 'Sınav' : 'tamam'} </Button>
                  <Button variant="outlined" disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 ,background:'oringe'}} >  gerı dönmek </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <>
        {/* // <Paper square elevation={0} sx={{ p: 1 }}> */}
          <Exam onClick={handleReset} />
          {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
          {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1,fontSize:'20px' }}>
            Reset
          </Button>
        {/* // </Paper> */}
        </>
      )}
      {/* ---- EXAM ---- */}
    
    </div>
  );
}

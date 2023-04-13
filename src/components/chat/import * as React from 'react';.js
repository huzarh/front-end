import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import "./style.css";

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

export default function TextMobileStepper() {
  const [aStep, setAStep] = React.useState(0);
  const [text, setText] = React.useState('');
  const maxSteps = quiz.length;

  const handleNext = () => {
    if(quiz[aStep].cevap.toLowerCase() === text.toLowerCase()){
    setAStep((prevActiveStep) => prevActiveStep + 1);
    }
    setText('');
  };

  const handleBack = () => {
    setAStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (

    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
      <MobileStepper variant="progress" quiz={maxSteps} position="static" aStep={aStep} sx={{ maxWidth: 600, flexGrow: 1 }} />
      <Paper square elevation={0} sx={{ display: 'flex', alignItems: 'center', height: 30, pl: 2, bgcolor: 'background.default', }}>
        <p>{quiz[aStep].soru}</p>
      </Paper>
      <Box sx={{ height: 40, maxWidth: 400, width: '230px', p: 2 }}>
        <h3>{quiz[aStep].ornek}</h3>
      </Box>

      <Box sx={{ height: 0, maxWidth: 400, width: '100%', p: 2 }}>
              <input
               value={text}
               onChange={(event) =>setText(event.target.value)}
               type="text" onKeyPress={(event) => event.key === "Enter" && aStep !== maxSteps - 1 && handleNext()}/>&nbsp;<button onClick={()=>aStep !== maxSteps - 1 && handleNext()}>next</button>&nbsp;<button onClick={()=>aStep !== 0 && handleBack()}>back</button>
      </Box>
    </Box>
  );
}

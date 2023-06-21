
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import { FcUndo } from "react-icons/fc";
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ReactPlayer from "react-player";
import {  useNavigate } from "react-router-dom";
import Exam from '../../components/exam';
// import failed from '../../assets/audio1.mp3'
import vd from '../../assets/Buz Mavisi Eğlenceli Renkli Sunum.mp4';
import css from "./style.module.css";
import Research from '../../components/research';
import { connect } from "react-redux";
import {cloudDataSteps} from "../../redux/action/cloudActions";
import Loading from "../../components/loading/index";

const steps = [
  {
    label: 'ALFABE',
    description: `Türk alfabesinde 29 harf vardır.
    Harflerin 21’i ünsüz, 8’i ünlü harftir. 
    Ünsüz harfler yanına “e” harfi getirilerek söylenir.
    Ünsüz harfler: b, c, ç, d, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z
    Ünlü harfler (Sesli harfler)             
    Kalın Ünlüler: a, ı, o, u             
    İnce Ünlüler: e, i, ö, ü
    Türkçe ’de “ğ” kelimenin başında bulunmaz, ortasında ve sonunda bulunabilir. (yağmur, dağ, öğretmen, öğrenci)
    Büyük harflerin kullanıldığı yerler:
    Cümle başında: Okula gittim.
    Özel isimlerde: Bugün Ali ve Ahmet kafeye gidiyor.
    Başlıklarda: “Aile ve Çocuk” başlıklı yazı çok güzeldi.
    Kısaltmalarda: TC (Türkiye Cumhuriyeti)
    Küçük harfler her zaman cümle içinde kullanılır: Dün okula gittim.
    `,
    video:vd,
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
    label: 'TANIŞMA',
    description: `Tanım 
Murat: Merhaba!
İrem: Merhaba!
Murat: Benim adım Murat. Senin adın ne?
İrem: Benim adım İrem. 
Murat: Memnun oldum.
İrem: Ben de memnun oldum.
Murat: Nasılsın?
İrem: İyiyim. Sen nasılsın?
Murat: Ben de iyiyim.
İrem: Hoşça kal!
Murat: Güle güle!
`,
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


const A1 =(props)=> {
  const { saveData } = props;

  React.useEffect(() => {
    saveData();
  }, [saveData]);

  
  

  const [activeStep, setActiveStep] = React.useState(Number(localStorage.getItem("konu")));
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
      {props.error && ( <h5>Alldaaa : {props.error}</h5> )}
      {props.loading && <Loading />}
      <div className={css.head}>
          <FcUndo className={css.icon1} onClick={()=>navigate("/index-page")} /><div>Türkçe A1&nbsp;&nbsp;📕</div>
      </div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {props.BooksData && props.BooksData.data.map((e, i) => (
          <Step key={i}>
            <StepLabel
              StepIconProps={{ sx: {color:'white', '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {   color:"red" }, text:{fill:'black',fontSize:'16px'}}}}
              optional={i === (steps.length - 1) && (<Typography color="darkgoldenrod" variant="caption">son konu</Typography>)}
            > 
              {/* ------------------ NAME ----------------- */}
              <p style={{color:'white'}} >{e.name}</p>
            </StepLabel>
 
              <StepContent>
              <Button variant="outlined" onClick={handleBack} sx={{display:i === 0 ? 'none':null,width:'100%', mt: 1, mr: 1 ,background:'oringe'}} >  geri dön </Button>
               <br />
              

              {/* ------------------ DESC ----------------- */}
              <Sentence sentence={e.desc}/>
              {/* <p>{e.desc}</p> */}

              {/* ------------------ IMAGE ----------------- */}
              <div className={css.imgs}>
                  <img className={css.imgItem} src={e.photo}/>
              </div>
                <br/>

              {/* ------------------ EXAMPLES ----------------- */}
              <div style={{margin:'10px 0',padding:'10px',borderRadius:'10px',background:'rgb(32, 29, 41)'}}>
                <h5>{e.exampleSentence}</h5>
                <ReactPlayer url={e.audio} width="100%" volume={0.05} height="20px" style={{margin:'10px 0'}} playing={false} controls={true} />
              </div>

              {/* ------------------ DESC2 ----------------- */}
              <Typography>{e.desc2}</Typography>

              {/* &quot; ------------------ Exam ------------------ */}

              <Exam onClick={handleReset} quiz={steps[0].quiz} nextStep={handleNext} storeStep={activeStep}/>
              
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
const Sentence  = ({ sentence }) => {
  const hasNewLine = sentence.includes('\n');

  if (hasNewLine) {
    const lines = sentence.split('\n');

    return (
      <div>
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    );
  } else {
    return <p>{sentence}</p>;
  }
};

const actionTsatsruulagch = (dispatch) => {
  return { saveData: () => dispatch(cloudDataSteps()),};
};

const getaction = (state) => {
  return {
    loading: state.cloudReducer.loading,
    error: state.cloudReducer.error,
    BooksData: state.cloudReducer.BooksData,
  };
};

export default connect(getaction, actionTsatsruulagch)(A1);

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
import A1sinav from '../../components/KonuSnv';
import { connect } from "react-redux";
import {cloudDataSteps} from "../../redux/action/cloudActions";
import Loading from "../../components/loading/index";
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import YoutubeVideoPlayer from '../../components/youtube';

const steps = [
  {
    name: 'ALFABE',
    desc: `~ Türk alfabesinde 29 harf vardır.
    Harflerin 21’i ünsüz, 8’i ünlü harftir. Ünsüz harfler yanına “e” harfi getirilerek söylenir.
    
    ~ Ünsüz harfler: b, c, ç, d, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z
    
    Ünlü harfler (Sesli harfler)             
    Kalın Ünlüler: a, ı, o, u             
    İnce Ünlüler: e, i, ö, ü`,
    photo:'',
    exampleSentence:'',
    desc2:`~ Türkçe’de “ğ” kelimenin başında bulunmaz, ortasında ve sonunda bulunabilir. (yağmur, dağ, öğretmen, öğrenci)

    ~ Büyük harflerin kullanıldığı yerler:
    Cümle başında: Okula gittim.
    
    Özel isimlerde: Bugün Ali ve Ahmet kafeye gidiyor.
    Başlıklarda: “Aile ve Çocuk” başlıklı yazı çok güzeldi.
    Kısaltmalarda: TC (Türkiye Cumhuriyeti)
    ~ Küçük harfler her zaman cümle içinde kullanılır: Dün okula gittim.
    `,
    quiz:[
      {
        type:'audio',
        question: 'Ç',
        answer: 'Ç',
        options:['T','H','Ç' ,'C'],
      },
      {
        type:'input',
        question: 'Cüzdan kelimesi hangi harfiyle başlıyor ?',
        answer: 'C',
        options: '',
      },
      {
        type:'voice',
        question: 'Resme göre isimin söyleyin.',
        answer: 'Elma',
        options: ['https://www.verita.com.tr/wp-content/uploads/2014/08/elma.jpg'],
      }
    ]
  },
  {
    name: 'TANIŞMA',
    desc: `
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
    photo:'',
    exampleSentence:'',
    desc2:``,
    quiz:[
      {
        type:'audio',
        question: 'İyi yolculuklar',
        answer: 'İyi yolculuklar',
        options:'',
      },
      {
        type:'input',
        question: 'Cüzdan kelimesi hangi harfiyle başlıyor ?',
        answer: 'C',
        options: '',
      },
      {
        type:'voice',
        question: 'Resme göre isimin söyleyin.',
        answer: 'Elma',
        options: [],
      }
    ]
  }
];

const A1 =(props)=> {
  const { saveData } = props;

  React.useEffect(() => {
    saveData();
  }, [saveData]);

  
  

  const [activeStep, setActiveStep] = React.useState(0);
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
//  console.log('====> niit',props.BooksData.data )
  return (
    <div>
      {props.error && ( <h5>Alldaaa : {props.error}</h5> )}
      {props.loading && <Loading/>}
      <div className={css.head}>
          <FcUndo className={css.icon1} onClick={()=>navigate("/")} /><div>Türkçe A1&nbsp;&nbsp;📕</div>
      </div>
     {/* {props.BooksData && props.BooksData.data.length !== activeStep ?   */}
     {props.BooksData && <Stepper activeStep={activeStep} orientation="vertical">
         {props.BooksData.data.map((e, i) => (
          <Step key={i}>
            <StepLabel
              StepIconProps={{ sx: {color:'white', '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {   color:"red" }, text:{fill:'black',fontSize:'16px'}}}}
              optional={i === (e.length - 1) && (<Typography color="darkgoldenrod" variant="caption">son konu</Typography>)}
            > 
              {/* ------------------ NAME ----------------- */}
              
              {props.loading ? <Skeleton width="60%" sx={{bgcolor:'rgb(34, 36, 46)'}}>
                                <Typography variant='h4'>.</Typography>
                             </Skeleton> : 
                             <p style={{color:'white'}} >{e.name}</p> 
                             }
            </StepLabel>
 
              <StepContent>
              <Button m={10} variant="outlined" onClick={handleBack} sx={{display:i === 0 ? 'none':null,width:'100%', mt: 1, mr: 1 ,background:'oringe'}} >  geri dön </Button>
               <br /><br/>
              

              {/* ------------------ DESC ----------------- */}
              
              {props.loading ?  <Skeleton sx={{bgcolor:'rgb(34, 36, 46)'}} variant="rectangular" width='100%' height={150} /> : <Sentence sentence={e.desc}/>}
              <br />

              {/* ------------------ IMAGE ----------------- */}

              {/* <img  className={css.imgItem} src={el}/> */}
              {/* {e.photo && <> {e.photo.map((el,index)=>)} 
                   <br/></>} */}
              {/* <div className={css.imgs}><img  className={css.imgItem} src={'https://res.cloudinary.com/dlsutojvh/image/upload/v1690215141/A1/tenzxnhorkpygg00kozv'}/></div> */}
              {e.video && <ReactPlayer url={`//www.youtube.com/embed/${e.video}`} width='100%'height='auto'/>}

              {/* ------------------ EXAMPLES SENTENCE ----------------- */}
              
              {props.loading && !e.audio ?  <Skeleton sx={{bgcolor:'rgb(34, 36, 46)'}} variant="rectangular" width='100%' height={100} /> : <div style={{margin:'10px 0',padding:'10px',borderRadius:'10px',background:'rgb(32, 29, 41)'}}>
                <p>Örnek :</p>
                {/* {e.exampleSentence.map((el2,index2)=>(
                  <><p key={index2}>{el2}</p><br/></>
                ))} */}
                <ReactPlayer url={`https://m.freetranslations.org/speak.php?word=${` a b c ç d e f g ğ h i ı j k l m n o ö p r s ş t u ü v y z`}&lang=tr`} width="100%" volume={0.05} height="20px" style={{margin:'10px 0'}} playing={false} controls={true} />
              </div>}
              <br />

              {/* ------------------ DESC2 ----------------- */}
              {props.loading && !e.desc2 ?  <Skeleton sx={{bgcolor:'rgb(34, 36, 46)'}} variant="rectangular" width='100%' height={200} /> : <Sentence sentence={e.desc2}/>}

              <br />

              {/* &quot; {props.BooksData.data[activeStep].stepExam.length !== 0 &&------------------ Exam ------------------ &&  <Skeleton sx={{bgcolor:'rgb(34, 36, 46)'}} variant="rectangular" width='100%' height={200} />*/}

              {props.BooksData.data[activeStep].stepExam.length === 0 ? <Skeleton sx={{bgcolor:'rgb(34, 36, 46)'}} variant="rectangular" width='100%' height={200} /> :  <Exam onClick={handleReset} quiz={props.BooksData.data[activeStep].stepExam} nextStep={handleNext} storeStep={activeStep}/>}
              <button onClick={()=>handleNext()}>next</button>
              
            </StepContent>
          </Step>
        ))}
      </Stepper> }

      {/* {activeStep === 2 && (
        <>
         <A1sinav/>
        </>
      )} */}
    
    </div>
  );
}
const Sentence = ({ sentence }) => {
  if (!sentence) {
    return <p>{sentence}</p>;
  }

  const hasNewLine = sentence.includes('\n');
  const lines = sentence.split('\n');

  return (
    <div>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
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
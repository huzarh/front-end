
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
import failed from '../../assets/audio1.mp3'
import vd from '../../assets/Buz Mavisi Eğlenceli Renkli Sunum.mp4';
import css from "./style.module.css";
import Research from '../../components/research';
const steps = [
  {
    label: 'ALFABE',
    description: `anlami`,
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
    label: 'NERELİSİN ?',
    description: `Simdiki zaman, şu anda gerçekleşen olayları, alışkanlıkları, genel doğruları ve sabit gerçekleri ifade etmek için kullanılır. Türkçede "-yor" ekini alan fiillerle oluşturulan bir zaman dilimidir.`,
    quiz:[
      {
        soru: 'Simdiki Zaman hangisidir ?',
        cevap: 'Ali yemek pişiriyor',
        ornek: ['Ali yemek pişiriyor','Ali yemek pişirdi' ,'Ali yemek pişirecek'],
      },
      {
        soru: '"Ayşe kitap okuyor." cümlesinde hangi fiil kullanılmıştır ?',
        cevap: 'Kitap okumak',
        ornek: ['Yemek pişirmek','Film izlemek' ,'Kitap okumak'],
      },
      {
        soru: '"Biz hala bekliyoruz." cümlesi ne anlatmaktadır ?',
        cevap: 'Biz geçmişte bekledik',
        ornek: ['Biz geçmişte bekledik','Biz gelecekte bekleyeceğiz' ,'Biz şu anda bekliyoruz'],
      },
      {
        soru: '"Ben ders çalışıyorum" cümlesi hangi zaman kullanılmaktadır ?',
        cevap: 'Şimdiki zaman',
        ornek: ['Geçmiş zaman','Şimdiki zaman' ,'Gelecek zaman'],
      },
      {
        soru: 'Ali hangi saatte kalkar ?',
        cevap: 'Sabah',
        ornek: ['Sabah','Öğle' ,'Akşam'],
      }
    ]
  },
  {
    label: 'GÜNLER – AYLAR - MEVSİMLER',
    description: `Simdiki zaman, şu anda gerçekleşen olayları, alışkanlıkları, genel doğruları ve sabit gerçekleri ifade etmek için kullanılır. Türkçede "-yor" ekini alan fiillerle oluşturulan bir zaman dilimidir.`,
    quiz:[
      {
        soru: 'Simdiki Zaman hangisidir ?',
        cevap: 'Ali yemek pişiriyor',
        ornek: ['Ali yemek pişiriyor','Ali yemek pişirdi' ,'Ali yemek pişirecek'],
      },
      {
        soru: '"Ayşe kitap okuyor." cümlesinde hangi fiil kullanılmıştır ?',
        cevap: 'Kitap okumak',
        ornek: ['Yemek pişirmek','Film izlemek' ,'Kitap okumak'],
      },
      {
        soru: '"Biz hala bekliyoruz." cümlesi ne anlatmaktadır ?',
        cevap: 'Biz geçmişte bekledik',
        ornek: ['Biz geçmişte bekledik','Biz gelecekte bekleyeceğiz' ,'Biz şu anda bekliyoruz'],
      },
      {
        soru: '"Ben ders çalışıyorum" cümlesi hangi zaman kullanılmaktadır ?',
        cevap: 'Şimdiki zaman',
        ornek: ['Geçmiş zaman','Şimdiki zaman' ,'Gelecek zaman'],
      },
      {
        soru: 'Ali hangi saatte kalkar ?',
        cevap: 'Sabah',
        ornek: ['Sabah','Öğle' ,'Akşam'],
      }
    ]
  },
  {
    label: 'KİM ? - NE ?',
    description: `Simdiki zaman, şu anda gerçekleşen olayları, alışkanlıkları, genel doğruları ve sabit gerçekleri ifade etmek için kullanılır. Türkçede "-yor" ekini alan fiillerle oluşturulan bir zaman dilimidir.`,
    quiz:[
      {
        soru: 'Simdiki Zaman hangisidir ?',
        cevap: 'Ali yemek pişiriyor',
        ornek: ['Ali yemek pişiriyor','Ali yemek pişirdi' ,'Ali yemek pişirecek'],
      },
      {
        soru: '"Ayşe kitap okuyor." cümlesinde hangi fiil kullanılmıştır ?',
        cevap: 'Kitap okumak',
        ornek: ['Yemek pişirmek','Film izlemek' ,'Kitap okumak'],
      },
      {
        soru: '"Biz hala bekliyoruz." cümlesi ne anlatmaktadır ?',
        cevap: 'Biz geçmişte bekledik',
        ornek: ['Biz geçmişte bekledik','Biz gelecekte bekleyeceğiz' ,'Biz şu anda bekliyoruz'],
      },
      {
        soru: '"Ben ders çalışıyorum" cümlesi hangi zaman kullanılmaktadır ?',
        cevap: 'Şimdiki zaman',
        ornek: ['Geçmiş zaman','Şimdiki zaman' ,'Gelecek zaman'],
      },
      {
        soru: 'Ali hangi saatte kalkar ?',
        cevap: 'Sabah',
        ornek: ['Sabah','Öğle' ,'Akşam'],
      }
    ]
  },
  {
    label: 'BU - ŞU - O',
    description: `Simdiki zaman, şu anda gerçekleşen olayları, alışkanlıkları, genel doğruları ve sabit gerçekleri ifade etmek için kullanılır. Türkçede "-yor" ekini alan fiillerle oluşturulan bir zaman dilimidir.`,
    quiz:[
      {
        soru: 'Simdiki Zaman hangisidir ?',
        cevap: 'Ali yemek pişiriyor',
        ornek: ['Ali yemek pişiriyor','Ali yemek pişirdi' ,'Ali yemek pişirecek'],
      },
      {
        soru: '"Ayşe kitap okuyor." cümlesinde hangi fiil kullanılmıştır ?',
        cevap: 'Kitap okumak',
        ornek: ['Yemek pişirmek','Film izlemek' ,'Kitap okumak'],
      },
      {
        soru: '"Biz hala bekliyoruz." cümlesi ne anlatmaktadır ?',
        cevap: 'Biz geçmişte bekledik',
        ornek: ['Biz geçmişte bekledik','Biz gelecekte bekleyeceğiz' ,'Biz şu anda bekliyoruz'],
      },
      {
        soru: '"Ben ders çalışıyorum" cümlesi hangi zaman kullanılmaktadır ?',
        cevap: 'Şimdiki zaman',
        ornek: ['Geçmiş zaman','Şimdiki zaman' ,'Gelecek zaman'],
      },
      {
        soru: 'Ali hangi saatte kalkar ?',
        cevap: 'Sabah',
        ornek: ['Sabah','Öğle' ,'Akşam'],
      }
    ]
  },
  {
    label: 'ÇOĞUL EKİ (-lAr)',
    description: `Simdiki zaman, şu anda gerçekleşen olayları, alışkanlıkları, genel doğruları ve sabit gerçekleri ifade etmek için kullanılır. Türkçede "-yor" ekini alan fiillerle oluşturulan bir zaman dilimidir.`,
    quiz:[
      {
        soru: 'Simdiki Zaman hangisidir ?',
        cevap: 'Ali yemek pişiriyor',
        ornek: ['Ali yemek pişiriyor','Ali yemek pişirdi' ,'Ali yemek pişirecek'],
      },
      {
        soru: '"Ayşe kitap okuyor." cümlesinde hangi fiil kullanılmıştır ?',
        cevap: 'Kitap okumak',
        ornek: ['Yemek pişirmek','Film izlemek' ,'Kitap okumak'],
      },
      {
        soru: '"Biz hala bekliyoruz." cümlesi ne anlatmaktadır ?',
        cevap: 'Biz geçmişte bekledik',
        ornek: ['Biz geçmişte bekledik','Biz gelecekte bekleyeceğiz' ,'Biz şu anda bekliyoruz'],
      },
      {
        soru: '"Ben ders çalışıyorum" cümlesi hangi zaman kullanılmaktadır ?',
        cevap: 'Şimdiki zaman',
        ornek: ['Geçmiş zaman','Şimdiki zaman' ,'Gelecek zaman'],
      },
      {
        soru: 'Ali hangi saatte kalkar ?',
        cevap: 'Sabah',
        ornek: ['Sabah','Öğle' ,'Akşam'],
      }
    ]
  },
  {
    label: 'SORU EKİ (mI ?)',
    description: `Simdiki zaman, şu anda gerçekleşen olayları, alışkanlıkları, genel doğruları ve sabit gerçekleri ifade etmek için kullanılır. Türkçede "-yor" ekini alan fiillerle oluşturulan bir zaman dilimidir.`,
    quiz:[
      {
        soru: 'Simdiki Zaman hangisidir ?',
        cevap: 'Ali yemek pişiriyor',
        ornek: ['Ali yemek pişiriyor','Ali yemek pişirdi' ,'Ali yemek pişirecek'],
      },
      {
        soru: '"Ayşe kitap okuyor." cümlesinde hangi fiil kullanılmıştır ?',
        cevap: 'Kitap okumak',
        ornek: ['Yemek pişirmek','Film izlemek' ,'Kitap okumak'],
      },
      {
        soru: '"Biz hala bekliyoruz." cümlesi ne anlatmaktadır ?',
        cevap: 'Biz geçmişte bekledik',
        ornek: ['Biz geçmişte bekledik','Biz gelecekte bekleyeceğiz' ,'Biz şu anda bekliyoruz'],
      },
      {
        soru: '"Ben ders çalışıyorum" cümlesi hangi zaman kullanılmaktadır ?',
        cevap: 'Şimdiki zaman',
        ornek: ['Geçmiş zaman','Şimdiki zaman' ,'Gelecek zaman'],
      },
      {
        soru: 'Ali hangi saatte kalkar ?',
        cevap: 'Sabah',
        ornek: ['Sabah','Öğle' ,'Akşam'],
      }
    ]
  },
  {
    label: 'BURASI – ŞURASI – ORASI',
    description: `Simdiki zaman, şu anda gerçekleşen olayları, alışkanlıkları, genel doğruları ve sabit gerçekleri ifade etmek için kullanılır. Türkçede "-yor" ekini alan fiillerle oluşturulan bir zaman dilimidir.`,
    quiz:[
      {
        soru: 'Simdiki Zaman hangisidir ?',
        cevap: 'Ali yemek pişiriyor',
        ornek: ['Ali yemek pişiriyor','Ali yemek pişirdi' ,'Ali yemek pişirecek'],
      },
      {
        soru: '"Ayşe kitap okuyor." cümlesinde hangi fiil kullanılmıştır ?',
        cevap: 'Kitap okumak',
        ornek: ['Yemek pişirmek','Film izlemek' ,'Kitap okumak'],
      },
      {
        soru: '"Biz hala bekliyoruz." cümlesi ne anlatmaktadır ?',
        cevap: 'Biz geçmişte bekledik',
        ornek: ['Biz geçmişte bekledik','Biz gelecekte bekleyeceğiz' ,'Biz şu anda bekliyoruz'],
      },
      {
        soru: '"Ben ders çalışıyorum" cümlesi hangi zaman kullanılmaktadır ?',
        cevap: 'Şimdiki zaman',
        ornek: ['Geçmiş zaman','Şimdiki zaman' ,'Gelecek zaman'],
      },
      {
        soru: 'Ali hangi saatte kalkar ?',
        cevap: 'Sabah',
        ornek: ['Sabah','Öğle' ,'Akşam'],
      }
    ]
  },
  {
    label: 'EŞYALAR',
    description: `Simdiki zaman, şu anda gerçekleşen olayları, alışkanlıkları, genel doğruları ve sabit gerçekleri ifade etmek için kullanılır. Türkçede "-yor" ekini alan fiillerle oluşturulan bir zaman dilimidir.`,
    quiz:[
      {
        soru: 'Simdiki Zaman hangisidir ?',
        cevap: 'Ali yemek pişiriyor',
        ornek: ['Ali yemek pişiriyor','Ali yemek pişirdi' ,'Ali yemek pişirecek'],
      },
      {
        soru: '"Ayşe kitap okuyor." cümlesinde hangi fiil kullanılmıştır ?',
        cevap: 'Kitap okumak',
        ornek: ['Yemek pişirmek','Film izlemek' ,'Kitap okumak'],
      },
      {
        soru: '"Biz hala bekliyoruz." cümlesi ne anlatmaktadır ?',
        cevap: 'Biz geçmişte bekledik',
        ornek: ['Biz geçmişte bekledik','Biz gelecekte bekleyeceğiz' ,'Biz şu anda bekliyoruz'],
      },
      {
        soru: '"Ben ders çalışıyorum" cümlesi hangi zaman kullanılmaktadır ?',
        cevap: 'Şimdiki zaman',
        ornek: ['Geçmiş zaman','Şimdiki zaman' ,'Gelecek zaman'],
      },
      {
        soru: 'Ali hangi saatte kalkar ?',
        cevap: 'Sabah',
        ornek: ['Sabah','Öğle' ,'Akşam'],
      }
    ]
  },
  {
    label: 'RENKLER',
    description: `Simdiki zaman, şu anda gerçekleşen olayları, alışkanlıkları, genel doğruları ve sabit gerçekleri ifade etmek için kullanılır. Türkçede "-yor" ekini alan fiillerle oluşturulan bir zaman dilimidir.`,
    quiz:[
      {
        soru: 'Simdiki Zaman hangisidir ?',
        cevap: 'Ali yemek pişiriyor',
        ornek: ['Ali yemek pişiriyor','Ali yemek pişirdi' ,'Ali yemek pişirecek'],
      },
      {
        soru: '"Ayşe kitap okuyor." cümlesinde hangi fiil kullanılmıştır ?',
        cevap: 'Kitap okumak',
        ornek: ['Yemek pişirmek','Film izlemek' ,'Kitap okumak'],
      },
      {
        soru: '"Biz hala bekliyoruz." cümlesi ne anlatmaktadır ?',
        cevap: 'Biz geçmişte bekledik',
        ornek: ['Biz geçmişte bekledik','Biz gelecekte bekleyeceğiz' ,'Biz şu anda bekliyoruz'],
      },
      {
        soru: '"Ben ders çalışıyorum" cümlesi hangi zaman kullanılmaktadır ?',
        cevap: 'Şimdiki zaman',
        ornek: ['Geçmiş zaman','Şimdiki zaman' ,'Gelecek zaman'],
      },
      {
        soru: 'Ali hangi saatte kalkar ?',
        cevap: 'Sabah',
        ornek: ['Sabah','Öğle' ,'Akşam'],
      }
    ]
  }
];


export default function VerticalLinearStepper() {
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
              <br />
               <p>{e.description}</p>
               {e.video ? <video  style={{width:"100%",height:"auto",borderRadius:'10px',margin:'10px 0',backgroundSize:'cover'}} controls>
                <source src={e.video ? e.video : null} type="video/mp4" />
               </video>:
               <img src="https://media.tenor.com/mWpYDtV1zTkAAAAC/minions-shh.gif" style={{width:"100%",height:"auto",borderRadius:'10px',margin:'10px 0',backgroundSize:'cover'}} />
              }<br/>
               <div style={{margin:'10px 0',padding:'10px',borderRadius:'10px',background:'rgb(32, 29, 41)'}}>
                 
                 
                 <h5>Ali yemek pişiriyor.</h5>
                 <h5>Ben şu anda ders çalışıyorum.</h5>
                 
               <ReactPlayer url={failed} width="100%" volume={0.05} height="20px" style={{margin:'10px 0'}} playing={false} controls={true} />
              </div>
               
              <Typography>"Ali yemek pişiriyor." cümlesiyle Ayşe'nin şu anda yemek pişirdiğini ifade ediyoruz. Yani Ali'nin eylemi şu an gerçekleşiyor.</Typography>

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

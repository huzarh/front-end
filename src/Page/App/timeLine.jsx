// import Box from '@mui/material/Box';
// import * as React from 'react';
// import MobileStepper from '@mui/material/MobileStepper';
// import exam from "./style.module.css";
// import {useNavigate } from "react-router-dom";
// const quiz = [
//   {
//     soru: 'Doğru cevaplanız !',
//     cevap: 'Ben derse geliyorum',
//     ornek: ['geliyorum','Ben' ,'derse'],
//   },
//   {
//     soru: 'Doğru cevaplanız !',
//     cevap: 'O spor yapıyor',
//     ornek:['yapıyor','spor','O'],
//   },
//   {
//     soru: 'Doğru cevaplanız !',
//     cevap: 'Sen neden yazmıyorsun',
//     ornek: ['Sen','yazmıyorsun','neden','haha','dese','ndeeden','nqedeewn'],
//   },
//   {
//     soru: 'Doğru cevaplanız !',
//     cevap: 'Onlar sınava çalışıyorlar',
//     ornek: ['çalışıyorlar','Onlar','sınava'],
//   },
// ];


// const LGame = (props)=> {
//   const [aStep, setAStep] = React.useState(0);
//   const [text, setText] = React.useState('');
//   const [puan, setPuan] = React.useState(0);
//   const navigate = useNavigate();
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   const maxSteps = quiz.length;

//   const Next = () => {
//     if(quiz[aStep].cevap.toLowerCase() === text.toLowerCase()){
//       if(puan !== 1500){
//     setAStep((prevActiveStep) => prevActiveStep + 1);
//     setPuan(puan + 500);
//   }else{
//     cloudSave(puan)
//     console.log('hello world =====>',puan);
//   }
    
//     }
//     setText('');
//   };

//   const Back = () => {
//     setAStep((prevActiveStep) => prevActiveStep - 1);
//   };
//   const cloudSave =(e)=> {
//     props.cloudSave(e, userData.user._id);
//     navigate("/index-page");
//   }

//   return (
//     <div>
//       {/* ---- EXAM ---- */}
//       <div className={exam.body}>
//       <MobileStepper 
//       LinearProgressProps={{
//         sx: {
//           width:'100%',
//           bgcolor:'darkorange',
//           '& .MuiLinearProgress-bar': {
//             bgcolor:"blue",
//             borderRadius:'10px'
//           },
//           height:'10px',
//           borderRadius:'10px'
          
//         }// and set this class
//       }}
      
//       variant="progress" steps={maxSteps} position="static" activeStep={aStep} sx={{bgcolor:'transparent', flexGrow: 1,p:'10px 0'}} />
//       <div style={{padding:'10px',height:'auto'}}> 
//        <div style={{display:'flex',justifyContent:'space-between'}}><p>{quiz[aStep].soru}</p><p>{puan}</p></div><br />
//         {/* <p>çalışıyorlar</p><p  >Onlar</p><p>sınava</p> */}
//         <div className={exam.word}>{quiz[aStep].ornek.map((e,i)=><button key={i} onClick={()=>setText(text !== '' ? text + ' ' + e : text+e)}>{e}</button>)}</div>
//         </div>
//       <Box>
//           <div className={exam.item}>
//               <input
//                placeholder=' ___   ____   ____   ____   ____   ____   ___'
//                value={text}
//                onChange={(event) =>setText(event.target.value)}
//                type="text" onKeyPress={(event) => event.key === "Enter" && aStep !== maxSteps - 1 && Next()}/> 
//                <button onClick={()=>Next()}>NEXT</button> 
//                {/*aStep !== maxSteps - 1 &&  <button onClick={()=>aStep !== 0 && Back()||props.onClick()}>BACK</button> */}
//           </div>
//       </Box>
//       </div>
//       {/* <h1>...</h1> */}
//     </div>
//   );
// }

// export default LGame;
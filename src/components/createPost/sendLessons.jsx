import React,{useState} from 'react';
import css from "./style.module.css";
import ReactPlayer from "react-player";
import { FcFullTrash,FcSynchronize,FcPlus,FcAddImage } from "react-icons/fc";
import { connect } from "react-redux";
import { cloudSendStep } from "../../redux/action/cloudSelect";

function SendLessons(props){
  const [konuIsim,setKonuIsim] = useState('');
  const [konuTanim,setKonuTanim] = useState('');
  const [example,setExample1] = useState('');
  const [example2,setExample2] = useState('');
  const [audio,setAudio] = useState('');
  const [imgs,setImgs] = useState([]);
  const [konuTanim2,setKonuTanim2] = useState('');
  const [quiz,setQuiz] = useState([
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
  ]);

  const convertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.result.includes('audio/mpeg', 'audio/wav', 'audio/mp3')) {
        setAudio(reader.result);
      }else{
        setImgs((list) => [reader.result , ...list]);
      }
      
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    }
  };

  const sendLessonData = () => {
    console.log("------> ok",props);
    props.cloudSendStep(konuIsim,konuTanim,example,example2,audio,imgs,konuTanim2,quiz,"5e90434cd433fa11b078ed8a");
  }
  return (
    <div style={{display:'flex', margin: '0 auto',justifyContent:"center"}}>
      
      <section className={css.lesSec}>
        <label> <b>Konu ismi :</b> </label>
        <input type="text" placeholder="exam" style={{width:"50%"}} onChange={(event) =>setKonuIsim(event.target.value)}/><br/>
        <label> <b>Konu tanımı :</b> </label>
        <textarea style={{resize:"vertical",width:"100%"}} name="postContent" rows={4} cols={40}  onChange={(event) =>setKonuTanim(event.target.value)}/><br/><br/>
        <input accept='image/' type='file' onChange={convertToBase64} placeholder="img"/> 
        <div className={css.imgDiv} >{imgs.map((e,i)=>(
          <img key={i} style={{width:"auto",height:"100%",margin:"auto 5px",backgroundSize:"cover",borderRadius:"10px"}} src={e}/>
        ))}</div><br/>
        <label> <b>ornek :</b> </label>
        <input type="text" placeholder="example" onChange={(event) =>setExample1(event.target.value)}/><br/>
        <input type="text" placeholder="example" onChange={(event) =>setExample2(event.target.value)}/><br/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
          <label htmlFor="inputField" style={{display:"flex",alignItems:"center"}}>{audio ? <FcSynchronize fontSize={25}/> : <FcPlus  fontSize={25}/>}
            <input accept='audio/' type='file'  id="inputField" onChange={convertToBase64} hidden/>
          </label>
            {audio ? <ReactPlayer  url={audio} width="80%" volume={0.05} height="20px" style={{margin:' 0'}} playing controls />:"audio nope  |"}
        </div>
        <br/><br/>
        
        <textarea style={{resize:"vertical",width:"100%"}} name="postContent" rows={4} cols={40} onChange={(event) =>setKonuTanim2(event.target.value)}/><br/>
  <br/>
  <br/>
        <button onClick={sendLessonData}>send</button>
      </section>
    </div>
  );
}


const actionTsatsruulagch = (dispatch) => {
  return {
    cloudSendStep: (a,b,c,d,e,f,g,h,j) => dispatch(cloudSendStep(a,b,c,d,e,f,g,h,j)),
  };
};
export default connect(null, actionTsatsruulagch)(SendLessons);
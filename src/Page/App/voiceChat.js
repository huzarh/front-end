
import React,{ useState,useEffect,useRef} from "react";
import axios from "../../api";
import css from "./style.module.css";
import { FcAssistant } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { BiMicrophone,BiRadioCircleMarked} from "react-icons/bi";

const speechRecognition = window.webkitSpeechRecognition;
const recognition = new speechRecognition();
// recognition.continuous = true;
recognition.lang = "tr-TR";
recognition.interimResults = true;
recognition.partial = true;

export default function voiceChat() {
  const navigate = useNavigate();
  const listRef = useRef();
  const [chat, setChat] = useState([
    { author:"you", text:"Merhaba ... 🙋🏻‍♀️" }
  ]);
  const [text,setText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const Send = async() => {
     chat.push({author:"Ahmet",text:text})
    
    if (chat[chat.length - 1].text.includes('Türkçe ders')) {
      console.log('yeeee')
      navigate('/A1');
    }else if (chat[chat.length - 1].text.includes('benim')) {
      navigate('/profile');
    }else  {
      setText('');
      const data = {prompt: `${chat[chat.length-1].text} `};
      try {
        const response = await axios.post("/books/aichat", data);
        const res = {data:response.data.data};
        sound(`https://m.freetranslations.org/speak.php?word=${res.data}&lang=tr`);
        setChat([...chat,{author:"you",text:res.data}])
        console.log(res.data);
      } catch (error) {
        console.error("AI errCatch ===>", error);
      }
     }
  }

  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [chat])
  // -------record
  recognition.onstart = () => {
    console.log("speech start");
  };

  recognition.onend = () => {
    Send();
    console.log("===== >   speech end");
  };

  recognition.onerror = (e) =>{
    console.log("error try again ", e);
  };

  let finalTranscript = "";

  recognition.onresult = function (event) {
    console.log("running");
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
    // console.log("final", finalTranscript);
    // console.log("interim", interimTranscript);
    finalTranscript + interimTranscript !== '' && setText(finalTranscript + interimTranscript);
  };

  const handleClick = () => {
    console.log("clicked");
    if (isRecording) {
      recognition.stop();
      setIsRecording(false);
    } else {
      recognition.start();
    }
  };

  /// ----- end record 

  const sound = (e) => {
    const audio = new Audio(e);
    audio.volume= 1;
    audio.playbackRate = 1.15;
    audio.play();
  };
  return (<div>
    <div className={css.head}>
          <div>📚&nbsp;&nbsp;AI Yardımcı</div>
          <FcAssistant className={css.icon1} />
        </div>
    <div ref={listRef} style={{background:"transparent",inset: "10px",padding: "0px",display: "flex",flexDirection: "column",flexWrap: "nowrap",height:"73vh",justifyContent:"space-between",overflowX:"scroll"}}>
   
    <div className="box" style={{display: "flex",flexDirection: "column"}}>
      {chat.map((e,i)=>(
       <div key={i} className="msg"  style={{borderRadius:"10px",background:"rgb(38, 39, 49)",color:"white",width:"70%",alignSelf:e.author !== 'you'?'start':'end',marginBottom:"10px",padding:'10px'}}>{e.text}</div>
    ))} 
    </div> 
    
      </div>
      <div style={{Bottom:"20px",width:"auto",bottom:"0", display:"flex",height:"45px",background:"",alignItems:"center",margin:"10px 0",justifyContent:"space-between"}}>
        <button onClick={handleClick}  style={{background:"rgb(38, 39, 49)",width:"60px",height:"100%",borderRadius:"10px 0 0 10px",fontSize:'25px',color:'white',textAlign:'center',paddingTop:'5px'}}>{isRecording ? <BiRadioCircleMarked fontSize='35px'/> :<BiMicrophone/>}</button>
        <input style={{margin:"0 10px 0 0",width:"100%",height:"100%",borderRadius:"0 10px 10px 0",fontSize:'19px',paddingLeft:'5px'}} type="text" onChange={(e)=>setText(e.target.value)}/>
        <button style={{background:"darkred",width:"80px",height:"100%",borderRadius:"10px",fontSize:'20px',color:"white"}} onClick={Send}>Send</button>
      </div> 
      
      </div>
  );
}

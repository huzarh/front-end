
import React,{ useState,useEffect} from "react";
import axios from "../../api";

const speechRecognition = window.webkitSpeechRecognition;
const recognition = new speechRecognition();
// recognition.continuous = true;
recognition.lang = "tr-TR";
recognition.interimResults = true;
recognition.partial = true;

export default function voiceChat() {
  const [chat, setChat] = useState([
    { author:"you", text:"Etkileşimli diyalog test ...", correct:"0" }
  ]);
  const [text,setText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const Send = async() => {
      
      chat.push({author:"Ahmet",text:text})
      setText('');
      const data = {prompt: `${chat[chat.length-1].text} maksimum 20 kelimeli`};
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
    console.log("final", finalTranscript);
    console.log("interim", interimTranscript);
    setText(finalTranscript + interimTranscript);
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
  <div style={{background:"transparent",inset: "10px",padding: "0px",display: "flex",flexDirection: "column",flexWrap: "nowrap",height:"83vh",justifyContent:"space-between",overflowX:"scroll"}}>
   
   <div className="box" style={{display: "flex",flexDirection: "column"}}>
      {chat.map((e,i)=>(
       <div key={i} className="msg"  style={{borderRadius:"10px",background:"rgb(38, 39, 49)",color:"white",width:"70%",alignSelf:e.author === 'you'?'start':'end',marginBottom:"10px",padding:'10px'}}>{e.text}</div>
  ))}
      {/* <ReactPlayer text={bot[2].text} play={play}/> */}
    </div> 
    {/* https://m.freetranslations.org/speak.php?word=merhaba&lang=tr */}
    
      </div>
      <div style={{Bottom:"20px",right:"10px",left:"10px",width:"auto",bottom:"0", display:"flex",height:"45px",background:"",alignItems:"center",margin:"10px 0",justifyContent:"space-between"}}>
        <button onClick={handleClick}  style={{background:"darkred",width:"100%",height:"100%",borderRadius:"10px"}}>{isRecording ? "RECORDING":"RECORD"}</button>
        {/* <input onChange={(e) => setText(e.target.value)} value={text} style={{fontSize:"20px",height:"100%",outline: 'none',borderRadius:"10px",border:"2px solid  rgb(38, 39, 49)",background:"rgb(4, 10, 20)",color:"white",width:"78%",alignSelf:'center',padding:'10px',textJustify:"auto"}}/>
        <button onClick={Send} style={{textAlign:"center",fontSize:"20px",height:"100%",width:"20%",color:"white",border:"2px solid  rgb(38, 39, 49)",borderRadius:"10px",background:"rgb(4, 10, 20)"}}>send</button> */}
      </div>
      </div>
  );
}

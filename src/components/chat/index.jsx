import React, { useState,useRef,useEffect } from "react";
import { AiFillFacebook,AiOutlineInstagram,AiFillTwitterSquare } from "react-icons/ai";
import Voice from "../A1/voice"
import axios from "../../api";
import "./style.css";
import Ch from "./chat";
import ReactPlayer from "react-player";
import { BiSend } from "react-icons/bi";
import { BiMicrophone,BiStopCircle } from "react-icons/bi";
import writing from '../../assets/writing.gif'
function Chat() {
  const [value, setValue] = useState("");
  const [sendMess,setSendMess] = useState([]);
  const [write, setWrite] = useState(false);
  const [voice , setVoice] = useState(false);
  const [text,setText] = useState('');
  const listRef = useRef();
  const sendMessage = async()=> {
    const messageData = {author:"user",data:value}
    setSendMess((list) => [...list, messageData]);
    setValue('');
    setWrite(true);
    const data = {prompt: value,};
    try {
      const response = await axios.post("/books/aichat", data);
      const res = {data:response.data.data};
      setText(res.data);
      setVoice(true);
      setSendMess((list) => [...list,res]);
      console.log(res.data);
      
    } catch (error) {
      console.error("AI errCatch ===>", error);
    }
    
    setWrite(false);
      
    
  }
  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [sendMess])

  
const [isListening, setIsListening] = useState(false);
const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognitionInstance = new window.webkitSpeechRecognition();
      recognitionInstance.lang = 'tr-TR';

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setValue(transcript);
      };

      setRecognition(recognitionInstance);
    } else {
      console.log('Speech recognition is not supported in this browser.');
    }

    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
    // eslint-disable-next-line
  }, []);
  const toggleListening = () => {
    if (isListening) {
      try {
        recognition.abort();
      } catch (error) {
        console.log('Failed to stop recognition stop:', error);
      }
      setIsListening(false);
    } else {
      try {
        recognition.start();
      } catch (error) {
        console.log('Failed to start recognition rec:', error);
      }
      setIsListening(true);
    }
  };

  return (
    <div className="chat-window">
            <button onClick={toggleListening}  style={{background:"darkred",width:"70px"}}>
                  {isListening ?<BiStopCircle fontSize={25}/> : <BiMicrophone fontSize={25} onClick={toggleListening} />} 
              </button>
          <ReactPlayer url={`https://m.freetranslations.org/speak.php?word=${text}&lang=tr`} width="100%" volume={1} height="20px" style={{margin:' 0'}} playing={voice} controls={false} />
      <div className="chat-header">
        <p>AI Yardımcı</p>
        <div  style={{fontSize:'30px',display:"flex",alignItems:"center",padding:"0 10px 0 0"}}>  
          <a href="https://www.facebook.com/zir.huz"><AiFillFacebook/> </a> &nbsp;&nbsp;
          <a href="https://www.instagram.com/zir_huz"><AiOutlineInstagram /></a> &nbsp;&nbsp; 
          <a href="https://twitter.com/HuzarHuzar2"><AiFillTwitterSquare/> </a>
        </div>
        
      </div>
      <div className="chat-body">
        <div className="message-container" ref={listRef}>
          {sendMess.map((e, i) => {
            return (
              <div key={i} >
                  <div className="message-content"  id={e.author ? 'user' : 'ai'}>
                  <div style={{border:'none',color:'#263238',backgroundColor:"rgb(214, 214, 214)",borderRadius:'5px',padding:'0 5px',width:'70px'}}>{window.innerWidth > 500 ? <Voice voice={e.data} /> : e.author ? 'soru' : 'cevap' }</div>
                  <br />
                  <Ch e={e.data}/>
                  
                  </div>
              </div>
            );
          })}
        </div>
      <div className="chatfooter">
        <input
          type="text"
          value={value}
          placeholder="Mısal soru : mantı nasıl yapacağım ?"
          onChange={(event) => { setValue(event.target.value); }}
          onKeyPress={(event) => event.key === "Enter" && !write && sendMessage()}
        />
        {/* BiSend */}
        
        {write ?  <img style={{height:"100%", margin:"0 20px",alignItems:"center"}}  src={writing} alt="lauding"/> : <button onClick={sendMessage}><BiSend style={{width:"80px"}} /></button>}
      </div>
      </div>
      
      <p>©️ 2023 Dev Khuzeyir</p>
    </div>
  );
}

 
export default Chat;

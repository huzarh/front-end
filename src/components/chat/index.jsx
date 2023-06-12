import React, { useState,useRef,useEffect } from "react";
import { AiFillFacebook,AiOutlineInstagram,AiFillTwitterSquare } from "react-icons/ai";
import Voice from "../A1/voice"
import axios from "../../api";
import "./style.css";
import Ch from "./chat";
import { BiSend } from "react-icons/bi";
function Chat() {
  const [value, setValue] = useState("");
  const [sendMess,setSendMess] = useState([]);
  const [write, setWrite] = useState(false)
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
      setSendMess((list) => [...list,res]);
    } catch (error) {
      console.error("AI errCatch ===>", error);
    }
    setWrite(false);
      
    
  }
  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [sendMess])

  return (
    <div className="chat-window">
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
          {/* <p>Yaziyor <iframe style={{wdth:"40px",border:"none"}} src="https://embed.lottiefiles.com/animation/97930"></iframe></p></div> */}
          {write && <div style={{background:"none"}} id={'ai'}> <iframe style={{height:"30px", width:"96%",border:"none",margin:"0px",padding:"0px" ,borderRadius:'5px',background:"black" }} src="https://embed.lottiefiles.com/animation/74609" title="Embedded Content"></iframe></div>}
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
        
        {!write && <button onClick={sendMessage}><BiSend/></button>}
      </div>
      </div>
      
      <p>©️ 2023 Dev Khuzeyir</p>
    </div>
  );
}

 
export default Chat;

import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { AiFillFacebook,AiOutlineInstagram,AiFillTwitterSquare } from "react-icons/ai";
import Voice from "../A1/voice"
import axios from "../../api";
import "./style.css";
function Chat() {
  const [value, setValue] = useState("");
  const [sendMess,setSendMess] = useState([]);
  const [write, setWrite] = useState(false);

  const sendMessage = async()=> {
    const messageData = {author:"user",data:value}
    setSendMess((list) => [...list, messageData]);
    setValue('');
    setWrite(true);
    const data = {prompt: value,};
    try {
      const response = await axios.post("/books/generateImage", data);

      console.log("AI success ===>", response.data);
      const res = {data:response.data.data}
      setSendMess((list) => [...list,res]);
    } catch (error) {
      console.error("AI errCatch ===>", error);
    }
    setWrite(false);
  }
 

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
        <ScrollToBottom className="message-container">
          {sendMess.map((e, i) => {
            return (
              <div key={i} >
                  <div className="message-content"  id={e.author ? 'user' : 'ai'}>
                  <Voice voice={e.data} />
                  <br />
                    <p>{e.data}</p>
                    
                  </div>
              </div>
            );
          })}
          {write && <div className="message-content"  id={'ai'}><p>Yaziyor . . . </p></div>}
        </ScrollToBottom>
      </div>
      <div className="chatfooter">
        <input
          type="text"
          value={value}
          placeholder="Mısal soru : mantı nasıl yapacağım ?"
          onChange={(event) => { setValue(event.target.value); }}
        />
        {!write && <button onClick={sendMessage}>&#9658;</button>}
      </div>
      <p>©️ 2023 Dev Khuzeyir</p>
    </div>
  );
}

export default Chat;

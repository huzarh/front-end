import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
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
        <p>AI yrdimci</p>
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
          placeholder="chat bich..."
          onChange={(event) => { setValue(event.target.value); }}
        />
        {!write && <button onClick={sendMessage}>&#9658;</button>}
      </div>
    </div>
  );
}

export default Chat;

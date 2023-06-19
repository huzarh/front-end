import React,{ useState} from "react";



export default function voiceChat() {
  const [chat, setChat] = useState([{ author:"r", text:"Merhaba, ben Ahmet. Senin adın ne?", correct:"0" }]);
  const [text,setText] = useState('');
  // const [play,setPlay] = useState(false);
  const sound = (e) => {
    const audio = new Audio(e);
    audio.volume= 0.05;
    audio.play();
  };
const bot = [
  {
    text:"",
  },{
    text:"Merhaba Ahmet, ben Ayşe. Memnun oldum.", 
  },{
    text:"Ben de memnun oldum, Ayşe. Nerelisin?",
  },{
    text:"Ben İstanbul'luyum. Ya sen?"
  },{
    text:"Ben de İstanbul'da yaşıyorum. Ne işle uğraşıyorsun, Ayşe?"
  },{
    text:"Ben öğrenciyim. Üniversitede İngilizce okuyorum. Peki sen ne iş yapıyorsun?"
  },{
    text:"Ben bir mühendisim. Otomotiv sektöründe çalışıyorum."
  },{
    text:"Çok ilginç. Arabalarla ilgilenmeyi seviyor musun?"
  },{
    text:"Evet, arabalar benim hobim. Ayrıca müzik dinlemeyi de severim."
  },{
    text:"Ben de müzik dinlemeyi çok severim. Hangi tür müzikleri dinlersin?"
  },{
    text:"Genellikle pop ve rock müzik dinlerim. Sen hangi müzikleri seversin?"
  },{
    text:"Ben de pop müzik dinlemeyi tercih ederim. Belki bir gün beraber konserlere gidebiliriz."
  },{
    text:"Tabii, neden olmasın! İyi fikir. Peki, Ayşe, başka hobilerin var mı?"
  },{
    text:"Evet, resim yapmayı ve kitap okumayı severim. Senin hobilerin nelerdir?"
  },{
    text:"Ben de kitap okumayı severim. Ayrıca futbol oynamak da hobilerim arasında."
  },{
    text:"Ne güzel! Belki bir gün futbol maçına da gidebiliriz."
  },{
    text:"Kesinlikle, çok eğlenceli olur. Ayşe, seninle tanıştığıma çok memnun oldum."
  },{
    text:"Ben de aynısını düşünüyorum, Ahmet. Umarım iyi arkadaş oluruz."
  }
]
// useEffect(() => {
// setPlay(true);
// }, [chat])
 
  const Send = () => {
    
    if (bot[chat.length].text !== text) {
      chat.push({author:"l",text:text})
      setChat(chat) 
      
      setText('');
      setChat([...chat,{author:"r",text:bot[chat.length].text}])
      console.log('gichiii',...chat)
     console.log('=========>',chat.length.text)
     sound(`https://m.freetranslations.org/speak.php?word=merhaba cccc&lang=tr`);
      setTimeout(() => {
       
        
      }, 2000);
    } else {
      console.log(text,' --------- ',bot[chat.length].correct);
    }
  }


  return (<div style={{background:"transparent",inset: "10px",padding: "0px",display: "flex",flexDirection: "column",flexWrap: "nowrap",height:"97vh",justifyContent:"space-between"}}>
   <div className="box" style={{display: "flex",flexDirection: "column"}}>
      {chat.map((e,i)=>(
       <div key={i} className="msg"  style={{borderRadius:"10px",background:"rgb(38, 39, 49)",color:"white",width:"70%",alignSelf:e.author === 'r'?'start':'end',marginBottom:"10px",padding:'10px'}}>{e.text}</div>
  ))}
      {/* <ReactPlayer text={bot[2].text} play={play}/> */}
    </div> 
    {/* https://m.freetranslations.org/speak.php?word=merhaba&lang=tr */}
    <div style={{right:"10px",left:"10px",width:"auto",position:"fixed",bottom:"0", display:"flex",height:"45px",background:"",alignItems:"center",margin:"10px 0",justifyContent:"space-between"}}>
        <input onChange={(e) => setText(e.target.value)} value={text} style={{fontSize:"20px",height:"100%",outline: 'none',borderRadius:"10px",border:"2px solid  rgb(38, 39, 49)",background:"rgb(4, 10, 20)",color:"white",width:"78%",alignSelf:'center',padding:'10px',textJustify:"auto"}}/>
        <button onClick={Send} style={{textAlign:"center",fontSize:"20px",height:"100%",width:"20%",color:"white",border:"2px solid  rgb(38, 39, 49)",borderRadius:"10px",background:"rgb(4, 10, 20)"}}>send</button>
      </div>
      </div>
  );
}

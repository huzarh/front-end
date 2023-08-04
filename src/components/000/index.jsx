import React, { useRef, useState } from 'react';
import css from "./style.module.css";

import Tesseract from 'tesseract.js';
import { FcOldTimeCamera,FcFullTrash,FcAddImage,FcOpenedFolder,FcAlphabeticalSortingAz } from "react-icons/fc";

const OCR = () => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState('');
  const [value,setValue] = useState('');
  const [start,setStart] = useState(false);

  const startCamera = async () => {
    setStart(true)
    setCapturedImage()
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing the camera: ', error);
    }
  };

  const stopCamera = () => {
    setStart(false)
    setCapturedImage()
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
  };

  const captureImage = () => {
    setStart(false)

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/png');
    setCapturedImage(dataURL);
  };



  const convertImg  = async (e) =>{
    try {
      console.log("ekhlle")
      const { data: { text } } = await Tesseract.recognize(e, 'tur');
      setValue(text)
      console.log(text);
    } catch (error) {
      console.error('OCR Error :', error);
    }
  }
  const convertBase64 =(e)=>{
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setCapturedImage(reader.result);
      reader.readAsDataURL(file);
    }
  }
  return ( 
    <section className={css.conteiner}>
      <div className={css.navbar}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'8vh'}}>
          {start ? <FcAddImage fontSize="10vw" onClick={captureImage} /> : <FcOldTimeCamera fontSize="10vw" onClick={startCamera}/>} 
          
        </div>
        <label htmlFor="inputField" style={{display:"flex",alignItems:"center",width:"auto",height:'100%',justifyContent:'center',cursor:'pointer'}}>
                    <FcOpenedFolder fontSize="10vw" /><input type='file'  id="inputField" onChange={convertBase64} hidden/>
        </label>

        <FcAlphabeticalSortingAz fontSize="8vw" onClick={()=>convertImg(capturedImage)} />
      </div>
      <textarea onChange={(event) => setValue(event.target.value)} value={value} placeholder="1. Tanım" style={{outline:"none",color:"white",fontSize:"16px",border:"1.6px dashed grey",borderRadius:"6px",background:"transparent",padding:"10px",resize:"vertical",width:"100%",minHeight:"100px",maxHeight:"200px"}} rows={4} cols={40} />
    
    <div>
        <video ref={videoRef}  width="100%" height="274px" autoPlay style={{display:capturedImage ? 'none' : 'inline'}} ></video>
        <div style={{display:'inline'}}><img src={capturedImage} alt="Captured"style={{display:capturedImage ? 'inline' : 'none'}} width="100%" height="274px"  /><FcFullTrash  fontSize="8vw" onClick={stopCamera} style={{position:'absolute',zIndex:'9999999'}}/></div>
        <canvas ref={canvasRef}  style={{ display: 'none' }}/>
    </div>
    </section>
  );
};
// 
export default OCR;

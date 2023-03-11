import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import css from "./style.module.css";
import {useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'black',
  color:'white',
  boxShadow: 44,
  margin:' auto',
  padding:'30px 15px'
};

const Cevap =(props)=>{
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  var too = 0;
  for (let i = 0; i < props.doruCevap.length; i++) {
    props.doruCevap[i] === props.cevap[i] && too++;
  }
  const Geri =()=>{
    navigate("/profile");
  }
  return (
    <div>
      <button className={css.submit}  onClick={props.onClick}>Gönder</button>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
          <div className={css.cards}>
            Şanıs: {Math.floor(too*100/6)}%<br/>
            Doru: {too}<br/>
            Yanlış: {props.doruCevap.length-too} <br />
            Adı: {userData.user.name}</div>
         <div className={css.btnCard}>
          <button 
              onClick={props.close}
              style={{ background: "darkgreen" }}
              type="submit"
              className={css.submitbtn}
            >
              Tekrar çalışmak
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={Geri}
              style={{ background: "darkred" }}
              className={css.submitbtn}
            >
              geri dönmek
            </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default Cevap;
import React, {useEffect, useState } from "react";
import FirstPage from "../firstPage/index";
import css from "./style.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import ForgotPassword from "../../components/forgotPassword";
import IndexPage from "../indexPage";
import Login from "../login";
import A1sinav from "../../components/KonuSnv";
import Profile from "../../components/profile";
import Peaple from "../../components/people";
import Yazma from "../../components/A1/yazma";
import Konushma from "../../components/A1/konushma";
import Dinleme from "../../components/A1/dinleme"; 
import ErrorPage from "../../components/errorPage";
import Signup from "../signup";
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginActions";
import Menu from "../../components/Menu";
import Mess from "../../components/messages";
import Chat from "../../components/chat";
import A1 from "../indexPage/a1.jsx";
import "./GlobalCssSlider.css";
import { AppStore } from "../../context";
import LGame from "../../components/LGame";
import Youtube from "../../components/youtube";
import Soz from "./example";
import SendLessons from "../../components/createPost/sendLessons"
import VoiceChat from "./voiceChat"
import back from "../../assets/2023-07-26_11-23-31.png"
import back2 from "../../assets/2023-07-26_11-24-10.png"
import OCR from "../../components/000";
function App({autoLogin}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messName, setMessName] = useState("");
  const [messText, setMessText] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (userData === null) {
      navigate('/first-page');
    } else {
      autoLogin(userData);
    }
    // eslint-disable-next-line
  },[]);

  return (
    <div className={css.body}>
      
      <div className={css.device} style={{position:'fixed',background:'#1e1f24',width:'100%',height:'100%',zIndex:'999',justifyContent:"space-between",textAlign:'start',padding:'40px'}}>
       <img src={back2 } style={{backgroundSize:'cover',height:'16vw'}}/>
       <img src={back } style={{backgroundSize:'cover',height:'auto',marginTop:'20px'}}/>
      </div>
    
      <div className={css.App}>
        <AppStore>
          <Mess mess={open} setMess={setOpen} messName={messName} messText={messText}/>
          <Routes>
            
            {/* ---------------- inside ---------------- */}
            
            <Route path="/A1" element={<A1 />} />
            <Route path="/speech" element={<LGame />} />
            <Route path="/OCR" element={<OCR />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/addexam" element={<SendLessons />} />
            <Route exact path="/" element={<IndexPage navigate={navigate} />}/>
            <Route path="/A1/snv"   element={     <A1sinav   setMess={setOpen}   setMessName={setMessName} setMessText={setMessText} /> }/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/peaple" element={<Peaple />} />
            <Route path="/A1/yazma" element={<Yazma />} />
            <Route path="/A1/konushma" element={<Konushma />} />
            <Route path="/A1/dinleme" element={<Dinleme />} />
            <Route path="/posts" element={<VoiceChat />} />
            <Route path="/stt" element={<Soz />} />
            
            {/* ---------------- outside ---------------- */}
           
            <Route path="/first-page" element={<FirstPage />} />
            <Route path="/login"  element={ <Login setMess={setOpen} setMessName={setMessName} setMessText={setMessText}/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {window.location.pathname === "/" || window.location.pathname === "/profile" ||  window.location.pathname === "/posts" ? ( <Menu />) : null}
        </AppStore>

        
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (authData) => dispatch(actions.loginUserSuccess(authData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

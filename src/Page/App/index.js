import React, { useEffect, useState } from "react";
import FirstPage from "../firstPage/index";
import css from "./style.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import ForgotPassword from "../../components/forgotPassword";
import IndexPage from "../indexPage";
import Login from "../login";
import Research from "../../components/research";
import Profile from "../../components/profile";
import Peaple from "../../components/people";
import Yazma from "../../components/A1/yazma";
import Konushma from "../../components/A1/konushma";
import Dinleme from "../../components/A1/dinleme";
import Point from "../../components/UserPoint";
import ErrorPage from "../../components/errorPage";
import Signup from "../signup";
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginActions";
import Menu from "../../components/Menu";
import Mess from "../../components/messages";
import Chat from "../../components/chat";
import A1 from "../indexPage/a1.jsx";
import "./GlobalCssSlider.css";
import { AppStore } from "../../components/context/Context";
import LGame from "../../components/LGame";
import Soz from "./example";
import VoiceChat from "../../components/createPost/sendLessons";
function App({autoLogin}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messName, setMessName] = useState("");
  const [messText, setMessText] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (userData === null) {
      navigate('/');
    } else {
      autoLogin(userData);
    }
    // eslint-disable-next-line
  },[]);

  return (
    <div className={css.body}>
      {/* <div className={css.appBox}></div> */}
      <div className={css.firstScreen}>
        <AppStore>
          <Mess
            mess={open}
            setMess={setOpen}
            messName={messName}
            messText={messText}
          />

          <Routes>
            <Route path="/A1" element={<A1 />} />


            <Route path="/speech" element={<LGame />} />
            <Route exact path="/" element={<FirstPage />} />

            <Route path="/chat" element={<Chat />} />
            <Route path="/vc" element={<VoiceChat />} />
            <Route
              path="/login"
              element={
                <Login
                  setMess={setOpen}
                  setMessName={setMessName}
                  setMessText={setMessText}
                />
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/index-page"
              element={<IndexPage navigate={navigate} />}
            />
            <Route
              path="/A1/snv"
              element={
                <Research
                  setMess={setOpen}
                  setMessName={setMessName}
                  setMessText={setMessText}
                />
              }
            />
            {/* <Route exact path="/A1" element={<A1 />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/peaple" element={<Peaple />} />
            <Route path="/A1/yazma" element={<Yazma />} />
            <Route path="/A1/konushma" element={<Konushma />} />
            <Route path="/A1/dinleme" element={<Dinleme />} />
            <Route path="/posts" element={<Point />} />
            <Route path="/stt" element={<Soz />} />
            {/* <Route path="/time" element={<CustomizedTimeline />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AppStore>
        {/* {userData && <Menu />} */}
        {window.location.pathname === "/index-page" ||
        window.location.pathname === "/profile" ||
        window.location.pathname === "/posts" ? (
          <Menu />
        ) : null}
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

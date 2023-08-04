import React, { useState, useEffect } from "react";
import css from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginActions";
import Loading from "../../components/loading";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    props.login(email, password);
  };
  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     console.log(`Sending item to the backend: ${email}`);
  //   }
  // };
  useEffect(() => {
    if (props.authSuccess === true) {
      navigate("/");
    }
  }, [props.authSuccess, navigate]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
 

  useEffect(() => {
    const Messages = (mess) => {
    props.setMess(true);
    props.setMessName("error");
    props.setMessText(mess);
    };
    if (props.error) {
      Messages(props.error.response.data.error.message);
    }
  }, [props.error, props]);

  return (
    <div className={css.all}>
      {props.loading && <Loading />}

      {/* {props.error && Messages(props.error.response.data.error.message)} */}

      <h3 className={css.h3}>
        <Link to={"/first-page"}>
          <BiArrowBack className={css.icon1} />
        </Link>
      </h3>
      <h2 className={css.h2}>Merhaba! 👋</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <p className={css.p}>E-posta</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={css.input}
            type="email"
            // placeholder="örnek@gmail.com"
            required
          />
        </label>
        <br />
        <br />
        <br />
        <label>
          <p className={css.p}>Şifre</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={css.input}
            type="password"
            // placeholder="!xHw*#qw92"
            required
          />
        </label>
        <label>
          <p className={css.p}>
            <input className={css.check} type="checkbox" />
            beni hatırla
          </p>
        </label>
        {/* <hr /> */}
        <div className={css.signup}>
          <Link to="/signup">
            <h4 className={css.h4}>kaydolmak</h4>
          </Link>
          <Link to="/forgot-password">
            <h4 className={css.h4}>şifremi unuttum?</h4>
          </Link>
        </div>
        <hr />
        <br />
        <button className={css.button} onClick={login} type="submit">
        GİRİŞ YAPIN
        </button>
        {/* <input className={css.button} type="submit" value="SIGN IN" /> */}
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    token: state.authReducer.token,
    authSuccess: state.authReducer.authSuccess,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

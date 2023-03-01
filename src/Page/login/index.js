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
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(`Sending item to the backend: ${email}`);
    }
  };
  useEffect(() => {
    if (props.authSuccess === true) {
      navigate("/index-page");
    }
  }, [props.authSuccess, navigate]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const Messages = (mess) => {
    props.setMess(true);
    props.setMessName("error");
    props.setMessText(mess);
  };

  useEffect(() => {
    props.error && Messages(props.error.response.data.error.message);
  }, [props.error]);

  return (
    <div className={css.all}>
      {props.loading && <Loading />}

      {/* {props.error && Messages(props.error.response.data.error.message)} */}

      <h3 className={css.h3}>
        <Link to={"/"}>
          <BiArrowBack className={css.icon1} />
        </Link>
      </h3>
      <h2 className={css.h2}>Hello there 👋</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <p className={css.p}>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={css.input}
            type="email"
            placeholder="example@gmail.com"
            required
          />
        </label>
        <br />
        <br />
        <br />
        <label>
          <p className={css.p}>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={css.input}
            type="password"
            placeholder="!xHw*#qw92"
            required
          />
        </label>
        <label>
          <p>
            <input className={css.check} type="checkbox" />
            Remember me
          </p>
        </label>
        {/* <hr /> */}
        <div className={css.signup}>
          <Link to="/signup">
            <h4 className={css.h4}>signup</h4>
          </Link>
          <Link to="/forgot-password">
            <h4 className={css.h4}>Forgot Password?</h4>
          </Link>
        </div>
        <hr />
        <br />
        <button className={css.button} onClick={login} type="submit">
          SIGN IN
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

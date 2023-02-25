import React, {useState,useEffect} from "react";
import * as actions from "../../redux/action/signupActions";
import {connect} from "react-redux"
import Loading from "../../components/loading";
import { Link , useNavigate} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


import css from "./style.module.css";

const Signup =(props)=> {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  
  const signup = () => {
    if(password1 === password2){
      props.signupUser(name,email,password1,(role=== "" ? "user" : role));
    }else{
      setError("Passwordaa zuv oruulnuu !!!");
    }
  };
  useEffect(() => {
    if (props.authSuccess === true) {
      navigate("/index-page");
    }
  },[props.authSuccess, navigate]);

    return <div>
      {props.error && (<h1>Alldaaa : 
      {props.error.response.data.error.message}
      </h1>)}
      {props.loading && <Loading />}

      <h3 className={css.h3}>
        <Link to={"/login"}>
          <BiArrowBack className={css.icon1} />
        </Link>
      </h3>
      <h2 className={css.h2}>Hello there 👋</h2>
        <div className={css.form}>
      <div className={css.userRole}>
         
        <label>
          <p className={css.p}>Rol</p>
          <select className={css.select}  onChange={e=>setRole(e.target.value)}>
            <option value="user" >Öğrenci</option>
            <option value="Admin" >Öğretmen</option>
            <option value="operator">Operatör</option>
          </select>
        </label>&nbsp;&nbsp;&nbsp; 
        <label>
          <p className={css.p}>Name</p>
          <input type={'name'} className={css.input1} placeholder="your name"  onChange={e=>setName(e.target.value)} /><br /><br /> 
          {/* <input className={css.input1} placeholder="your name"   onChange={e=>setName(e.target.value)} type="text" />*/}        </label>
      </div>
     <label>
     <p className={css.p}>Email</p>
      <input className={css.input2} placeholder="example@gmail.com" onChange={e=>setEmail(e.target.value)} type="email" /><br /><br />
      </label>
      <label>
      <p className={css.p}>Password</p>
      <input className={css.input3} placeholder="!xHw*#qw92"  onChange={e=>setPassword1(e.target.value)} type="password"/><br /><br />
      </label>
      <label>
      <p className={css.p}>Try password</p>
      <input className={css.input4} placeholder="!xHw*#qw92" onChange={e=>setPassword2(e.target.value)} type="password" /><br /><br />
      </label>
      {error && <h4 style={{color:'red'}}>{error}</h4>}
      </div>


      <hr />
      <button className={css.button}  onClick={signup}>SIGNUP</button>
    </div>
}
const mapStateToProps = state =>{
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    authSuccess: state.authReducer.authSuccess,
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    signupUser:(name,email,password,role) => dispatch(actions.signupUser(name,email,password,role))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);

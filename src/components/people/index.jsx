import React,{useEffect} from "react";
import css from "./style.module.css"
import { BiArrowBack ,BiSearch} from "react-icons/bi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {cloudData} from "../../redux/action/cloudActions";
import Loading from "../loading/index";


const Peaple=(props)=>{

  useEffect(() => {
    props.saveData();
  }, []);
    return(
        <div className={css.all}>
          {props.error && (
          <h5>Alldaaa : {props.error}</h5>
        )}
        {props.loading && <Loading />}
            <div className={css.head}>
              <div className={css.head1}><Link to="/profile"><BiArrowBack className={css.icon1}/></Link>&nbsp;&nbsp;Users</div>
               <BiSearch />
               
            </div>
      <div>
        {props.BackData && props.BackData.data.map((user) => (
        <div className={css.userbox} key={user._id}>
          <p>~ {user.name}</p><p>{user.role}</p>
          
        </div>
      ))}
    </div>
    </div>
    )
}

const getaction = (state) => {
    return {
      loading: state.cloudReducer.loading,
      error: state.cloudReducer.error,
      BackData: state.cloudReducer.BackData,
    };
  };
  const actionTsatsruulagch = (dispatch) => {
    return {
      saveData: () => dispatch(cloudData()),
    };
  };
export default connect(getaction,actionTsatsruulagch)(Peaple);
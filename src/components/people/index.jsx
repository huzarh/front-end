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
  var add = [];

  props.BackData && props.BackData.data.map((user) => add.push(user));
  add.sort((a, b) => b.userPoint - a.userPoint);
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
      {/* <div>
        {props.BackData && props.BackData.data.map((user) => (
        <div className={css.userbox} key={user._id}>
          <p>~ {user.name}</p><p>{user.role}</p>
          
        </div>
      ))}
      </div> */}

      <section className={css.section}>
        {add.map((e, i) => (
          <div className={ i === 0  ? css.active1 : i === 1 ? css.active2 : i === 2 ? css.active3 : css.active} key={i} >

            {i === 0 ? ( 

              <div key={i} className={css.users}>
                <div className={css.s}>
                <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/9e4f18c0bc42c7508d5fa5b18346af11.svg" alt="rating" />&nbsp;&nbsp;{e.name} </div>
                {e.userPoint} P
              </div>
              
            ) : i === 1 ? (
              <div key={i} className={css.users}>
                <div className={css.s}>
                 <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/cc7b8f8582e9cfb88408ab851ec2e9bd.svg" alt="rating" />&nbsp;&nbsp;{e.name}</div>
                {e.userPoint} P
              </div>
            ) : i === 2 ? (
              <div key={i} className={css.users}>
                <div className={css.s}>
                <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/eef523c872b71178ef5acb2442d453a2.svg" alt="rating" />&nbsp;&nbsp;<h4 >{e.name}</h4>
                </div>
                {e.userPoint} P
              </div>
            ) : (
              <div key={i} className={css.users} style={{opacity: 0.6}}>
                <div className={css.s}>
                &nbsp;&nbsp;{1+i} &nbsp;&nbsp;<h4 >{e.name}</h4>
                </div>
                {e.userPoint} P
              </div> 
            )}
          </div>
        ))}
      </section>
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
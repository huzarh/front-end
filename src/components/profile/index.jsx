import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack ,BiShareAlt,BiSpreadsheet,BiEditAlt,BiMessageSquareDetail,BiBookBookmark} from "react-icons/bi";
import css from "./style.module.css";
import Img from "../../assets/profile.jpeg";
// import Menu from "../Menu";
import { connect } from "react-redux";
import Sponsors from "../sponser/index";
import TransitionsModal from "../../components/createPost"
// import ReactTimeAgo from 'react-time-ago'

const Profile = (props)=>{
    const userData = JSON.parse(localStorage.getItem("userData"));
    const {createdAt,name} = userData.user

    const dateString = createdAt;
    const date = new Date(dateString);
    const day = date.getDate();
    const monthName = ["ocak","şubat","mart","nisan","mayıs","haziran","temmuz","ağustos","eylül","ekim","kasım","aralık"];
    let month = monthName[date.getMonth()];
    const getFullYear = date.getFullYear(); 
    
    

    return(
        <>
        <div className={css.all}>
            <section>
                {/* <ReactTimeAgo date={year2002} locale="en-US"/> */}
                <div className={css.head}><Link to={"/index-page"}><BiArrowBack className={css.icon1} /></Link><div className={css.icons}><BiShareAlt className={css.icon2}/><BiSpreadsheet/></div></div>
                <div className={css.user}>
                    <div> 
                        <img src={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} alt="profile" className={css.box}/>
                        <h2 className={css.h2}>{name}</h2>
                        <h5 className={css.h5}>{day} {month} {getFullYear}'ten beri katıldı </h5>
                    </div>
                 </div>
                <div className={css.hr} />
                <div className={css.person}>
                    <Link to="/peaple">
                    <div className={css.f}>
                        <span>- - 0 - -</span>
                        <h5 className={css.h5}>list</h5>
                    </div>
                    </Link>
                    <div className={css.hr1} />
                    <div className={css.f}>
                    <span>0</span>
                        <h5 className={css.h5}>following</h5>
                    </div>
                    <div className={css.hr1} />
                    <div className={css.f}>
                    <span>{props.userPoint}</span>
                        <h5 className={css.h5}>lifetime XP</h5>
                    </div>
                </div>
                <div className={css.button}>
              <button className={css.button1}><BiEditAlt className={css.icon3}/>Edit Profile</button>
              &nbsp;&nbsp;
              {/* <button className={css.button2}>Create Post</button> */}
             <div className={css.button2}> <BiMessageSquareDetail className={css.icon4}/><TransitionsModal /></div>
            </div>
            
            </section>
            <h3 className={css.h3}>Your Statistics&nbsp;<BiBookBookmark/></h3>
            <Sponsors/>
        </div>
        {/* <Menu /> */}
        </>
    )
}
const mapStateToProps = state =>{
    return {
        userName: state.authReducer.userName,
        userPoint: state.authReducer.userPoint,
        createdAt: state.authReducer.createdAt,
    }
}
export default connect(mapStateToProps)(Profile);
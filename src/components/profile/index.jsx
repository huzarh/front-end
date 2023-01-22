import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack ,BiShareAlt,BiSpreadsheet,BiEditAlt,BiMessageSquareDetail,BiBookBookmark} from "react-icons/bi";
import css from "./style.module.css";
import Img from "../../assets/profile.jpeg";
import Menu from "../Menu";

const Profile = ()=>{
    return(
        <>
        <div className={css.all}>
            <section>
                <div className={css.head}><BiArrowBack className={css.icon1} /><div className={css.icons}><BiShareAlt className={css.icon2}/><BiSpreadsheet/></div></div>
                <div className={css.user}>
                    <div> 
                        {/* <div className={css.box} />  */}
                        <img src={Img} alt="profile" className={css.box}/>
                        
                        <h2 className={css.h2}>Asker Hüzeyir</h2> 
                        <h5 className={css.h5}>Joined since 22 Sun 2023</h5>
                    </div>
                 </div>
                <div className={css.hr} />
                <div className={css.person}>
                    <Link to="/peaple">
                    <div className={css.f}>
                        <span>0</span>
                        <h5 className={css.h5}>followers</h5>
                    </div>
                    </Link>
                    <div className={css.hr1} />
                    <div className={css.f}>
                    <span>0</span>
                        <h5 className={css.h5}>following</h5>
                    </div>
                    <div className={css.hr1} />
                    <div className={css.f}>
                    <span>0</span>
                        <h5 className={css.h5}>lifetime XP</h5>
                    </div>
                </div>
                <div className={css.button}>
              <button className={css.button1}><BiEditAlt className={css.icon3}/>Edit Profile</button>
              &nbsp;&nbsp;
              <button className={css.button2}><BiMessageSquareDetail className={css.icon4}/>Message</button>
            </div>
            
            </section>
            <h3 className={css.h3}>Your Statistics&nbsp;<BiBookBookmark/></h3>
            <div className={css.boxs}><div className={css.statusbox}></div>&nbsp;&nbsp;<div className={css.statusbox}></div></div>
            <div className={css.boxs}><div className={css.statusbox}></div>&nbsp;&nbsp;<div className={css.statusbox}></div></div>
            <div className={css.boxs}><div className={css.statusbox}></div>&nbsp;&nbsp;<div className={css.statusbox}></div></div>
            <div className={css.boxs}><div className={css.statusbox}></div>&nbsp;&nbsp;<div className={css.statusbox}></div></div>
        </div>
        <Menu />
        </>
    )
}
export default Profile;
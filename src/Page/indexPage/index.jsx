import React from "react";
import css from "./style.module.css";
import { BiExit } from "react-icons/bi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions2 from "../../redux/action/signupActions";
import * as actions3 from "../../redux/action/loginActions";



const IndexPage = (props) => {
  const logout = () => {
    props.logout();
    props.navigate("/");
  };
  const ders = [
    {
      bgColor: 'darkorange',
      buttonValue:'Sınava girmek',
      name: 'A1',
      url:"/A1",
      text:'şu an yok',
      bonus:Number(localStorage.getItem("konu"))+0.1,
      bonusValue:(p)=>{
        const bonusV = p*100/11
        return Math.floor(bonusV);
      },
    },{
      bgColor: 'darkorchid',
      buttonValue:'Sınava girmek',
      name: 'A2',
      url:"/A2",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return bonusV;
      },
    },{
      bgColor: 'darkturquoise',
      buttonValue:'Sınava girmek',
      name: 'B1',
      url:"/B1",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return bonusV;
      },
    },{
      bgColor: 'darkorange',
      buttonValue:'Sınava girmek',
      name: 'B2',
      url:"/B2",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return bonusV;
      },
    },{
      bgColor: 'darkorange',
      buttonValue:'Sınava girmek',
      name: 'C1',
      url:"/C1",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return bonusV;
      },
    }]
  return (
    <div>
      <div className={css.top}>
        <div className={css.head}>
          <div>📚&nbsp;&nbsp;Seviyeler</div>

          <BiExit className={css.icon1} onClick={logout} />
        </div>
        <div className={css.button}>
            <button className={css.button2}>PRATIK</button>
            &nbsp;&nbsp;
            <button className={css.button1}  >
            EZBERLE
            </button>
          </div>
      </div>
      <div className={css.row}>
        
          
              {ders.map((e,i) => (
              <div className={css.column} key={i}>
              <div className={css.card} style={e.bonus === 0 ? {opacity:'0.3'} : {opacity:'1'}}>
                <div style={{background: e.bgColor}} className={css.cardTop1}>
                <div>
                 <div className={css.cardButton}>Ders</div>
                    <h3 className={css.h3}>{e.name} Konuları</h3>
                    <p className={css.p}>{e.text}</p>
                </div>
                <div>
                  <img className={css.bg} src={`https://api.dicebear.com/6.x/initials/svg?seed=${e.name}`} alt="emoji" />
                </div>
                </div>
                <div className={css.cardBottom}>
                  <div className={css.container}>
                    <div style={{width:`${e.bonusValue(e.bonus)}%`}} className={css.bonus}></div>
                  </div>
                  <div className={css.cardItem1}><h4 className={css.cardItemH3}>{e.bonusValue(e.bonus)*10}/1000</h4><p>0 min</p></div>
                  <div className={css.hr} />
                  <Link to={e.bonus && e.url}><div className={css.cardItem1}><h4>Başla !</h4><p>〉</p></div></Link>
                </div>
              </div>
              </div>
              ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.cloudReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions3.loginUserSuccess(token, userId)),
    logout: () => dispatch(actions2.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);

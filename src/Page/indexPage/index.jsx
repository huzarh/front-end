import React, { useContext } from "react";
import css from "./style.module.css";
// import Menu from "../../components/Menu";
import { BiExit } from "react-icons/bi";
// import * as actions from "../../redux/action/orderActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions2 from "../../redux/action/signupActions";
import * as actions3 from "../../redux/action/loginActions";
import image from "../../assets/289065768_1141379429761857_3254050950829227489_n.jpeg";
import img1 from "../../assets/emoji2.png"
import img2 from "../../assets/emoji1.png"
import img3 from "../../assets/emoji5.png"



const IndexPage = (props) => {

  // const [ask,setAsk]=useState('');
  const logout = () => {
    props.logout();
    props.navigate("/");
  };
  const handleClick = () => {
    props.setMess(true);
  };
  const ders = [
    {
      bgColor: 'darkorange',
      buttonValue:'Sınava girmek',
      name: 'A1',
      url:"/A1",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      img:img1,
      bonus:1,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return `${bonusV}%`;
      },
    },{
      bgColor: 'darkorchid',
      buttonValue:'Sınava girmek',
      name: 'A2',
      url:"/A2",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      img:img2,
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return `${bonusV}%`;
      },
    },{
      bgColor: 'darkturquoise',
      buttonValue:'Sınava girmek',
      name: 'B1',
      url:"/B1",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      img:img3,
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return `${bonusV}%`;
      },
    },{
      bgColor: 'darkorange',
      buttonValue:'Sınava girmek',
      name: 'B2',
      url:"/B2",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      img:img1,
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return `${bonusV}%`;
      },
    },{
      bgColor: 'darkorange',
      buttonValue:'Sınava girmek',
      name: 'C1',
      url:"/C1",
      text:'2000P kazanın ve konulardan özel bir bonus alın!',
      img:img1,
      bonus:0,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return `${bonusV}%`;
      },
    }]
  return (
    <div>
      <div className={css.top}>
        <div className={css.head}>
          <div>📚&nbsp;&nbsp;Dersler</div>

          <BiExit className={css.icon1} onClick={logout} />
        </div>
        {/* <div className={css.button}>
            <button className={css.button1}>Target</button>
            &nbsp;&nbsp;
            <button className={css.button2} onClick={handleClick}>
              Badges
            </button>
          </div> */}
      </div>
      <div className={css.row}>
        
          
              {ders.map((e,i) => (
              <div className={css.column} key={i}>
              <div className={css.card} style={e.bonus === 0 ? {opacity:'0.3'} : {opacity:'1'}}>
                <div style={{background: e.bgColor}} className={css.cardTop1}>
                <div>
                 <div className={css.cardButton}>Ders</div>
                    {/* <button className={css.cardButton}>{e.buttonValue}</button> */}
                    <h3 className={css.h3}>Ders 10</h3>
                    <p className={css.p}>{e.text}</p>
                </div>
                <div>
                  <img className={css.bg} src={`https://api.dicebear.com/6.x/initials/svg?seed=${e.name}`} alt="emoji" />
                </div>
                </div>
                <div className={css.cardBottom}>
                  <div className={css.container}>
                    <div style={{width:e.bonusValue(e.bonus)}} className={css.bonus}></div>
                  </div>
                  <div className={css.cardItem1}><h4 className={css.cardItemH3}>{e.bonus}/2000</h4><p>3 days</p></div>
                  <div className={css.hr} />
                  <Link to={e.bonus && e.url}><div className={css.cardItem1}><h4>Ders çalışmak</h4><p>〉</p></div></Link>
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

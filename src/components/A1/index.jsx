import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import css from "./style.module.css";
// import Yazma from "./yazma";
import img1 from "../../assets/emoji2.png"
import img2 from "../../assets/emoji1.png"
import img3 from "../../assets/emoji5.png"


function A1() {

  const ders = [
    {
      bgColor: 'darkorange',
      buttonValue:'Ders 1',
      name: 'Yazma',
      url:"/A1/yazma",
      text:'1500XP kazanın ve Yardımcıdan özel bir bonus alın!',
      img:img1,
      bonus:904,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return `${bonusV}%`;
      },
    },{
      bgColor: 'darkorchid',
      buttonValue:'Ders 2',
      name: 'Konushma',
      url:"/A1/konushma",
      text:'3000XP kazanın ve Yardımcıdan özel bir bonus alın!',
      img:img2,
      bonus:1400,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return `${bonusV}%`;
      },
    },{
      bgColor: 'darkturquoise',
      buttonValue:'Ders 3',
      name: 'Dinleme',
      url:"/A1/dinleme",
      text:'2000XP kazanın ve Yardımcıdan özel bir bonus alın!',
      img:img3,
      bonus:1200,
      bonusValue:(p)=>{
        const bonusV = p*100/2000
        return `${bonusV}%`;
      },
    }
  ]
  
  return (
    <div>
      <div className={css.head}>
        <div className={css.head1}>
          <Link to="/index-page">
            <BiArrowBack className={css.icon1} />
          </Link>
          &nbsp;&nbsp;A1
        </div>
      </div>
      
      <div className={css.row}>
        
          
              {ders.map((e,i) => (
              <div className={css.column} key={i}>
              <div className={css.card}>
                <div style={{background: e.bgColor}} className={css.cardTop1}>
                <div>
                    <button className={css.cardButton}>{e.buttonValue}</button>
                    <h3 className={css.h3}>{e.name} 10</h3>
                    <p className={css.p}>{e.text}</p>
                </div>
                <div>
                  <img className={css.bg} src={e.img} alt="emoji" />
                </div>
                </div>
                <div className={css.cardBottom}>
                  <div className={css.container}>
                    <div style={{width:e.bonusValue(e.bonus)}} className={css.bonus}></div>
                  </div>
                  <div className={css.cardItem1}><h4 className={css.cardItemH3}>{e.bonus}/2000</h4><p>3 days left</p></div>
                  <div className={css.hr} />
                  <Link to={e.url}><div className={css.cardItem1}><h4>Meydan okumayı kabul etmek</h4><p>〉</p></div></Link>
                </div>
              </div>
              </div>
              ))}
      </div>
    </div>
  );
}
export default A1;

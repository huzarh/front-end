 
import React, { useState } from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";

export default function Research(props) {
  const [soru1, setSoru1] = useState("");
  const [soru2, setSoru2] = useState("");
  const [soru3, setSoru3] = useState("");
  const [soru4, setSoru4] = useState("");
  const [soru5, setSoru5] = useState("");
  const [soru6, setSoru6] = useState("");

  const data = [
    {
      id: 1,
      soru: "Leyla ve arkadaşları kafede ne yapmıyor?",
      cevap: ["Kahve yapıyorlar", "Tatlı yiyorlar", "Ders çalışıyorlar",'Kahve içiyorlar'],
    },
    {
      id: 2,
      soru: "Metne göre market nerede?",
      cevap: ["Leyla’nın evinin yanında", "Leyla’nın evinin altında", "Leyla’nın evinin yakınında",'Leyla’nın evinin karşısında'],
    },
    {
      id: 3,
      soru: "Onlar saat kaçta spor salonuna gidiyorlar?",
      cevap: ["Beşi yirmi kala", "Dörde yirmi kala", "Dörde beşi kala",'Altıyı yirmi geçe'],
    },
    {
      id: 4,
      soru: "Leyla’nın evi hangi sokakta?",
      cevap: ["Bülbül Sokak", "Sümbül Sokak", "Gül Sokak",'Divan Sokak'],
    },
    {
      id: 5,
      soru: "Leyla kaç yaşında?",
      cevap: ["On yedi", "Otuz", "Yirmi dokuz",'On dokuz'],
    },
    {
      id: 6,
      soru: "Metne göre Divan Kafe nerede?",
      cevap: ["Sümbül Sokak’ta", "Marketin yanında", "Yan sokakta",'Evin karşısında'],
    },
  ];

  const Clicked = (e, id) => {
    switch (id) {
      case 1: setSoru1(e); break;
      case 2: setSoru2(e); break;
      case 3: setSoru3(e); break;
      case 4: setSoru4(e); break;
      case 5: setSoru5(e); break;
      case 6: setSoru6(e); break;
      default: break;
    }
  };
  // window.scrollTo({ top: 0, behavior: 'smooth' });

  const Submit =()=>{
    props.setMessName("warning");
    if(soru1 === ''){
      props.setMess(true);
      props.setMessText('soru1');
    } else if (soru2 === ''){
      props.setMess(true);
      props.setMessText('soru2');
    } else if (soru3 === ''){
      props.setMess(true);
      props.setMessText('soru3');
    } else if (soru4 === ''){
      props.setMess(true);
      props.setMessText('soru4');
    } else if (soru5 === ''){
      props.setMess(true);
      props.setMessText('soru5');
    } else if (soru6 === ''){
      props.setMess(true);
      props.setMessText('soru6');
    } else {
      console.log( soru1, soru2, soru3, soru4, soru5, soru6 );
    }
  }

  return (
    <div className={css.sec}>
      <section  >
      <Link to='/profile'><button className={css.subClose}>Kapat</button></Link>
      <div className={css.cards}><p>Merhaba, benim adım Leyla. 19 yaşındayım. Ailem Edirne’de yaşıyor. Ben Sakarya’da yalnız yaşıyorum. Evimde yatak odası, salon, mutfak, balkon ve banyo var. Evim Gül Sokak’ta. Evimin karşısında bir market var. Bu marketten alışveriş yapıyorum. Marketin yanında bir spor salonu var. Komşum ile beraber spor salonuna gidiyoruz. Her gün 16.20’den 17.20’ye kadar spor yapıyoruz. Yan sokağın adı Bülbül Sokak. Burada bir kafe var. Kafenin adı Divan Kafe. Çok güzel ve çok sakin bir yer. Orada bazen tatlı yiyoruz, bazen kahve içiyoruz, bazen ders çalışıyoruz. Arkadaşlarımın evi benim evimin yakınında. Onlar Sümbül Sokak’ta oturuyor. Biz genellikle beraber vakit geçiriyoruz. Evimi, sokağımı, arkadaşlarımı ve Sakarya’yı çok seviyorum.</p></div>
      <div className={css.cards}><h5>Aşağıdaki soruları metne göre cevaplayınız.</h5></div>
      {data.map((el,i) => (
       <div className={css.cards}> <div key={el.id}>
          
            <h5>{el.soru}</h5>
            {el.cevap.map((e, i) => (
              <button
                key={i}
                onClick={() => Clicked(e, el.id)}
                className={ soru1 === e || soru2 === e ||  soru3 === e ||  soru4 === e || soru5 === e || soru6 === e
                    ? css.cevapActive
                    : css.cevap
                }
              >{e}</button>
            ))}
          </div>
        </div>
      ))}
      </section>
      <button onClick={Submit} className={css.submit}>Sinav</button>
    </div>
  );
}

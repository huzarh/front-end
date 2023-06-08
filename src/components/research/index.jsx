 
import React, { useState } from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import Cevap from './cevap'

const style = {
  position: 'absolute',
  // display:'flex',
  // alignItems:'center',
  // justifyContent:'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'black',
  // border: '2px solid #000',
  boxShadow: 44,
//   p: 4,
  margin:' auto',
  padding:'320px 15px'
};

export default function Research(props) {
  const [soru1, setSoru1] = useState("");
  const [soru2, setSoru2] = useState("");
  const [soru3, setSoru3] = useState("");
  const [soru4, setSoru4] = useState("");
  const [soru5, setSoru5] = useState("");
  const [soru6, setSoru6] = useState("");
  // const [too, setToo] = useState(0);
  const [open, setOpen] = useState(false);

  // const doruCevap = ['Kahve yapıyorlar', 'Leyla’nın evinin karşısında', 'Dörde yirmi geçe','Gül Sokak','On dokuz','Yan sokakta']
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
      cevap: ["Beşi yirmi kala", "Dörde yirmi geçe", "Dörde beşi kala",'Altıyı yirmi geçe'],
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

    const handleClose = () => {
      setOpen(false);
    };

  const Submit = () =>{
    props.setMessName("warning");
    if(soru1 === ''){
      props.setMess(true);
      props.setMessText('soru 1 cevaplayınız !!!');
    } else if (soru2 === ''){
      props.setMess(true);
      props.setMessText('soru 2 cevaplayınız !!!');
    } else if (soru3 === ''){
      props.setMess(true);
      props.setMessText('soru 3 cevaplayınız !!!');
    } else if (soru4 === ''){
      props.setMess(true);
      props.setMessText('soru 4 cevaplayınız !!!');
    } else if (soru5 === ''){
      props.setMess(true);
      props.setMessText('soru 5 cevaplayınız !!!');
    } else if (soru6 === ''){
      props.setMess(true);
      props.setMessText('soru 6 cevaplayınız !!!');
    } else {

      // let cevap =  [soru1, soru2, soru3, soru4, soru5, soru6];
      // for (let i = 0; i < doruCevap.length; i++) {
      //   doruCevap[i] === cevap[i] && too++;
      //   // if (doruCevap[i] === cevap[i]) setToo(too + 1);
      //   }
        setOpen(true);
    }
   
        
  }

  
  

  return (
    <div className={css.sec}>
      <section  >
      <Link to=''><button className={css.subClose}>Kapat</button></Link>
      <div className={css.cards}><p>Merhaba, benim adım Leyla. 19 yaşındayım. Ailem Edirne’de yaşıyor. Ben Sakarya’da yalnız yaşıyorum. Evimde yatak odası, salon, mutfak, balkon ve banyo var. Evim Gül Sokak’ta. Evimin karşısında bir market var. Bu marketten alışveriş yapıyorum. Marketin yanında bir spor salonu var. Komşum ile beraber spor salonuna gidiyoruz. Her gün 16.20’den 17.20’ye kadar spor yapıyoruz. Yan sokağın adı Bülbül Sokak. Burada bir kafe var. Kafenin adı Divan Kafe. Çok güzel ve çok sakin bir yer. Orada bazen tatlı yiyoruz, bazen kahve içiyoruz, bazen ders çalışıyoruz. Arkadaşlarımın evi benim evimin yakınında. Onlar Sümbül Sokak’ta oturuyor. Biz genellikle beraber vakit geçiriyoruz. Evimi, sokağımı, arkadaşlarımı ve Sakarya’yı çok seviyorum.</p></div>
      <div className={css.cards}><h5>Aşağıdaki soruları metne göre cevaplayınız.</h5></div>
      {data.map((el) => (
       <div className={css.cards}><div key={el.id}>
          
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
      {/* <buttonclassName={css.submit}>Sinav</buttonclassName=> */}
      <Cevap open={open} close={handleClose}  onClick={Submit}  cevap={[soru1, soru2, soru3, soru4, soru5, soru6]} doruCevap={['Kahve yapıyorlar', 'Leyla’nın evinin karşısında', 'Dörde yirmi geçe','Gül Sokak','On dokuz','Yan sokakta']}/>
    </div>
  );
}

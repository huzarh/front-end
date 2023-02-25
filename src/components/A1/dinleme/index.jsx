import React  from 'react';
import css from "./style.module.css"
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Voice from "../voice";
// ,BiPlayCircle
const Dinleme = () => {
  return (
    <div>
      <div className={css.head}>
        <div className={css.head1}>
          <Link to="/A1">
            <BiArrowBack className={css.icon1} />
          </Link>
          &nbsp;&nbsp;Dinleme
        </div>
          <input className={css.inputSearch} type="search" placeholder="Search..."/>
      </div>
      <section className={css.section}>
       <label><h1 className={css.h22}> <Voice voice={`BABAM,.,., ,

Orta boylu, geniş omuzlu, büyük başlı, yuvarlak yüzlü, kalın kara kaş­lı, ela gözlü, irice bıyıklıdır. Sırma işlemeli yelekteki düğmelerinin çoğu, yaz kış çözüktür; iri, kalın bilekleri vardır. Belinde bir şal vardır. Pek yakı­şıklı, dolgun vücutlu bir insandır, ama şişman değildir.

Onun ahlâkına dair birkaç söz söyleyeyim: Kimseye fenalık etmez, pek çok kişiye iyilik eder. Doğruluk, mertlik kendisine babasından miras. Biraz hiddetlidir. Dünyada hiç kimseye muhtaç olmadan yaşamayı mutlu­luk sayar ve kendi işleriyle meşgul olur.

Ufak bir dükkânı vardır. Sabahleyin erkenden dükkânına gider. Ak­şam üstü doğruca evine gelir. Hiç içki  içmez, sigara kullanmaz. Evimizi kendisi yaptırdı. Evine çok iyi bakar. Her şeyin iyisini sa­tın almak ister. O küçük ev, büyük bir saadet yeridir.`} />&nbsp;&nbsp;&nbsp;BABAM</h1><p><br />

Orta boylu, geniş omuzlu, büyük başlı, yuvarlak yüzlü, kalın kara kaş­lı, ela gözlü, irice bıyıklıdır. Sırma işlemeli yelekteki düğmelerinin çoğu, yaz kış çözüktür; iri, kalın bilekleri vardır. Belinde bir şal vardır. Pek yakı­şıklı, dolgun vücutlu bir insandır, ama şişman değildir.

Onun ahlâkına dair birkaç söz söyleyeyim: Kimseye fenalık etmez, pek çok kişiye iyilik eder. Doğruluk, mertlik kendisine babasından miras. Biraz hiddetlidir. Dünyada hiç kimseye muhtaç olmadan yaşamayı mutlu­luk sayar ve kendi işleriyle meşgul olur.

Ufak bir dükkânı vardır. Sabahleyin erkenden dükkânına gider. Ak­şam üstü doğruca evine gelir. Hiç içki  içmez, sigara kullanmaz. Evimizi kendisi yaptırdı. Evine çok iyi bakar. Her şeyin iyisini sa­tın almak ister. O küçük ev, büyük bir saadet yeridir.</p></label><hr />
      </section>
    </div>
  );
};
/* <BiPlayCircle/>&nbsp; */
export default Dinleme;
import React from "react";
import css from "./style.module.css"
import { Link } from 'react-router-dom';
import { BiArrowBack,BiPlayCircle  } from "react-icons/bi";

import Voice from "../voice";

function Konushma() {
  return (
    <div className={css}>
      <div className={css.head}>
        <div className={css.head1}>
          <Link to="/A1">
            <BiArrowBack className={css.icon1} />
          </Link>
          &nbsp;Konushma
        </div>
          <input className={css.inputSearch} type="search" placeholder="Search..."/>
      </div>
      <section className={css.section}>
       <label><h1 className={css.h22}> <Voice voice={'Merhaba,'} value={'Merhaba'}/>&nbsp;<BiPlayCircle/></h1></label><hr />
       <label><h1 className={css.h11}> <Voice voice={'Merhaba,Senin adın ne'} value={'Merhaba,Senin adın ne'}/>&nbsp;<BiPlayCircle/></h1></label><hr />
       <label><h1 className={css.h22}> <Voice voice={'Benim adım Hüzeyir,Senin adın ne'} value={'Benim adım Hüzeyir,Senin adın ne'}/>&nbsp;<BiPlayCircle/></h1></label><hr />
       <label><h1 className={css.h11}> <Voice voice={'Mohhamed,nerelisin'} value={'Mohhamed,nerelisin'}/>&nbsp;<BiPlayCircle/></h1></label><hr />
       <label><h1 className={css.h22}> <Voice voice={'Mongolstanlıyım,sen'} value={'Mongolstanlıyım,sen'}/>&nbsp;<BiPlayCircle/></h1></label><hr />
       <label><h1 className={css.h11}> <Voice voice={'Mısır'} value={'Mısır'}/>&nbsp;<BiPlayCircle/></h1></label>
      </section>
    </div>
  );
}
export default Konushma;
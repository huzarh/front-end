import React from "react";
import css from "./style.module.css";
import { BiArrowBack,BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Voice from "../voice";

function Yazma() {
  const letters = [['A','a'], ['B','b'], ['C','c'], ['Ç','ç'], ['D','d'], ['E','e'], ['F','f'], ['G','g'], ['Ğ','ğ'], ['H','h'], ['İ','i'], ['I','ı'], ['J','j'], ['K','k'], ['L','l'], ['M','m'], ['N','n'], ['O','o'], ['Ö','ö'], ['P','p'], ['R','r'], ['S','s'], ['Ş','ş'], ['T','t'], ['U','u'], ['Ü','ü'], ['V','v'], ['Y','y'], ['Z','z']]
  const handleTextToSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.lang = "tr-TR";
    utterance.rate = 0.7;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };
  return (
    <>
    <div className={css.head}>
        <div className={css.head1}>
          <Link to="/A1">
            <BiArrowBack className={css.icon1} />
          </Link>
          &nbsp;&nbsp;Yazma
        </div>
          <input className={css.inputSearch} type="search" placeholder="Search..."/>
      </div>
      <section className={css.section}> 
        <h1>Türk Alfabesi : </h1> <br />
        <div className={css.cards}>
          {letters.map((e,i) => (
            <div className={css.letters} key={i}>
              <button className={css.bigLetter} onClick={() => handleTextToSpeech(e[0])}>{e[0]}</button>
              <button className={css.litLetter} onClick={() => handleTextToSpeech(e[1])}>{e[1]}</button>
            </div>
          ))}
        </div>
      </section>
      <section className={css.section}>
     <div><button className={css.unlu} onClick={() => handleTextToSpeech(' a, e, ı, i, o, ö, u, ü')}><p>Ünlü harfler:</p></button> A, E, I, İ, O, Ö, U, Ü</div>
      </section>
    </>
  );
}
export default Yazma;


// const TextSpeech = () => {
//   // const { text, setText } = useState("");
//   const handleTextToSpeech = (text) => {
//     const utterance = new SpeechSynthesisUtterance();
//     utterance.text = text;
//     utterance.lang = "tr-TR";
//     utterance.rate = 0.8;
//     utterance.pitch = 1;
//     window.speechSynthesis.speak(utterance);
//   };

//   return (
//     <div>
//       <div className={css.letters}>
//         <button onClick={() => handleTextToSpeech("A")}>A</button>
//         <button onClick={() => handleTextToSpeech("a")}>a</button>
//       </div>
//       <div className={css.letters}>
//       <button onClick={() => handleTextToSpeech("C")}>C</button>
//       <button onClick={() => handleTextToSpeech("c")}>c</button>
//       </div>
//       <div className={css.letters}>
//       <button onClick={() => handleTextToSpeech("Ğ")}>Ğ</button>
//       <button onClick={() => handleTextToSpeech("ğ")}>ğ</button>
//       </div>
//       <div className={css.letters}>
//       <button onClick={() => handleTextToSpeech("Ç")}>Ç</button>
//       <button onClick={() => handleTextToSpeech("ç")}>ç</button>
//       </div>
//       <div className={css.letters}>
//       <button onClick={() => handleTextToSpeech("Ş")}>Ş</button>
//       <button onClick={() => handleTextToSpeech("ş")}>ş</button>
//       </div>
//     </div>
  // );
// };
// 
// export default TextSpeech;

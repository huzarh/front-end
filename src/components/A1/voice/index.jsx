import React, { useState } from 'react';
// import { BiPlayCircle } from "react-icons/bi";

const Voice = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [utterance, setUtterance] = useState(null);
  
  const handleTextToSpeech = (text) => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
    } else {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'tr-TR';
      speech.rate = 0.85;
      speech.pitch = 0.7;
      speech.onboundary = function(event) {
        console.log(event.charIndex);
        // console.log(speech.text.substring(event.charIndex));
      };
      
      // speech.addEventListener('end', () => setIsPlaying(false));
      window.speechSynthesis.speak(speech);
      // setUtterance(speech);
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div>
      <button style={{border:'none',color:'#263238',backgroundColor:"transparent" }} onClick={()=>handleTextToSpeech(props.voice)}>{isPlaying ? "Stop" : "Play"} 🎵</button>
    </div>
  );
};

export default Voice;
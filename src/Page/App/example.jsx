import React,{useRef} from 'react';
import ReactPlayer from "react-player";

function Soz(props) {
  const playerRef = useRef(null);
  console.log(props.text);
  return (
    <ReactPlayer ref={playerRef} url={`https://m.freetranslations.org/speak.php?word=${props.text}&lang=tr`} width="100%" volume={0.05} height="20px" style={{margin:' 0'}} playing={props.play} controls />
  );
}

export default Soz;
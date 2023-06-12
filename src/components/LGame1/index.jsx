import React, { useState } from "react";
import { getRandomInt } from "./utils";
import Button from "./button";
import "./style.css";

const images = [
  { image: "https://uploads.codesandbox.io/uploads/user/ca815fc8-8136-4a4b-a77f-00e621d064b4/RWgX-cat.jpg", name: "muur" },
  { image: "https://uploads.codesandbox.io/uploads/user/ca815fc8-8136-4a4b-a77f-00e621d064b4/atE1-dog.jpg", name: "nohoi" },
  { image: "https://uploads.codesandbox.io/uploads/user/ca815fc8-8136-4a4b-a77f-00e621d064b4/pctY-cow.jpg", name: "vher" },
  { image: "https://uploads.codesandbox.io/uploads/user/ca815fc8-8136-4a4b-a77f-00e621d064b4/x5ka-mouse.jpg", name: "hulgan" }
];

function LGame1() {
  const [name, setName] = useState(images[0].name);
  const [result, setResult] = useState();
  const [answersCount, setAnswersCount] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  console.log(name);

  const handleClick = text => e => {
    console.log('click');
    let nextName = images[getRandomInt(0, images.length)].name;
    while (nextName === name) {
      nextName = images[getRandomInt(0, images.length)].name;
      setName(nextName);
    }
    setName(images[getRandomInt(0, images.length)].name);
    
    if (text === name) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
    setResult(text === name);
    setAnswersCount(answersCount + 1);
  };
  const img = images.find(image => image.name === name);
  const reset = () => {
    setAnswersCount(0);
    setCorrectAnswersCount(0);
  };

  return (
    <div className="App">
      <h1>..</h1>
      <img src={img.image} alt="img" />
      <div>Correct: {correctAnswersCount} out of {answersCount}</div>
      <div className="result">{result ? "True!" : "False!"}</div>
      <ul className="answers">
        {images.map(image => (
          <div key={image.name}>
          <Button  text={image.name} onClick={handleClick} />
          <button onClick={handleClick}>{image.name}</button>
          </div>
        ))}
      </ul><br />
      <button className="reset-button" onClick={reset}>Reset</button>
    </div>
  );
}
 export default LGame1;

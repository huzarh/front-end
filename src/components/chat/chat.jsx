import React from "react";
import "./style.css";

function Ch(props) {
    const textArray = props.e.split('\n');
    const renderedText = textArray.map((string, index) => {
      if (string.startsWith('-')) {
        return <ul key={index}>{string}</ul>;
      } else {
        return <p key={index}>{string}</p>;
      }
    });
    
    return (
      <div className="mess">
        {renderedText}
      </div>
    );
}

 
export default Ch;

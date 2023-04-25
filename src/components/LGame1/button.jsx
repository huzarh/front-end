import React from "react";

const Button = ({ text, onClick }) => {
  return <li onClick={onClick(text)} style={{background:"transparent"}}>{text}</li>;
};

export default Button;

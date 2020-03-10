import React from "react";

import "./number-button.styles.scss";

//function to determine if a button is a number or not ie: plus/minues sign
const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

//stateless number button component to render buttons for calculator passing children as props
const NumberButton = props => (
  <div
    //selectively rendering classes to display correct styling
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    //props being passed to click function to ensure divs have clickable functionality in our stateful App component
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default NumberButton;

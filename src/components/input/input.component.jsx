import React from "react";

import "./input.styles.scss";

//stateless component rendering what the user clicks to be displayed in the calculator
export const Input = props => <div className="input">{props.input}</div>;

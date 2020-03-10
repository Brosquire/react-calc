import React from "react";

import "./clear-button.styles.scss";

//stateless component to handle clearing function of our values
export const ClearButton = props => (
  <div className="clearButton" onClick={props.handleClear}>
    {props.children}
  </div>
);

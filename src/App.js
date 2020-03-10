import React from "react";

//import components
import NumberButton from "./components/number-button/number-button.component";
import { Input } from "./components/input/input.component";
import { ClearButton } from "./components/clear-button/clear-button.component";
//import mathjs library to handle calculations
import * as math from "mathjs";

import "./App.css";

class App extends React.Component {
  state = {
    input: ""
  };

  //function to add input values to be displayed
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  //function to handle the equation functionality
  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      //calculator components
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <NumberButton handleClick={this.addToInput}>7</NumberButton>
            <NumberButton handleClick={this.addToInput}>8</NumberButton>
            <NumberButton handleClick={this.addToInput}>9</NumberButton>
            <NumberButton handleClick={this.addToInput}>/</NumberButton>
          </div>
          <div className="row">
            <NumberButton handleClick={this.addToInput}>4</NumberButton>
            <NumberButton handleClick={this.addToInput}>5</NumberButton>
            <NumberButton handleClick={this.addToInput}>6</NumberButton>
            <NumberButton handleClick={this.addToInput}>*</NumberButton>
          </div>
          <div className="row">
            <NumberButton handleClick={this.addToInput}>1</NumberButton>
            <NumberButton handleClick={this.addToInput}>2</NumberButton>
            <NumberButton handleClick={this.addToInput}>3</NumberButton>
            <NumberButton handleClick={this.addToInput}>+</NumberButton>
          </div>
          <div className="row">
            <NumberButton handleClick={this.addToInput}>.</NumberButton>
            <NumberButton handleClick={this.addToInput}>0</NumberButton>
            <NumberButton handleClick={this.handleEqual}>=</NumberButton>
            <NumberButton handleClick={this.addToInput}>-</NumberButton>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              CLEAR
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

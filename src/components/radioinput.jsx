import React, { Component } from "react";
import "../css/radioinput.css";
import "../css/common.css";

class RadioInput extends Component {
  generateRadio() {
    let radioButtons = [];
    const radioOptions = this.props.options;
    for (let i = 0; i < radioOptions.length; i++) {
      let className = "radioButton ";
      className +=
        this.props.lastAnswer === radioOptions[i] ? "active" : "inactive";
      radioButtons.push(
        <button
          className={className}
          key={i}
          value={radioOptions[i]}
          onClick={(e) => {
            this.props.handleUserInput(e);
          }}
        >
          {radioOptions[i]}
        </button>
      );
    }
    return radioButtons;
  }
  render() {
    return <div className="radioButtonGrid">{this.generateRadio()}</div>;
  }
}

export default RadioInput;

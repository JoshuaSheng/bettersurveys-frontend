import React, { Component } from "react";
import "../css/scaleinput.css";
import "../css/common.css";

class ScaleInput extends Component {
  highlightScale(e) {
    console.log(e);
  }
  generateScale() {
    const scale = [];
    const scaleOptions = this.props.options;
    for (let i = scaleOptions.min; i <= scaleOptions.max; i++) {
      let className =
        parseInt(this.props.lastAnswer) >= i
          ? "active scaleValue"
          : "inactive scaleValue";
      scale.push(
        <button
          key={i}
          value={i}
          onClick={(e) => this.props.handleUserInput(e)}
          className={className}
        >
          {i}
        </button>
      );
    }
    return scale;
  }
  render() {
    return <div className="scale">{this.generateScale()}</div>;
  }
}

export default ScaleInput;

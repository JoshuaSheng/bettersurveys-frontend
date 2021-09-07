import React, { Component } from "react";
import "../css/questiontext.css";

class QuestionText extends Component {
  render() {
    return (
      <div className="questionText">
        <h1 className="counter">{(this.props.number + 1).toString() + ")"}</h1>
        <h1 className="prompt">{this.props.prompt}</h1>
      </div>
    );
  }
}

export default QuestionText;

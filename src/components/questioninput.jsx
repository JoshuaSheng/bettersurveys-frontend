import TextInput from "./textinput.jsx";
import RadioInput from "./radioinput";
import ScaleInput from "./scaleinput";
import "../css/questioninput.css";
import React, { Component } from "react";

class QuestionInput extends Component {
  render() {
    return (
      <div className="inputContainer">
        {this.getQuestionType()}
        {this.renderProgressionKeys()}
      </div>
    );
  }
  renderProgressionKeys() {
    let progressionKeys = [];
    const questionNumber = this.props.questionNumber;
    const numQuestionLength = this.props.questionData.length;
    if (questionNumber !== 0) {
      progressionKeys.push(
        <button
          key="0"
          onClick={(e) => {
            this.props.handleProgression(e);
          }}
          className="submit"
          value="back"
        >
          🡸
        </button>
      );
    }
    if (questionNumber !== numQuestionLength - 1) {
      progressionKeys.push(
        <button
          key="1"
          onClick={(e) => {
            this.props.handleProgression(e);
          }}
          className="submit"
          value="next"
        >
          🡺
        </button>
      );
    }
    if (questionNumber === numQuestionLength - 1) {
      progressionKeys.push(
        <button
          key="2"
          onClick={this.props.handleSubmission}
          className="submit"
          value="submit"
        >
          Submit
        </button>
      );
    }
    return progressionKeys;
  }

  getQuestionType() {
    const questionNumber = this.props.questionNumber;
    const currQuestionData = this.props.questionData[questionNumber];
    const questionType = currQuestionData.type;
    let question = null;
    switch (questionType) {
      case "text":
        question = (
          <TextInput
            handleUserInput={this.props.handleUserInput}
            lastAnswer={currQuestionData.answer}
          />
        );
        break;
      case "radio":
        question = (
          <RadioInput
            handleUserInput={this.props.handleUserInput}
            lastAnswer={currQuestionData.answer}
            options={currQuestionData.options.options}
          />
        );
        break;
      case "scale":
        question = (
          <ScaleInput
            handleUserInput={this.props.handleUserInput}
            lastAnswer={currQuestionData.answer}
            options={currQuestionData.options}
          />
        );
        break;
      default:
        question = <TextInput />;
        break;
    }
    return question;
  }
}

export default QuestionInput;

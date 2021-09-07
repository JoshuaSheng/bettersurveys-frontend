import React, { Component } from "react";
import QuestionText from "./questiontext";
import QuestionInput from "./questioninput";
import "../css/question.css";

class Question extends Component {
  render() {
    const questionData = this.props.questionData;
    const questionNumber = this.props.questionNumber;
    const currQuestionData = questionData[questionNumber];
    return (
      <div className="questionContainer">
        <QuestionText
          prompt={currQuestionData.question}
          number={questionNumber}
        />
        <QuestionInput
          handleUserInput={this.props.handleUserInput}
          questionData={questionData}
          questionNumber={questionNumber}
          handleProgression={this.props.handleProgression}
          handleSubmission={this.props.handleSubmission}
        />
      </div>
    );
  }
}
export default Question;

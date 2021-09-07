import "./App.css";
import Question from "./components/question";
import React, { Component } from "react";

class App extends Component {
  state = {
    questionNumber: 0,
    questionList: this.props.questions,
  };

  handleUserInput = (e) => {
    const value = e.target.value;
    let questionList = [...this.state.questionList];
    let questionNumber = this.state.questionNumber;
    questionList[questionNumber] = { ...questionList[questionNumber] };
    questionList[questionNumber].answer = value;
    this.setState({ questionList });
  };

  handleProgression = (e) => {
    const direction = e.target.value;
    const questionNumber = this.state.questionNumber;
    if (direction === "next") {
      this.setState({ questionNumber: questionNumber + 1 });
    } else {
      this.setState({ questionNumber: questionNumber - 1 });
    }
  };
  handleSubmission = async () => {
    const formSubmission = this.state.questionList.map(
      (question) => question.answer
    );
    const surveyID = 20020618;
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: surveyID, data: formSubmission }),
    };
    let res = await fetch("https://bettersurveys.herokuapp.com", options);
    console.log(res.ok);
  };

  render() {
    return (
      <div className="background">
        <Question
          handleUserInput={this.handleUserInput}
          questionNumber={this.state.questionNumber}
          questionData={this.state.questionList}
          handleProgression={this.handleProgression}
          handleSubmission={this.handleSubmission}
        />
      </div>
    );
  }
}

export default App;

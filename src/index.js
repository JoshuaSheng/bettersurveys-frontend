import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// let testExpressServer = (data) => {
//   async function expressCall() {
//     let res = await fetch("http://localhost:3001?id=20020618");
//     console.log("yes");
//     let rawData = await res.text();
//     console.log(rawData);
//   }
//   async function expressPost(data) {
//     const surveyID = 20020618;
//     let options = {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({ id: surveyID, data: data }),
//     };
//     let res = await fetch("http://localhost:3001", options);
//     console.log(res.ok);
//   }
//
//   expressCall();
// };
//
// const questionList = [];
//
// function createQuestion(questionList, question, type, options) {
//   const questionObj = {
//     question: question,
//     type: type,
//     answer: undefined,
//   };
//   switch (type) {
//     case "radio":
//     case "scale":
//       questionObj.options = options;
//       break;
//     default:
//       break;
//   }
//
//   questionList.push(questionObj);
// }
//
// createQuestion(
//   questionList,
//   "On a scale from 1-5, how would you rate us?",
//   "scale",
//   { min: 1, max: 5, num: 5 }
// );
// createQuestion(
//   questionList,
//   "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
//   "text"
// );
// createQuestion(questionList, "Which bear is best?", "radio", {
//   options: ["brown", "black", "grizzly", "polar"],
// });
// createQuestion(questionList, "How old are you?", "text");
// console.log(questionList);
//
// testExpressServer(questionList);
function renderSurvey() {
  async function expressCall() {
    let res = await fetch("http://bettersurveys.herokuapp.com?id=20020618");
    console.log("yes");
    let rawData = await res.json();
    ReactDOM.render(
      <React.StrictMode>
        <App questions={rawData[0].survey} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
  expressCall();
}

renderSurvey();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { Component } from "react";
import "../css/textinput.css";
import TextareaAutosize from "react-textarea-autosize";

class TextInput extends Component {
  render() {
    return (
      <form>
        <TextareaAutosize
          type="text"
          className="textinput"
          placeholder="Enter Text here..."
          value={this.props.lastAnswer}
          onChange={(e) => {
            this.props.handleUserInput(e);
          }}
        />
      </form>
    );
  }
}

export default TextInput;

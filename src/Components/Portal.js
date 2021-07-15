import React, { useState } from "react";
import * as Options from "./Options";

import "./Portal.css";

const Portal = (props) => {
  const [answerType, setAnswerType] = useState("Answertype");
  const [queTitle, setQueTitle] = useState("");

  const Option = Options[answerType];

  const handleChange = (event) => {
    setAnswerType(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your response has been added successfully");
    console.log(
      "The question title is:",
      queTitle,
      "The answer type selected is:",
      answerType
    );
    setQueTitle("");
    setAnswerType("Answertype");
  };
  return (
    <>
      <div className="container">
        <div className="main_div">
          <div className="child_div">
            <h3>Add Question</h3>
            <form>
              <input
                className="input"
                type="text"
                value={queTitle}
                placeholder="Question Title"
                onChange={(event) => setQueTitle(event.target.value)}
              />
              <select
                className="select"
                value={answerType}
                onChange={handleChange}
              >
                <option value="Answertype">Answer Type</option>
                <option value="None">None</option>
                <option value="Text">Text</option>
                <option value="Number">Number</option>
                <option value="Select">Select</option>
                <option value="TextArea">TextArea</option>
                <option value="Radio">Radio</option>
                <option value="Checkbox">Checkbox</option>
                <option value="Slider">Slider</option>
              </select>
              <Option />

              <button className="sub_btn" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portal;

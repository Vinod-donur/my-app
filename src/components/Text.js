import React, { useState } from "react";

export default function Text() {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  return (
    <>
      <div className="container">
        <h1>Enter your text here</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="textbox"
            rows="8"
            placeholder="start typing..."
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleUpClick}
          onChange={handleOnChange}
        >
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleDownClick}>
          Convert to lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

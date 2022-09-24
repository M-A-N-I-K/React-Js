import React, { useState } from "react";

export default function Textform(props) {
	const [text, setText] = useState("");
	const handleUpClick = () => {
		// console.log("Uppercase button clicked");
		let newText = text.toUpperCase();
		setText(newText);
	};
	const handleLoClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};
	const handleClear = () => {
		setText("");
	};
	const handleOnChange = (event) => {
		// console.log("Handle on change");
		setText(event.target.value);
	};
	// text = "New text";  // Wrong way to change the state
	// setText("New text");   // Correct way to change the state
	return (
		<>
			<div className="container">
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
						value={text}
						id="myBox"
						rows="8"
						onChange={handleOnChange}
					></textarea>
				</div>
				<button className="btn btn-primary mx-3" onClick={handleUpClick}>
					Convert to Uppercase
				</button>
				<button className="btn btn-primary mx-3" onClick={handleLoClick}>
					Convert to Lowercase
				</button>
				<button className="btn btn-primary" onClick={handleClear}>
					Clear Text
				</button>
			</div>
			<div className="container my-3">
				<h2>Your text Summary</h2>
				<p>
					{text.split(" ").length} words and {text.length} characters
				</p>
				<p>{0.008 * text.split(" ").length} minutes read</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	);
}

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
	const handleCopy = () => {
		var text = document.getElementById("myBox");
		text.select();
		navigator.clipboard.writeText(text.value);
	};
	const handleExtraSpaces = () => {
		let newText = text.split(/[ ] + /);
		setText(newText.join(" "));
	};
	// text = "New text";  // Wrong way to change the state
	// setText("New text");   // Correct way to change the state
	return (
		<>
			<div
				className="container"
				style={{
					color: props.mode === "dark" ? "white" : "black",
				}}
			>
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
						value={text}
						id="myBox"
						rows="8"
						style={{
							backgroundColor: props.mode === "dark" ? "black" : "white",
							color: props.mode === "dark" ? "white" : "black",
						}}
						onChange={handleOnChange}
					></textarea>
				</div>
				<button className="btn btn-primary mx-3" onClick={handleUpClick}>
					Convert to Uppercase
				</button>
				<button className="btn btn-primary mx-3" onClick={handleLoClick}>
					Convert to Lowercase
				</button>
				<button className="btn btn-primary mx-3" onClick={handleClear}>
					Clear Text
				</button>
				<button className="btn btn-primary mx-3" onClick={handleCopy}>
					Copy To Clipboard
				</button>
				<button className="btn btn-primary" onClick={handleExtraSpaces}>
					Remove Extra Spaces
				</button>
			</div>
			<div
				className="container my-3"
				style={{
					color: props.mode === "dark" ? "white" : "black",
				}}
			>
				{" "}
				<h2>Your text Summary</h2>
				<p>
					{text.split(" ").length} words and {text.length} characters
				</p>
				<p>{0.008 * text.split(" ").length} minutes read</p>
				<h2>Preview</h2>
				<p>
					{text.length > 0
						? text
						: "Enter Something in textbox to preview here"}
				</p>
			</div>
		</>
	);
}

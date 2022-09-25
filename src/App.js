import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/TextForm";
import React, { useState } from "react";
function App() {
	const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "black";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
		}
	};
	return (
		<>
			<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
			{/* <Navbar/> */}
			<div className="container my-3">
				<Textform heading="Enter the text to analyze below" mode={mode} />
				{/* <About /> */}
			</div>
		</>
	);
}

export default App;

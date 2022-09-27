import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
function App() {
	const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
	const [grayMode, setGrayMode] = useState("light"); // Whether dark mode is enabled or not
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "black";
			showAlert("Dark Mode has been enabled", "success");
			document.title = "TextUtils - Dark Mode";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light Mode has been enabled", "success");
			document.title = "TextUtils - Light Mode";
		}
	};
	const toggleGrayMode = () => {
		if (mode === "light") {
			setGrayMode("gray");
			document.body.style.backgroundColor = "gray";
			showAlert("Gray Mode has been enabled", "success");
		} else {
			setGrayMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light Mode has been enabled", "success");
		}
	};
	return (
		<>
			<Navbar
				title="TextUtils"
				mode={mode}
				toggleMode={toggleMode}
				toggleGrayMode={toggleGrayMode}
			/>
			<Alert alert={alert} />
			<div className="container my-3">
				<Textform
					heading="Enter the text to analyze below"
					mode={mode}
					grayMode={grayMode}
					showAlert={showAlert}
				/>
				{/* <About /> */}
			</div>
		</>
	);
}

export default App;

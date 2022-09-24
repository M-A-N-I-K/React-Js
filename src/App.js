import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* <Navbar/> */}
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;

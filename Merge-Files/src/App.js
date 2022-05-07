import Page10 from "./Components/Page-10/components/Page10";
import Page12 from "./Components/Page-12/components/page12";
import Page6 from "./Components/Page-6/Page6";
import Page15 from "./Components/Page-15/App";
import Page3 from "./Components/Page-3/Index";
import Page5 from "./Components/Page-5/SignupPage";
import Page1 from "./Components/Page-1/Index";

function App() {
  return (
    <div className="App">
      <Page10 />
      <div
        style={{ borderTop: "2px solid red", margin: "15px 0 15px 0" }}
      ></div>
      <Page12 />
      <div
        style={{ borderTop: "2px solid red", margin: "15px 0 15px 0" }}
      ></div>
      <Page6 />
      <div
        style={{ borderTop: "2px solid red", margin: "15px 0 15px 0" }}
      ></div>
      <Page15 />
      <div
        style={{ borderTop: "2px solid red", margin: "15px 0 15px 0" }}
      ></div>
      <Page3 />
      <div
        style={{ borderTop: "2px solid red", margin: "15px 0 15px 0" }}
      ></div>
      <Page5 />
      <div
        style={{ borderTop: "2px solid red", margin: "15px 0 15px 0" }}
      ></div>
      <Page1 />
    </div>
  );
}

export default App;

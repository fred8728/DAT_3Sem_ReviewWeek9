import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Upper from "./Monday/Upper";
import Array from "./Monday/Array";
import Welcome from "./Monday/Welcome";
import Count from "./Tuesday/Count";
import Time from "./Tuesday/Time";
import Effect from "./Tuesday/Effect";
import LarsDemo from "./LarsDemo";
import ListDemoApp from "./Tuesday/ListDemoApp";
import ListDemoApp2 from "./Tuesday/ListDemoApp2";
import FormDemo from "./Wednesday/Form/FormDemo";
import FormDemoMultiple from "./Wednesday/Form/FormDemoMultiple";
import App from "./Wednesday/LiftingStateUp/App";
import App2 from "./Wednesday/LiftingStateUp/App2";

let app = <FormDemoMultiple/>;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="1">LarsDemo</a>{" "}
      &nbsp;
      <a href="/" className="x" id="2">Upper</a>{" "}
      &nbsp;
      <a href="/" className="x" id="3">Array</a>{" "}
      &nbsp;
      <a href="/" className="x" id="4">Welcome</a>{" "} 
      &nbsp;
      <a href="/" className="x" id="5">Count</a>{" "}
      &nbsp;
      <a href="/" className="x" id="8">Time</a>{" "}
      &nbsp;
      <a href="/" className="x" id="9">Effect</a>{" "}
      &nbsp;
      <a href="/" className="x" id="6">ListDemoApp</a>{" "}
      &nbsp;
      <a href="/" className="x" id="7">ListDemoApp2</a>{" "}
      &nbsp;
      <a href="/" className="x" id="10">Form</a>{" "}
      &nbsp;
      <a href="/" className="x" id="11">FormMultiple</a>{" "}
      &nbsp;
      <a href="/" className="x" id="12">LiftingStateUp1</a>{" "}
      &nbsp;
      <a href="/" className="x" id="13">LiftingStateUp2</a>{" "}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "1":
      app = <LarsDemo />;
      break;
    case "2":
      app = <Upper />;
      break;
      case "3":
          app =<Array/>;
        break;
        case "4":
          app =<Welcome />;
        break;
    case "5":
        app =<Count />;
      break;
      case "8":
        app =<Time />;
      break;
      case "9":
        app =<Effect />;
      break;
      case "6":
        app =<ListDemoApp />;
      break;
      case "7":
        app =<ListDemoApp2 />;
      break;
      case "10":
        app =<FormDemo />;
      break;
      case "11":
        app =<FormDemoMultiple />;
      break;
      case "12":
        app =<App />;
      break;
      case "13":
        app =<App2 />;
      break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));

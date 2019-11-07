import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import PollContainer from "./components/pollContainer/container";
import Controls from "./components/control";

const { useState } = React;

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Controls />
      <PollContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

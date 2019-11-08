import React from "react";
import "./poll.css";
import History from "./history";
import Current from "./current";
import Controls from "../control/index";

const { useState } = React;

function PollContainer() {
  const tabs = document.getElementsByClassName("tab");
  const buttons = document.getElementsByClassName("navButtons");
  const [pos, setPos] = useState("20px");
  const move = () => {
    if (pos === "20px") {
      setPos("400px");
    } else {
      setPos("20px");
    }
  };

  const change = index => {
    for (let e of buttons) {
      e.style.backgroundColor = "";
      e.style.color = "black";
    }
    buttons[index].style.backgroundColor = "#32a6bb";
    buttons[index].style.color = "white";
    for (let e of tabs) {
      e.style.display = "none";
    }
    tabs[index].style.display = "block";
  };
  return (
    <div className="box" style={{ height: pos }}>
      <div className="boxHeader">
        <button className="move" onClick={move} />
      </div>
      <div className="boxNav">
        <button
          style={{ backgroundColor: "#32a6bb", color: "white" }}
          onClick={() => change(0)}
          className="navButtons"
        >
          Current
        </button>
        <button onClick={() => change(1)} className="navButtons">
          History
        </button>
        <button onClick={() => change(2)} className="navButtons">
          Results
        </button>
        <button onClick={() => change(3)} className="navButtons">
          Yea
        </button>
      </div>
      {/*  */}
      <div className="boxBody">
        <div className="boxContent">
          <Current />
          <History />
        </div>
      </div>
    </div>
  );
}

export default PollContainer;

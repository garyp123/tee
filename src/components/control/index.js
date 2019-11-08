import React from "react";
import "./control.css";
import ControlCurrent from "./controlCurrent";

const { useState } = React;

function Controls() {
  const [emptyPoll, setEmptyPoll] = useState("");
  const [newPoll, setNewPoll] = useState("");
  const [currentPolls, setCurrentPolls] = useState([]);

  console.log(newPoll, currentPolls);

  const add = () => {
    if (newPoll === "") {
      setEmptyPoll("Enter a poll pls");
    } else if (currentPolls.includes(newPoll)) {
      setEmptyPoll("Poll already exists");
    } else {
      setEmptyPoll("");
      setCurrentPolls(e => [...e, newPoll]);
      setNewPoll("");
    }
  };

  const handleKeypress = event => {
    if (event.key === "Enter") {
      if (newPoll === "") {
        setEmptyPoll("Enter a poll pls");
      } else if (currentPolls.includes(newPoll)) {
        setEmptyPoll("Poll already exists");
      } else {
        setEmptyPoll("");
        setCurrentPolls(e => [...e, newPoll]);
        setNewPoll("");
      }
    }
  };
  return (
    <div className="controlForm">
      <div className="controlHeader">
        <h4>Control polls here</h4>
      </div>
      <div className="controlBody">
        {/*  */}
        <div className="controlSide">
          <button style={{ backgroundColor: " #f7f7f7" }}>Polls menu</button>
          <button>Suggestion menu</button>
        </div>
        {/*  */}
        <div className="controlContent">
          {/*  */}
          <div className="controlAdd">
            <div style={{ display: "flex" }}>
              <p style={{ clear: "both" }}>Enter a new poll:</p>
              <input
                onKeyPress={handleKeypress}
                value={newPoll}
                className="newPoll"
                onChange={e => setNewPoll(e.target.value)}
              />
              <button className="addPoll" onClick={add}>
                +
              </button>
              <p style={{ float: "center", color: "red" }} value={emptyPoll}>
                {emptyPoll}
              </p>
            </div>
          </div>
          {/*  */}
          {/* <ControlCurrent yes="currentPolls" /> */}
          <div className="controlCurrent">
            {currentPolls.map((pollname, index) => (
              <div
                style={{
                  padding: "20px",
                  width: "100%",
                  backgroundColor: " #f7f7f7",
                  // borderBottom: "1px solid black",
                  margin: "5px"
                }}
                name={pollname}
                key={index}
              >
                {pollname}
                <button
                  className="addOptions"
                  style={{
                    backgroundColor: "",
                    border: "none"
                  }}
                >
                  +
                </button>
                <button
                  className="deletePoll"
                  onClick={() =>
                    setCurrentPolls(currentPolls.filter(i => i !== pollname))
                  }
                  style={{ float: "right" }}
                >
                  Delete
                </button>
                <div className="options" />
                <div />
              </div>
            ))}
          </div>
          {/*  */}
        </div>
      </div>
      <div className="controlFooter">
        <button>Submit New Poll</button>
      </div>
    </div>
  );
}

export default Controls;

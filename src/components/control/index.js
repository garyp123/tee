import React from "react";
import "./control.css";
import ControlCurrent from "./controlCurrent";

const { useState } = React;

function Controls() {
  const [emptyPoll, setEmptyPoll] = useState("");
  const [newPoll, setNewPoll] = useState("");
  const [currentPolls, setCurrentPolls] = useState([]);
  const [newOption, setNewOption] = useState([]);
  const voteOptions = document.getElementsByClassName("options");
  const [removed, setRemoved] = useState([]);

  console.log(newOption);

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

  const addingOption = i => {
    setNewOption([...newOption, i]);
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
          <ControlCurrent
            setNewOption={setNewOption}
            setRemoved={setRemoved}
            newOption={newOption}
            currentPolls={currentPolls}
            setCurrentPolls={setCurrentPolls}
            addingOption={addingOption}
          />
          {/* <div className="controlCurrent">
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
                  onClick={() => addingOption(index)}
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
                <div className="options" key={index}>
                  00000000 111111111111111     22222222222222
                  {newOption.map((e, i) => {
                    if (e === index) {
                      return (
                        <div key={i} style={{ padding: "2px" }}>
                          <input
                            id={`option${i}`}
                            type="text"
                            style={{ height: "25px" }}
                            onKeyPress={e => console.log(e.target.id)}
                          />
                          <button
                            className="deleteOption"
                            onClick={() => setRemoved(newOption.splice(i, 1))}
                          >
                            -{i}
                          </button>
                        </div>
                      );
                    }
                  })}
                </div>
                <div />
              </div>
            ))}
          </div> */}
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

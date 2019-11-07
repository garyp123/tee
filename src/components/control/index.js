import React from "react";
import "./control.css";
const { useState } = React;
function Controls() {
  const [newPoll, setNewPoll] = useState("");
  const [currentPolls, setCurrentPolls] = useState([]);
  console.log(newPoll, currentPolls);

  const add = () => {
    setCurrentPolls(e => [...e, <div> {newPoll}</div>]);
    setNewPoll("");
  };

  const handleKeypress = event => {
    if (event.key === "Enter") {
      setCurrentPolls(e => [...e, newPoll]);
      setNewPoll("");
    }
  };
  return (
    <div className="controlForm">
      <div className="controlHeader">
        <h4>Control polls here</h4>
      </div>
      <div className="controlBody">
        <div className="controlSide">
          <button>Polls menu</button>
          <button>Suggestion menu</button>
        </div>
        <div className="controlContent">
          <div className="controlAdd">
            <p>Poll:</p>
            <input
              onKeyPress={handleKeypress}
              value={newPoll}
              className="newPoll"
              onChange={e => setNewPoll(e.target.value)}
            />
            <button onClick={add}>+</button>
          </div>
          <div className="controlCurrent">{currentPolls}</div>
        </div>
      </div>
      <div className="controlFooter">
        <button>Submit New Poll</button>
      </div>
    </div>
  );
}

export default Controls;

import React from "react";
const { useState } = React;

function Current() {
  const votes = [1, 3, 4];

  const totalVote = document.getElementsByClassName("votePolls");

  const submit = index => {
    for (let e of totalVote) {
      if (e.checked) console.log(e.value);
    }
  };

  return (
    <div className="tab" style={{ display: "block" }}>
      <h4>Current votes</h4>
      <div className="polls">
        {votes.map((e, i) => {
          return (
            <div className="currentPolls" key={i}>
              <div>
                <p style={{ float: "left", clear: "both" }}>{e}</p>
                <input
                  className="votePolls"
                  name={`option ${i}`}
                  value="first option"
                  type="radio"
                  style={{ float: "left", clear: "both" }}
                  // onChange={e => setTotalVotes([...totalVotes, e.target.value])}
                />
                <input
                  className="votePolls"
                  name={`option ${i}`}
                  value="second option"
                  type="radio"
                  style={{ float: "left", clear: "both" }}
                  // onChange={e => setTotalVotes([...totalVotes, e.target.value])}
                />
                <input
                  className="votePolls"
                  name={`option ${i}`}
                  value="third option"
                  type="radio"
                  style={{ float: "left", clear: "both" }}
                  // onChange={e => setTotalVotes([...totalVotes, e.target.value])}
                />
              </div>
            </div>
          );
        })}
        <button onClick={submit}>Submit votes</button>
      </div>
    </div>
  );
}

export default Current;

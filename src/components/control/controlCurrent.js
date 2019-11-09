import React from "react";
import Controls from "./index";

const { useState } = React;

// function ControlCurrent() {
//   return (
//     <div className="controlCurrent">
//       {currentPolls.map((e, i) => (
//         <div
//           style={{
//             width: "100%",
//             backgroundColor: "lightgrey"
//           }}
//           name={e}
//           key={i}
//         >
//           {e}

//           <button className="deletePoll">-</button>
//           <div className="options" />
//           <div>
//             <button>+</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

const ControlCurrent = props => {
  return (
    <div className="controlCurrent">
      {props.currentPolls.map((pollname, index) => (
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
            onClick={() => props.addingOption(index)}
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
              props.setCurrentPolls(
                props.currentPolls.filter(i => i !== pollname)
              )
            }
            style={{ float: "right" }}
          >
            Delete
          </button>
          <div className="options" key={index}>
            {/* 00000000 111111111111111     22222222222222 */}
            {props.newOption.map((e, i) => {
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
                      onClick={() =>
                        props.setRemoved(props.newOption.splice(i, 1))
                      }
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
    </div>
  );
};

export default ControlCurrent;

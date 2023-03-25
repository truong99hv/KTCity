import React, { useState } from "react";
import "./ToggleStyle.css";

// stateless functional component: component nhưng không sử dựng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }

// statefull functional component: component có  sử dựng state
// function Toggle2() {
//   const [state, setstate] = useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  // 1. enabling state: useState(initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state
  // 4. update state
  //   const array = useState(false);
  //   console.log(array); // [false, function update state]
  //   const arr = [1, 2];
  //   initializ value: boolean(true, false), number(1,2,3,4), string('HVT'), undefined, null,[1,2,3,4], {title: "HVT"}
  const [on, setOn] = useState(false);
  console.log(on);
  //  [title, setTitle]
  // state changes  re-render
  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div
          className={`spinner ${on ? "active" : ""}`}
          onClick={() => {
            setOn(on ? false : true);
          }}
        ></div>
      </div>
      <div className="toggle-control">
        {/* <div
          className="toggle-on"
          onClick={() => {
            setOn(true);
          }}
        >
          On
        </div>
        <div
          className="toggle-off"
          onClick={() => {
            setOn(false);
          }}
        >
          Off
        </div> */}
      </div>
    </div>
  );
}

export default Toggle;

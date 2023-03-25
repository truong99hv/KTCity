import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   Stale state
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };

  const [info, setInfo] = useState({
    firstName: "hoang",
    lastName: "truong",
  });
  useEffect(() => {
    // console.log(`count: ${count}`);
    // setCount(count + 1);
    console.log("from input");
  }, [info.lastName]);
  return (
    <div className="p-5 gap-x-4 flex items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      />
      <span className="text-2xl font-bold mr-2">{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="inline-block p-3 bg-green-400 text-white rounded-lg"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

import React, { useEffect, useState } from "react";

const Timer = () => {
  const [massage, setMessage] = useState("HVT");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(massage);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [massage]);
  return (
    <div>
      <input
        type="text"
        value={massage}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </div>
  );
};

export default Timer;

import react from "react";
import { useEffect, useState } from "react";

export const Timer = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec === 59) {
        setMin(min + 1);
        setSec(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const Restart = () => {
    setSec(0);
    setMin(0);
  };
  const Stop = () => {
    clearInterval(timer);
  };
  return (
    <div>
      <h1>Timer</h1>
      <h3>
        {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
      </h3>
      <button onClick={Restart}>Restart</button>
      <button onClick={Stop}>Stop</button>
    </div>
  );
};

import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervelId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervelId);
    };
  });
  return (
    <div className="mt-9 flex flex-col items-center border justify-center ">
      <h2 className="text-xl font-bold">Digital Clock</h2>
      <div className="">
        <span>{time.getHours().toString().padStart(2, 0)}</span>:
        <span>{time.getMinutes().toString().padStart(2, 0)}</span>:
        <span>{time.getSeconds().toString().padStart(2, 0)}</span>
      </div>
      <div>
        <span>
          {time.toLocaleDateString(undefined, {
            weekday: "long",
            month: "short",
            year: "numeric",
            day: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

export default DigitalClock;

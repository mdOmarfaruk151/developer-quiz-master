import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LightBulbIcon,
  ClockIcon,
  ArrowPathIcon,
  StopIcon,
  EyeIcon,
  PauseCircleIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export const Time = () => {
  //  //! timer start
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const restart = () => {
    setMinutes(0);
    setSeconds(0);
  };
  const stop = () => {
    clearInterval(timer);
  };
  // //! timer end

  return (
    <div>
      <div className="flex">
        {/* //! restart button */}
        <button onClick={restart} className=" w-5 ">
          <ArrowPathIcon className="text-green-800" />
        </button>
        <ChevronLeftIcon className="w-5" />
        <span className="">
          <div className="flex">
            <ClockIcon className="w-5 text-sky-600" />
            <span className="right">
              {/* //! time */}
              {minutes < 10 ? "0" + minutes : minutes}:
              {seconds < 10 ? "0" + seconds : seconds}
            </span>{" "}
          </div>
        </span>
        {/* //! stop button */}
        <ChevronRightIcon className="w-5" />{" "}
        <button onClick={stop} className=" w-5 ">
          <PauseCircleIcon className="text-red-700" />
        </button>
      </div>
    </div>
  );
};

export default Time;

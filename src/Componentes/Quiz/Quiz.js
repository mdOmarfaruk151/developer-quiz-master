import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LightBulbIcon,
  ClockIcon,
  ArrowPathIcon,
  StopIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import "./Quiz.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountDown from "../Timer/Timer";
import { Link } from "react-router-dom";

//! ......
export const Quiz = ({ q, data }) => {
  console.log(q.options);
  const { question, correctAnswer, options } = q;
  const { total } = data;

  // ! react Toast Container

  const notify = () =>
    toast.info(correctAnswer, {
      position: "top-center",
      theme: "colored",
    });

  const isCorrect = () =>
    toast.success("😍 Your Answer is Correct !!", {
      position: "top-center",
      theme: "colored",
    });

  const isWrong = () =>
    toast.error("😭 Your Answer is Wrong 😭", {
      position: "top-center",
      theme: "colored",
    });

  // ! for count

  let Right = [];
  let Wrong = [];
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  const handeleClick = (e) => {
    if (correctAnswer === e.target.innerText) {
      const ret = Right + 1;
      setRight(ret);
      return isCorrect();
    } else {
      Wrong++;
      setWrong(Wrong);
      return isWrong();
    }
  };

  //! body..
  return (
    <div className="questions ">
      <hr />
      <div className="">
        {/* // ! title */}
        <h2>Quiz Mode</h2>
        {/* //! right or wrong count */}
        <h3 className="font-bold ml-5">Right: <span className="text-green-600 font-bold">{right}</span></h3>
        <h3 className="font-bold mb-2 ml-5">Wrong: <span className="text-red-600 font-bold">{wrong}</span></h3>

        {/* //! timer for set */}
        <div className="lifeline-container">
          <div className="flex">
            <ChevronLeftIcon className="w-5" />
            <span className="lifeline">
              <div className="flex">
                <ClockIcon className="w-5 text-sky-600" />
                <span className="right font-bold ml-1">
                  <CountDown seconds={total*60} />
                </span>{" "}
              </div>
            </span>
            <ChevronRightIcon className="w-5" />{" "}
          </div>
          {/* //! eye button for ans */}
          <div className="flex">
            <EyeIcon
              onClick={notify}
              className="w-7 hover:text-green-600 cursor-pointer"
            />{" "}
            <span className="lifeline ml-1"></span>
            <ToastContainer />
          </div>
        </div>
        {/* //! total question */}
        <div>
          <div className="flex">
            <ChevronLeftIcon className="w-5" />
            <span className="left font-bold">
              Total Q.{} {total}
            </span>
            <ChevronRightIcon className="w-5" />{" "}
          </div>
        </div>
        {/* //! questions */}
        <h5 className="font-bold mt-5 border-blue-500">
        {} <span className="text-sky-900 ">{question}</span>
        </h5>
      </div>

      {/* //! Q. Options */}
      <div className="">
        {options &&
          options.map((i) => (
            <p
              className="option "
              onClick={(e) => handeleClick(e)}
              key={i}
              // disabled={'btn'}
            >
              {i}
            </p>
          ))}
      </div>

      {/* //! end button */}
      <div className="button-container ">
        <button>Previous</button>
        <button>Next</button>
        <button>
          <Link to={"../Home"}>Quit</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Quiz;

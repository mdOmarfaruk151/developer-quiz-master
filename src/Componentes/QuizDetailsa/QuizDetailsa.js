import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import ansPic from "../images/My-Answer.png";

 const QuizDetailsa = () => {
  const quizesDetails = useLoaderData();
  const qs = quizesDetails.data.questions;
  const data = quizesDetails.data;
  // console.log(qs)

  return (
    <div>
      
      {/* //! Quiz Page Title */}
      <h1 className="text-center">
        Quiz of <span className="text-sky-700 ">{quizesDetails.data.name}</span>
      </h1>
      <img className="mx-auto w-96 mt-0 mb-0" src={ansPic} alt="" />
      <div className="quizes-section">
        {/* //! single Quiz Cart */}
        {qs.map((q) => (
          <Quiz key={q.id} q={q} data={data}></Quiz>
        ))}
      </div>
      
      <div className="quiz-result-side-bar"></div>
    </div>
  );
};

export default QuizDetailsa;

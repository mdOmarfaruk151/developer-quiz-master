import React from "react";
import { Link } from "react-router-dom";
import error from "../images/Page-not-found.png";

const Error = () => {
  return (
    <div className="mt-10 mb-20 container ">
      <h1
        className="text-center font-bold text-3xl font-sans mb-3 text-rose-600
 "
      >
        Error! 404 Page Not Found !!!
        <Link to={"./home"}>
          <h1 className="text-center font-bold text-2xl font-sans mb-3 text-white hover:text-white-600 btn btn-error hover:btn-success ml-2">
            Go Home
          </h1>
        </Link>
      </h1>

      <img className="mx-auto" src={error} alt="" />
    </div>
  );
};

export default Error;

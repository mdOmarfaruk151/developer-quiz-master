import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "./Topic";

const Topics = () => {
    const dataCarts = useLoaderData();
  const carts = dataCarts.data;
  // console.log(carts);

    
    return (
      <div>
          {/* //! Quiz carts container */}
      <div className=" mt-10 mb-20 ml-10 mr-10 grid grid-cols-4 justify-center">
        {carts?.map((cart) => (
          <Topic key={cart.id} cart={cart}></Topic>
        ))}
      </div>
      </div>
    );
    };

export default Topics;
 
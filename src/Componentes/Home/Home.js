import React from "react";
import { useLoaderData } from "react-router-dom";
import Carts from "../Carts/Carts";

import Slider from "../Slider/Slider";

const Home = () => {
  const dataCarts = useLoaderData();
  const carts = dataCarts.data;
  console.log(carts);

  return (
    <div>
      <header>
        <Slider></Slider>
      </header>
      <div className=" mt-10 mb-20 ml-10 mr-10 grid grid-cols-4 justify-center">
        {carts.map((cart) => (
          <Carts key={cart.id} cart={cart}></Carts>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const Carts = ({ cart }) => {
  console.log(cart);
  const { id, name, logo, total } = cart;
  return (
    <div>
      <div className="card card-compact w-60 bg-sky-50 shadow-2xl">
        <figure>
          <img className="bg-sky-700" src={logo} alt="" />
        </figure>
        <div className="card-body font-bold">
          <h2 className="card-title font-bold text-sky-700">{name}</h2>
          <p className="">Total Question : {total}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Start Practice</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;

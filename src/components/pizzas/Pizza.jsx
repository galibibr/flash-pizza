import React from "react";
import { MdAdd } from "react-icons/md";

const Pizza = ({ pizza }) => {
  return (
    <div className="pizza">
      <div className="img-box">
        <img src={pizza.img} alt="pizza" />
      </div>
      <div className="box-right">
        <div className="right-boxTop">
          <p>{pizza.name}</p>
          <p>{pizza.info}</p>
        </div>
        <div className="right-boxBottom">
          <p className="price">{pizza.price}</p>
          <button className="btn-addToCard">
            <MdAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;

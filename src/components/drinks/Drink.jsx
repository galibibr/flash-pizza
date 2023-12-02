import React from 'react'
import { MdAdd } from "react-icons/md";

const Drink = ({drink}) => {
  return (
    <div className="drink">
      <div className="img-box">
        <img src={drink.img} alt="drink" />
      </div>
      <div className="box-right">
        <div className="right-boxTop">
          <p>{drink.name}</p>
        </div>
        <div className="right-boxBottom">
          <p className="price">{drink.price}</p>
          <button className="btn-addToCard">
            <MdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drink
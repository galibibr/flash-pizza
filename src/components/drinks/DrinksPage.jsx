import React from "react";
import Drink from "./Drink";
import d2 from "../../assets/drinks/02.png";
import d1 from "../../assets/drinks/01.png";

const DrinksPage = () => {
  const drinks = [
    {
      img: d1,
      name: "Pepsi",
      price: "от 120 руб",
    },
    {
      img: d2,
      name: "Coca-cola",
      price: "от 80 руб",
    },
    {
      img: d1,
      name: "Pepsi",
      price: "от 120 руб",
    },
    {
      img: d2,
      name: "Coca-cola",
      price: "от 90 руб",
    },
  ];
  return (
    <section className="box-drinks">
      <div className="box-p">
        <p className="p-drink">Напитки</p>
      </div>
      <div className="list-drinks">
        {drinks.map((item) => {
          return <Drink drink={item} />;
        })}
      </div>
    </section>
  );
};

export default DrinksPage;

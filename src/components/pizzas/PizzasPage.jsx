import React from "react";
import Pizza from "./Pizza";
import p1 from '../../assets/pizzas/01.png'
import p2 from '../../assets/pizzas/02.png'

const PizzasPage = () => {
  const pizzas = [
    {
      img: p1,
      name: "4 сыра",
      info: "Томатный соус, моцарелла, горгонзола, крем, пармезан.",
      price: "800 руб",
    },
    {
      img: p2,
      name: "Брекфест",
      info: "Сливки, моцарелла, помидор, бекон, охотничьи, куриное.",
      price: "700 руб",
    },
    {
      img: p1,
      name: "Гавайская",
      info: "Томатный соус, моцарелла, прошутто котто, ананас.",
      price: "780 руб",
    },
    {
      img: p2,
      name: "Вегетарианская",
      info: "Томатный соус, помидор, грибы, перец болгарский.",
      price: "620 руб",
    },

  ];
  return (
    <section className="box-pizzas">
      <div className="box-p">
        <p className="p-pizza">Пиццы</p>
      </div>
      <div className="list-pizzas">
        {pizzas.map((item) => {
          return <Pizza pizza={item} />;
        })}
      </div>
    </section>
  );
};

export default PizzasPage;

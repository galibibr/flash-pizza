import React from "react";

const Delivery = () => {
  return (
   <section className="delivery">

    <div className="box-delivery">
      <div className="info-delivery">
        <p>Условия доставки</p>
        <p>
          Зеленая зона до 350 грн - 40 грн. <br />
          Зеленая зона от 350 грн - бесплатно.
        </p>
        <p>
          Оранжевая зона до 500 грн - 70 грн. <br />
          Оранжевая зона от 500 грн - бесплатно. <br />
          Предварительный заказ за 2-3 часа. <br />
          Время доставки: от 30 минут *. <br />* Срок выполнения заказа зависит
          от расстояния и очереди заказов.
        </p>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4462.880252923188!2d61.3063435221845!3d55.19361076322529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c593d3082a08ff%3A0xc53e0efc29b542ec!2sFlash%20Pizza!5e0!3m2!1sru!2sru!4v1701538248080!5m2!1sru!2sru"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
   </section>
  );
};

export default Delivery;

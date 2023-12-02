import "./styles/styles.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import baner1 from "./assets/baner1.png";
import baner2 from "./assets/baner2.jpg";
import PizzasPage from "./components/pizzas/PizzasPage";
import DrinksPage from "./components/drinks/DrinksPage";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* baner */}
        <div>
          <Swiper
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
              <img src={baner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={baner1} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Pizzas */}
        <PizzasPage />
        {/* Drinks */}
        <DrinksPage />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;

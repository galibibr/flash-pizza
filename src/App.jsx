import "./styles/styles.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import baner1 from "./assets/baner1.png";
import baner2 from "./assets/baner2.jpg";

function App() {
  return (
    <>
      <Navbar />
      <article>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <img src={baner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={baner2} alt="" />
          </SwiperSlide>
        </Swiper>
      </article>
      {/* <Footer /> */}
    </>
  );
}

export default App;

import React from "react";
import { MdAccessTime } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import visa from "../assets/visa.png";
import master from "../assets/master.png";

const Footer = () => {
  return (
    <footer>
      <div className="box-footer">
        <div className="time">
          <div className="icon">
            <div>
              <MdAccessTime />
            </div>
          </div>
          <div>
            <p>Время работы</p>
            <p>
              Ежедневно <br /> с 12.00 до 21.00
            </p>
          </div>
        </div>
        <div className="phone">
          <div className="icon">
            <div>
              <BiPhoneCall />
            </div>
          </div>
          <div>
            <p>Контакты</p>
            <a href="#">+38 (0ХХ) ХХХ ХХ ХХ</a> <br />
            <a href="#">flashpizza@gmail.com</a>
          </div>
        </div>

        <div className="mmm">
          <div>
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
          <div>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="cards">
          <a href="#" className="visa">
            <img src={visa} alt="" />
          </a>
          <a href="#" className="master">
            <img src={master} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

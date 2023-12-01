import React, { useRef, useState } from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { BsBasket2 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  const windowOnclick = useRef();
  const theModal = (event) => {
    if (modal && event.terger !== windowOnclick.current) {
      setModal(false);
    }
  };

  return (
    <nav className={`${modal ? "shadow-nav" : null}`}>
      {/* Mobile */}
      <div className="nav-mobile">
        {modal ? (
          <a href="#" className="a-phone">
            +38 (066) XXX XX XX
          </a>
        ) : (
          <a href="#" className="a-logo">
            <img src={logo} className="logo" alt="Logo Flash Pizza" />
          </a>
        )}

        <div className="box-menuAndBasket">
          <button
            onClick={handleModal}
            className={`${modal ? "btn-menu-open" : "btn-menu-close"}`}>
            {modal ? (
              <IoClose className="close-icon" />
            ) : (
              <IoMenu className="menu-icon" />
            )}
          </button>

          <button className="btn-basket">
            <BsBasket2 className="basket-icon" />
          </button>
        </div>
      </div>
      {/* modal */}
      {modal ? (
        <div className="modal" ref={windowOnclick} onClick={theModal}>
          <ul>
            <li>
              <a href="#">Пиццы</a>
            </li>
            <li>
              <a href="#">Условия доставки</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
          </ul>

          <div className="footer-modal">
            <div className="left">
              <p>Время работы</p>
              <p>
                Ежедневно <br /> c 12.00 до 21.00
              </p>
            </div>
            <div className="right">
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      ) : null}

      {/* Desktop */}
      <div className="_nav-desktop">
        <a href="#" className="_a-logo">
          <img src={logo} className="_logo" alt="Logo Flash Pizza" />
        </a>
        <ul>
          <li>
            <a href="#">Пиццы</a>
          </li>
          <li>
            <a href="#">Доставка</a>
          </li>
          <li>
            <a href="#">+38 (066) XXX XX XX</a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <BsBasket2 className="basket-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

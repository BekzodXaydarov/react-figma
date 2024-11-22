import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Button from "../Button/Button";

export interface NavbarI {}

const Navbar: React.FC<NavbarI> = () => {
  const [active, setActive] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const hanldeBars = () => {
    setActive(!active);
  };
  useEffect(() => {
    if(scrollY == 0){
      setScroll(true)
    }
  }, [scrollY,scroll]);
  
  return (
    <nav className={`container-padding ${scroll ? "scroll-nav" : ""}`}>
      <img src="/images/logo.png" alt="logo" />
      <ul className={`${active ? "active-nav" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Destinations</a>
        </li>
        <li>
          <a href="#">Tours</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
      </ul>
      <div className={`nav-btns ${active ? "active-nav" : ""}`}>
        <Button text="Sign In" className="nav-btn1" />
        <Button text="SingUp" />
      </div>
      <div
        className={`bars  ${active ? "active-bars" : ""}`}
        onClick={hanldeBars}
      >
        <div className="bars-line"></div>
        <div className="bars-line"></div>
        <div className="bars-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;

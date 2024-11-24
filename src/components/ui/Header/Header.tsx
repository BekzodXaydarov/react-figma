import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-scroll";

export interface NavbarI {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Navbar: React.FC<NavbarI> = ({ active, setActive }) => {
  const hanldeBars = () => {
    setActive(!active);
  };

  return (
    <header>
      <nav className={`container-padding`}>
        <h1 className="logo">Listee Travel</h1>
        <ul className={`${active ? "active-nav" : ""}`}>
          <li>
            <Link
              to="home"
              onClick={hanldeBars}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <Link
              to="destinations"
              onClick={hanldeBars}
              smooth={true}
              offset={0}
              duration={500}
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              to="tours"
              onClick={hanldeBars}
              smooth={true}
              offset={0}
              duration={500}
            >
              Tours
            </Link>
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
    </header>
  );
};

export default Navbar;

import React from "react";
import "../Navbar/Navbar.scss";
import logo from "../../images/logo.png";
// import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { getStarted } = props;

  const handleToHome = () => {};
  return (
    <nav className="navbar container-fluid">
      <div onClick={handleToHome} className="nav-logo offset-lg-1">
        <img src={logo} alt="" />
      </div>
      <div>
        <input type="checkbox" name="" id="menu-check" className="menu-check" />
        <label htmlFor="menu-check" className="hamberger">
          {/* <HiMenuAlt1 className="hamberger-icon"></HiMenuAlt1> */}
          <i className="fas fa-bars"></i>
        </label>
      </div>
      <ul className={`${getStarted} === ${false} ? getStartedWith : ''`}>
        <Link to="/result">
          <li>
            <a href="#results">Results</a>
          </li>
        </Link>
        {/* {quizPage === true ? (
          <li className="user-name">
            <a href="#get started" disabled={user_name} className="user-name">
              {user_name}
            </a>
          </li>
        ) : (
          <li>
            <a
              href="#get started"
              onClick={() => alert("Please Choose Options And Start.")}
            >
              Get Started<FcNext></FcNext>
            </a>
          </li>
        )} */}
      </ul>
    </nav>
  );
};

export default Navbar;

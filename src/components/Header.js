import Logo from "../../Images/Landing/Logo.jpg";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo}></img>
      </div>
      <div className="nav-items-container">
        <ul className="nav-items-list">
          <li className="nav-item">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <button
            className="nav-item-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

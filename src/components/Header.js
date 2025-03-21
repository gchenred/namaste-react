import Logo from "../../Images/Landing/Logo.png";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus(true);
  return (
    <div className="flex h-32 bg-red-300 shadow-md rounded-lg justify-between items-center">
      <div className="w-44 h-auto flex m-4 items-center justify-center">
        <img className="h-24 w-24" src={Logo}></img>
        <p className="text-xl font-bold">Namaste Kitchen</p>
      </div>
      <div className="m-4">
        <ul className="flex p-4">
          <li className="m-2 p-2 text-lg">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="m-2 p-2 text-lg hover:font-medium">
            <Link className="nav-item-link" to="/">
              Home
            </Link>
          </li>
          <li className="m-2 p-2 text-lg hover:font-medium">
            <Link className="nav-item-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="m-2 p-2 text-lg hover:font-medium">
            <Link className="nav-item-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="m-2 p-2 text-lg hover:font-medium">
            <Link className="nav-item-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="m-2 p-2 text-lg hover:font-medium">
            <Link className="nav-item-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <button
            className=" m-2 text-lg h-12 hover:font-medium border-0 rounded-lg px-6 bg-red-200"
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

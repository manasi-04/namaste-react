import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="flex items-center justify-between m-4">
      <div className="w-24">
        <img src={LOGO_URL} className="logo" alt="app-logo" />
      </div>
      <div>
        <ul className="flex gap-2 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li className="font-semibold">{loggedInUser}</li>
          {/* <button
            className="p-2 bg-gray-200 border border-solid border-black"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../SignOut";

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link to={"/"}>Landing</Link>
      </li>
      <li>
        <Link to={"/user"}>Account</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <SignOut />
      </li>
    </ul>
  </div>
);

export default Navbar;

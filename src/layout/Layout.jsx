import React from "react";
import { Link } from "react-router-dom";
import "./Layout.scss";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/about-us"}>ABOUT US</Link>
          </li>
          <li>
            <Link to={"/option"}>OPTION 3</Link>
          </li>
        </ul>
        <button className="login">
          <Link to={"/login"}>LOGIN</Link>
        </button>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;

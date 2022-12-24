import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Router from "../router/router";
import "./Layout.scss";

const Layout = ({ children }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return (
    <div className="layout">
      <header>
        <ul>
          <li>
            <Link to={Router.HOME}>HOME</Link>
          </li>
          <li>
            <Link to={Router.ABOUT}>ABOUT US</Link>
          </li>
          <li>
            <Link to={Router.ABOUT}>OPTION 3</Link>
          </li>
        </ul>
        {!isLogged ? (
          <div className="login-div">
            <Link to={Router.LOGIN}>
              <button>LOGIN</button>
            </Link>
          </div>
        ) : (
          <div className="account-icon">{/* <img src="" alt="" /> */}</div>
        )}
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;

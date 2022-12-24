import React from "react";
import { Link } from "react-router-dom";
import Router from "../router/router";
import "./Layout.scss";

const Layout = ({ children, isLogged }) => {
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
          <div>Icon</div>
        )}
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;

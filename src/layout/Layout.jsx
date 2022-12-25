import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Router from "../router/router";
import "./Layout.scss";
import { MdNotifications } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
const Layout = ({ children }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const type = useSelector((state) => state.auth.type);

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { title: "asd" },
    { title: "hii man how are you?" },
  ]);
  // console.log(type);
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
        <div className="account">
          {isLogged && type === "1" && (
            <>
              <div className="account-add">
                <Link to={Router.ADD}>
                  <BiAddToQueue />
                </Link>
              </div>
              <div
                className="account-notifications"
                onClick={() => setNotificationsOpen((prev) => !prev)}
              >
                <MdNotifications />
              </div>
              {notificationsOpen && (
                <ul className="account-messages">
                  {messages.map((item, id) => {
                    return <li key={id}>{item.title}</li>;
                  })}
                </ul>
              )}
            </>
          )}
          {!isLogged ? (
            <div className="login-div">
              <Link to={Router.LOGIN}>
                <button>LOGIN</button>
              </Link>
            </div>
          ) : (
            <div className="account-icon">{/* <img src="" alt="" /> */}</div>
          )}
        </div>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;

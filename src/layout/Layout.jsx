import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Router from "../router/router";
import "./Layout.scss";
import { MdNotifications } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import Chat from "../components/chat/Chat";
import { getReports } from "../api";
const Layout = ({ children }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const type = useSelector((state) => state.auth.type);

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { title: "asd" },
    { title: "hii man how are you?" },
  ]);

  const organizatorId = localStorage.getItem("userId");
  console.log(Number(organizatorId));

  useEffect(() => {
    async function getData() {
      try {
        const data = await getReports(Number(organizatorId));
        console.log(data);
        setMessages(data.data);
      } catch (error) {}
    }
    getData();
  }, []);
  // console.log(type);
  const navigate = useNavigate();
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
            <Link to={Router.HOME}>CONTACT</Link>
          </li>
        </ul>
        <div className="account">
          {isLogged && type === "2" && (
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
                <span>{localStorage.getItem("notifications")}</span>
              </div>
              {notificationsOpen && (
                <ul className="account-messages">
                  {messages.map((item, id) => {
                    return (
                      <li key={id}>
                        <b>{item.email}</b>
                        <span>{item.message}</span>
                      </li>
                    );
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
            <>
              <Link to={Router.ACCOUNT}>
                <div className="account-icon">
                  <div className="account-icon-img">
                    <RiAccountCircleFill />
                  </div>
                </div>
              </Link>
              <div
                className="account-logout"
                onClick={() => {
                  localStorage.removeItem("token");
                  console.log(window.location.pathname);
                  window.location.reload();
                  navigate("/");
                }}
              >
                <FiLogOut />
              </div>
            </>
          )}
        </div>
      </header>
      <main>
        <Chat />
        {children}
      </main>
      <footer>
        <h3>All rights reserved ®</h3>
      </footer>
    </div>
  );
};

export default Layout;

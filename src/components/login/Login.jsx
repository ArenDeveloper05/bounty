import "./Login.scss";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Router from "../../router/router";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../../api";
import {
  changeType,
  email,
  login,
  notification,
} from "../../store/slices/authSlice";

//Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const notifyFields = () =>
    toast.error("All fields are required", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyError = () =>
    toast.error("Something went wrong", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  const submitForm = async (e) => {
    e.preventDefault();

    console.log(!loginData.email);
    console.log(!loginData.password);

    if (!loginData.email.trim() || !loginData.password.trim()) notifyFields();
    if (!loginData.email.trim()) {
      emailRef.current.style.border = "1px solid red";
    } else {
      emailRef.current.style.border = "1px solid white";
    }

    if (!loginData.password.trim()) {
      passwordRef.current.style.border = "1px solid red";
    } else {
      passwordRef.current.style.border = "1px solid white";
    }
    try {
      if (loginData.email.trim() && loginData.password.trim()) {
        const data = await logIn(loginData);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("type", data.data.user.type);
        localStorage.setItem("userId", data.data.user.id);
        localStorage.setItem(
          "notifications",
          data.data.user.notifications_count
        );
        localStorage.setItem("email", data.data.user.email);

        console.log(data.data.user.type);
        dispatch(login());
        dispatch(changeType(data.data.user.type));
        dispatch(notification(data.data.user.notifications_count));
        dispatch(email(data.data.user.email));
        navigate(Router.HOME);
      }
    } catch (error) {
      notifyError();
      console.log(error);
    }
    console.log("submit form");
  };

  return (
    <section className="login">
      <form className="login-form" onSubmit={submitForm}>
        <h1>Login</h1>
        <div className="login-form-fields">
          <input
            onChange={(e) =>
              setLoginData((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
            value={loginData.email}
            type="text"
            placeholder="Email"
            ref={emailRef}
          />
          <input
            onChange={(e) =>
              setLoginData((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
            value={loginData.password}
            type="password"
            placeholder="Passsword"
            ref={passwordRef}
          />
        </div>
        <button>LOGIN</button>
        <p>
          Dont have an account? <Link to={Router.SIGNUP}>Sign Up</Link>
        </p>
      </form>
      <div className="bg-filter"></div>
      <ToastContainer />
    </section>
  );
};

export default Login;

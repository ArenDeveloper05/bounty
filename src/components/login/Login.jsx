import "./Login.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "../../router/router";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logIn } from "../../api";
import { changeType, login } from "../../store/slices/authSlice";

//Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);

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

  // const dispatch = useDispatch();
  // const { isLoged } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   const logout = async () => {
  //     try {
  //       const { data } = await $api.get("/logout");
  //       console.log(data, "data");
  //     } catch (err) {
  //       throw new Error(err.message);
  //     }
  //   };
  //   logout();
  // }, []);

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  // const submitForm = useCallback(
  //   async (e) => {
  //     e.preventDefault();
  //     try {
  //       const { data } = await Login({
  //         email,
  //         password,
  //       });
  //       dispatch(login());
  //       localStorage.setItem("token", data.token);
  //     } catch (err) {
  //       throw new Error(err.message);
  //     }
  //   },
  //   [email, password, dispatch]
  // );

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
        console.log(data.data.user.type);
        dispatch(login());
        dispatch(changeType(data.data.user.type));
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

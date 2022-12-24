import "./SignUpUser.scss";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../api";

//Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Router from "../../../router/router";

const SignUpUser = () => {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    type: 1,
    email: "",
    password: "",
  });
  const [repeatPassword, setRepeatPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);

  const notifyPasswords = () =>
    toast.error("Passwords are not the same", {
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

  useEffect(() => {
    console.log(signUpData.password);
    console.log(repeatPassword, "repeat");
  }, [signUpData, repeatPassword]);

  const submitForm = async (e) => {
    e.preventDefault();

    if (!signUpData.email.trim()) {
      emailRef.current.style.border = "1px solid red";
    } else {
      emailRef.current.style.border = "1px solid white";
    }

    if (!signUpData.password.trim()) {
      passwordRef.current.style.border = "1px solid red";
    } else {
      passwordRef.current.style.border = "1px solid white";
    }

    if (!repeatPassword.trim()) {
      repeatPasswordRef.current.style.border = "1px solid red";
    } else {
      repeatPasswordRef.current.style.border = "1px solid white";
    }

    if (
      !signUpData.email.trim() ||
      !signUpData.password.trim() ||
      !repeatPassword.trim()
    ) {
      notifyFields();
    } else {
      try {
        if (signUpData.password !== repeatPassword) {
          console.log("nuyny chen");
          notifyPasswords();
        } else {
          if (
            signUpData.email.trim() &&
            signUpData.password.trim() &&
            repeatPassword.trim()
          ) {
            const data = await signUp(signUpData);
            if (data.status === 200) {
              navigate(Router.LOGIN);
            }
          }
          // console.log(data);
          console.log("nuynn en ");
        }
      } catch (error) {
        console.log(error);
        notifyError();
      }
    }

    // console.log("submit form");
  };

  return (
    <section className="sign-up">
      <form className="sign-up-form" onSubmit={submitForm}>
        <h1>User</h1>
        <div className="sign-up-form-fields">
          <input
            onChange={(e) =>
              setSignUpData((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
            value={signUpData.email}
            type="text"
            placeholder="Email"
            ref={emailRef}
          />
          <input
            onChange={(e) =>
              setSignUpData((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
            value={signUpData.password}
            type="password"
            placeholder="Passsword"
            ref={passwordRef}
          />
          <input
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeatPassword}
            type="password"
            placeholder="Repeat password"
            ref={repeatPasswordRef}
          />
        </div>
        <button>SIGN UP</button>
        <p>
          Already have account? <Link to={Router.LOGIN}>Login</Link>
        </p>
      </form>
      <div className="bg-filter"></div>
      <ToastContainer />
    </section>
  );
};

export default SignUpUser;

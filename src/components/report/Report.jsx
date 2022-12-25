import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getSingleProject, postReport } from "../../api";
import Layout from "../../layout/Layout";
import Loader from "../loader/Loader";
import "./Report.scss";

const Report = () => {
  const { id } = useParams();
  let [searchParams] = useSearchParams();
  const projectId = searchParams.get("project");

  //
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [singleProject, setSingleProject] = useState({});
  const hunterId = useSelector((state) => state.auth.userId);

  const notifySuccess = () =>
    toast.success("Done", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  console.log(id);

  useEffect(() => {
    console.log(message);
  }, [message]);

  const handleMessageChange = (event) => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const sendMessage = async () => {
    try {
      const data = await postReport(
        {
          message,
          email: localStorage.getItem("email")
            ? localStorage.getItem("email")
            : "",
        },
        id,
        projectId,
        hunterId
      );
      console.log(data);
      console.log("gna", {
        message: message,
        email: localStorage.getItem("email"),
      });
      notifySuccess();
      console.log("gna");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    async function getData() {
      setLoading(true);
      try {
        const data = await getSingleProject(id, projectId);
        console.log(data);
        setSingleProject(data.data);
      } catch (error) {}
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <Layout>
      <div className="report home">
        {loading ? (
          <Loader />
        ) : (
          <>
            <ToastContainer />
            <div className="report-home-main home-list">
              <h1>{singleProject ? singleProject.organization : ""}</h1>
              <div className="report-home-main-image">
                <img src="../../assets/images/footer.jpg" alt="" />
              </div>
              <p className="report-home-main-desc">
                {singleProject ? singleProject.description : ""}
              </p>
              <h2>Write your message to this organization</h2>
              <textarea
                name=""
                id=""
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              <button
                className="button"
                onClick={() => {
                  sendMessage();
                }}
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Report;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProject } from "../../api";
import Layout from "../../layout/Layout";
import "./Report.scss";

const Report = () => {
  const { id } = useParams();
  console.log(id);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [singleProject, setSingleProject] = useState({});

  // const sendMessage = () => {
  //   try {
  //     const data =
  //   } catch (error) {

  //   }
  // };
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   async function getData() {
  //     setLoading(true);
  //     try {
  //       const data = await getSingleProject(id);
  //       console.log(data);
  //       // setSingleProject(data.data);
  //     } catch (error) {}
  //     setLoading(false);
  //   }
  //   getData();
  // }, []);
  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await axios.get(
          "https://4947-212-34-250-11.eu.ngrok.io/api/projects"
        );
        console.log(data, "data");
      } catch (err) {
        throw new Error(err.message);
      }
    };
    get();
  }, []);
  return (
    <Layout>
      <div className="report home">
        <div className="report-home-main home-list">
          <h1>{singleProject.organization}</h1>
          <div className="report-home-main-image">
            <img src="../../assets/images/footer.jpg" alt="" />
          </div>
          <p className="report-home-main-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iure
            omnis illo nostrum reiciendis incidunt distinctio tempore, neque
            consequatur dolore necessitatibus ex, vel quasi veritatis sit,
            repellendus veniam vitae totam!Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ullam iure omnis illo nostrum
            reiciendis incidunt distinctio tempore, neque consequatur dolore
            necessitatibus ex, vel quasi veritatis sit, repellendus veniam vitae
            totam!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ullam iure omnis illo nostrum reiciendis incidunt distinctio
            tempore, neque consequatur dolore necessitatibus ex, vel quasi
            veritatis sit, repellendus veniam vitae totam!
            {singleProject.description}
          </p>
          <h2>Write your message to this organization</h2>
          <textarea name="" id=""></textarea>
          <button
            className="button"
            onClick={() => {
              // sendMessage();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Report;

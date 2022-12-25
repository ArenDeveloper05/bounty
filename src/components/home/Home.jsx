import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "../../api";
import Layout from "../../layout/Layout";
import Router from "../../router/router";
import { login } from "../../store/slices/authSlice";
import Loader from "../loader/Loader";
import "./Home.scss";

const Home = () => {
  // const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [loading, setLoading] = useState(false);

  const [list, setList] = useState([
    {
      id: 0,
      organization: "Innova it school",
      title: "Organization Title",
      description:
        "Organization Title  www.aperik.com im kayqna mteq bag qteq axper te qtneq es poxy dzez",
      reward: { from: 0, to: 1000 },
      image: "url",
      created_at: "timestamp",
    },
    {
      id: 1,
      organization: "Organization Name",
      title: "Organization Title",
      description: "Organization Title",
      reward: { from: 0, to: 1000 },
      image: "url",
      created_at: "timestamp",
    },
    {
      id: 2,
      organization: "Organization Name",
      title: "Organization Title",
      description: "Organization Title",
      reward: { from: 0, to: 1000 },
      image: "url",
      created_at: "timestamp",
    },
  ]);

  // useEffect(() => {
  //   console.log(isLogged);
  //   if (token !== null && token !== undefined) {
  //     !isLogged && dispatch(login());
  //   }
  // }, []);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const { data } = await getAllProjects();
        setList(data);
        console.log(data);
      } catch (error) {}
      setLoading(false);
    }
    getData();
  }, []);

  const submitReport = (id) => {
    if (isLogged) {
      console.log("qci uje ynde");
      navigate(`report/${id}`);
    } else {
      navigate(Router.LOGIN);
    }
  };

  return (
    <Layout>
      <div className="home">
        {loading ? (
          <Loader />
        ) : (
          <div className="home-list">
            <div className="home-list-search">
              <input type="text" />
              <button className="button">Search...</button>
            </div>
            {list.map(
              ({
                id,
                organization,
                image,
                reward_from,
                reward_to,
                description,
              }) => {
                console.log(id);
                return (
                  <div className="home-list-item" key={id}>
                    <div className="home-list-item-image">
                      <img src={image} alt={organization} />
                    </div>
                    <div className="home-list-item-desc">
                      <div className="home-list-item-desc-title">
                        <h1>{organization}</h1>
                      </div>
                      <div className="home-list-item-desc-info">
                        <p>{description}</p>
                      </div>
                    </div>
                    <div className="home-list-item-reward">
                      <div className="home-list-item-reward-box">
                        <h5>BOUNTY RANGE</h5>
                        <p>
                          <span>{reward_from}</span>
                          <span> - </span>
                          <span>{reward_to}</span>
                        </p>
                      </div>
                      <div className="home-list-item-reward-submit">
                        <div
                          className="nice-button"
                          onClick={() => {
                            submitReport(id);
                          }}
                        >
                          SUBMIT REPORT
                        </div>
                      </div>
                    </div>
                    {/* {organization} */}
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;

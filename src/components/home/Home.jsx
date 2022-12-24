import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import Router from "../../router/router";
import "./Home.scss";

const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const submitReport = () => {
    if (token !== null && token !== undefined) {
      console.log("qci uje ynde");
      navigate(Router.REPORT);
    } else {
      navigate(Router.LOGIN);
    }
  };
  const [list, setList] = useState([
    {
      id: 0,
      organization: "Organization Name",
      title: "Organization Title",
      description: "Organization Title",
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
    {
      id: 3,
      organization: "Organization Name",
      title: "Organization Title",
      description: "Organization Title",
      reward: { from: 0, to: 1000 },
      image: "url",
      created_at: "timestamp",
    },
    {
      id: 4,
      organization: "Organization Name",
      title: "Organization Title",
      description: "Organization Title",
      reward: { from: 0, to: 1000 },
      image: "url",
      created_at: "timestamp",
    },
    {
      id: 5,
      organization: "Organization Name",
      title: "Organization Title",
      description: "Organization Title",
      reward: { from: 0, to: 1000 },
      image: "url",
      created_at: "timestamp",
    },
  ]);
  return (
    <Layout isLogged={token !== null && token !== undefined ? true : false}>
      <div className="home">
        <div className="home-list">
          <div className="home-list-search">
            <input type="text" />
            <button className="button">Search...</button>
          </div>
          {list.map(({ id, organization, image, reward, description }) => {
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
                  <div className="home-list-item-desc-title"></div>
                </div>
                <div className="home-list-item-reward">
                  <div className="home-list-item-reward-box">
                    <h5>BOUNTY RANGE</h5>
                    <p>
                      <span>{reward.from}</span>
                      <span> - </span>
                      <span>{reward.to}</span>
                    </p>
                  </div>
                  <div className="home-list-item-reward-submit">
                    <button onClick={submitReport}>SUBMIT REPORT</button>
                  </div>
                </div>
                {/* {organization} */}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

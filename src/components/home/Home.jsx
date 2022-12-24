import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "../../api";
import Layout from "../../layout/Layout";
import Router from "../../router/router";
import { login } from "../../store/slices/authSlice";
import "./Home.scss";

const Home = () => {
  // const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);

  // useEffect(() => {
  //   console.log(isLogged);
  //   if (token !== null && token !== undefined) {
  //     !isLogged && dispatch(login());
  //   }
  // }, []);
  useEffect(() => {
    async function getData() {
      // setLoading(true);
      try {
        const data = await getAllProjects();
        console.log(data);
      } catch (error) {}
      // setLoading(false);
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
    <Layout>
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
                    <button
                      onClick={() => {
                        submitReport(id);
                      }}
                    >
                      SUBMIT REPORT
                    </button>
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

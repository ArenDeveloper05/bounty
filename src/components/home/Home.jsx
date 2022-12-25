import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APIUrl, getAllProjects } from "../../api";
import Layout from "../../layout/Layout";
import Router from "../../router/router";
import { addProjects } from "../../store/slices/projectsSlice";
import Loader from "../loader/Loader";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [loading, setLoading] = useState(false);
  const type = useSelector((state) => state.auth.type);
  const projects = useSelector((state) => state.projects.projects);
  const [search, setSearch] = useState("");

  const [list, setList] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const { data } = await getAllProjects();
        setList(data);
        dispatch(addProjects(data));
        console.log(data);
      } catch (error) {}
      setLoading(false);
    }
    getData();
  }, []);

  const submitReport = (organizatorId, id) => {
    if (isLogged) {
      console.log("qci uje ynde");
      navigate(`report/${organizatorId}?project=${id}`);
    } else {
      navigate(Router.LOGIN);
    }
  };

  const searchData = () => {
    if (search.trim()) {
      searchRef.current.style.border = "none";
      const filteredData = projects.filter((item) =>
        item.title.includes(search)
      );
      setList(filteredData);
    } else {
      searchRef.current.style.border = "2px solid red";
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
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                ref={searchRef}
              />
              <button className="button" onClick={searchData}>
                Search...
              </button>
            </div>
            {list &&
              list.map(
                ({
                  id,
                  organization,
                  image_url,
                  reward_from,
                  reward_to,
                  description,
                  organizator_id,
                }) => {
                  console.log(id);
                  return (
                    <div className="home-list-item" key={id}>
                      <div className="home-list-item-image">
                        <img
                          src={`${APIUrl}/projects/${image_url}`}
                          alt={organization}
                        />
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
                        {type !== "2" && (
                          <div className="home-list-item-reward-submit">
                            <div
                              className="nice-button"
                              onClick={() => {
                                submitReport(organizator_id, id);
                              }}
                            >
                              SUBMIT REPORT
                            </div>
                          </div>
                        )}
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

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addProject, uploadProjectImage } from "../../api";
import Layout from "../../layout/Layout";
import "./Add.scss";

const Add = () => {
  const id = useSelector((state) => state.auth.userId);
  const [file, setFile] = useState(null);
  console.log(id);

  const [projectData, setProjectData] = useState({
    organization: "",
    title: "",
    description: "",
    reward_from: 0,
    reward_to: 0,
  });
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

  const handleChange = (event, isNumber) => {
    let value = event.target.value;
    if (isNumber) {
      value = Number(value);
    }
    setProjectData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    try {
      console.groupEnd();
      const formData = new FormData();
      formData.append("image", file);
      const { data } = await uploadProjectImage(id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const uploadFile = (e) => {
    setFile(e.target.files[0]);
  };

  const postProject = async () => {
    try {
      const { data } = await addProject(
        {
          organization: projectData.organization,
          title: projectData.title,
          description: projectData.description,
          reward: {
            from: projectData.reward_from,
            to: projectData.reward_to,
          },
        },
        id
      );
      // console.log(data.id);
      const formData = new FormData();
      formData.append("image", file);
      const res = await uploadProjectImage(id, data.id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
      notifySuccess();
    } catch (error) {}
  };

  useEffect(() => {
    console.log(projectData);
  }, [projectData]);

  return (
    <Layout>
      <div className="add-project home">
        <div className="add-project-list home-list">
          <section className="add-project-list-edit">
            <div className="add-project-list-edit-row">
              <label htmlFor="picture">Image</label>
              <input type="file" id="picture" onChange={uploadFile} />
            </div>
            <div className="add-project-list-edit-row">
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={projectData.organization}
                // style={
                //   !fieldsValidation.organizationField
                //     ? { border: "1px solid red" }
                //     : {}
                // }
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="add-project-list-edit-row">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={projectData.title}
                // style={
                //   !fieldsValidation.titleField
                //     ? { border: "1px solid red" }
                //     : {}
                // }
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="add-project-list-edit-row">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={projectData.description}
                // style={
                //   !fieldsValidation.descriptionField
                //     ? { border: "1px solid red" }
                //     : {}
                // }
                onChange={(e) => handleChange(e)}
              />
            </div>
            <h1>Reward</h1>
            <div className="add-project-list-edit-row">
              <label htmlFor="reward_from">From</label>
              <input
                type="number"
                id="reward_from"
                name="reward_from"
                value={projectData.reward_from}
                onChange={(e) => handleChange(e, true)}
              />
            </div>
            <div className="add-project-list-edit-row">
              <label htmlFor="reward_to">To</label>
              <input
                type="number"
                id="reward_to"
                name="reward_to"
                value={projectData.reward_to}
                onChange={(e) => handleChange(e, true)}
              />
            </div>
            <div
              className="add-project-list-edit-row"
              style={{ marginTop: "2rem" }}
            >
              <button
                type="button"
                className="ml-auto button"
                onClick={postProject}
              >
                Add project
              </button>
            </div>
          </section>
          <ToastContainer />
        </div>
      </div>
    </Layout>
  );
};

export default Add;

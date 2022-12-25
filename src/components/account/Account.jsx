import React from "react";
import Layout from "../../layout/Layout";
import "./Account.scss";

const Account = () => {
  return (
    <Layout>
      <div className="account home">
        <div className="account-list home-list">
          <h1>My account</h1>
          <section className="account-list-edit">
            {/* <div className="account-list-edit-row">
          <label htmlFor="picture">Նկար</label>
          <div
            type="file"
            id="picture"
            name="picture"
            value={doctorPicture}
            onChange={(e) => setDoctorPicture}
          />
        </div> */}

            <div className="account-list-edit-row">
              <label htmlFor="email">Email</label>
              <div id="email">asdsad@mail.ru</div>
            </div>
            <div className="account-list-edit-row">
              <label htmlFor="points">Points</label>
              <div id="points">10</div>
            </div>
            <div className="account-list-edit-row">
              <label htmlFor="reports">Reports</label>
              <div id="reports">2</div>
            </div>
            {/* //// */}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Account;

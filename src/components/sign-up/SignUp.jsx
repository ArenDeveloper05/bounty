import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CONFIG } from "../../config";
import "./SignUp.scss";

const SignUp = () => {
  const [selectedPanel, setSelectedPanel] = useState(0);
  return (
    <div className="sign-up-container">
      <aside className="sign-up-container-header">
        <div className="sign-up-container-header-box">
          {CONFIG.signUpConfig.map(({ name }, id) => {
            return (
              <div
                className="sign-up-container-header-box-item"
                style={selectedPanel === id ? { color: "red" } : {}}
                key={id}
              >
                <p onClick={() => setSelectedPanel(id)}>{name}</p>
              </div>
            );
          })}
        </div>
      </aside>
      <div className="sign-up-container-main">
        {CONFIG.signUpConfig[selectedPanel].component}
      </div>
    </div>
  );
};

export default SignUp;

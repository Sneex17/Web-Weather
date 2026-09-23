import React from "react";
import "../styles/Sibar.css";
import Logo from "../assets/LogoApp.png"

function Sibar() {
  return (
    <div className="container">
      <div className="info">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="text">
          <h2 className="name-app">Weather<span>App</span></h2>
          <span className="mensaje">El tiempo, siempre contigo</span>
        </div>
      </div>
    </div>
  );
}

export default Sibar;

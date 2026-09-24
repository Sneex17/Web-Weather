import React from "react";
import "../styles/Sidebar.css";
import Logo from "../assets/LogoApp.png"

function Sibar() {
  return (
    <div className="container-bar">
      <div className="info">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="text">
          <h2 className="name-app">Weather<span>App</span></h2>
          <span className="mensaje">El tiempo, siempre contigo</span>
        </div>
      </div>

      <div className="navbar">
        <ul className="nav">
          <li className="item-nav">Inicio</li>
          <li className="item-nav">Mapa</li>
          <li className="item-nav">Reportes</li>
        </ul>

      </div>
    </div>
  );
}

export default Sibar;

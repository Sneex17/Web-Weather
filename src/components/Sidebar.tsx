import React from "react";
import "../styles/Sidebar.css";
import Logo from "../assets/LogoApp.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMap, faFile } from "@fortawesome/free-solid-svg-icons";

function Sibar() {
  return (
    <div className="container-bar">
      <div className="info">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="text">
          <h2 className="name-app">
            Weather<span>App</span>
          </h2>
          <span className="mensaje">El tiempo, siempre contigo</span>
        </div>
      </div>

      <div className="navbar">
        <ul className="nav">
          <li className="item-nav">
            <FontAwesomeIcon icon={faHouse} className="icon-nav"/>
            <h4>Inicio</h4>
          </li>
          <li className="item-nav">
            <FontAwesomeIcon icon={faMap} className="icon-nav" />
            <h4>Mapa</h4>
          </li>
          <li className="item-nav">
            <FontAwesomeIcon icon={faFile} className="icon-nav"/>
            <h4>Reportes</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sibar;

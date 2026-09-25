import React, { useState } from "react";
import "../styles/ContainerApp.css";
import "../styles/Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function ContainerApp() {
  const [ciudad, setCiudad] = useState("");

  return (
    <div className="container">
      <div className="sub-container">
        <div className="container-buscar">
          <form action="">
            <input
              type="text"
              placeholder="Buscar Ciudad"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              className="input-cities"
            />
            <button className="btn-buscar">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-btn"/>
            </button>
          </form>
        </div>
        <div className="container-location">
          <FontAwesomeIcon icon={faLocationDot} className="icon-location"/>
          <select name="paises" id="pais" className="select-pais">
            <option value="" disabled selected>
              Selecciones un pais
            </option>
            <option>A</option>
            <option>A</option>
            <option>A</option>
          </select>
        </div>
        <div className="container-time">
          <h3>Fecha</h3>
        </div>
      </div>
      <div className="sub-container">
        <div className="resumen-weather card-radio"></div>
        <div className="map-weather card-radio"></div>
      </div>
      <div className="sub-container">
        <div className="temperatura card-radio"></div>
        <div className="temperatura-detalles"></div>
      </div>

      <div className="sub-container">
        <div className="resumen-day card-radio"></div>
      </div>
    </div>
  );
}

export default ContainerApp;

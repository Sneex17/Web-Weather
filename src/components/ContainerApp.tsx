import React, { useState } from "react";
import "../styles/ContainerApp.css";
function ContainerApp() {
const [ciudad, setCiudad] = useState('')


  return (
    <div className="container">
      <div className="sub-container">
        <div className="container-buscar">
          <form action="">
            <input 
            type="text"
            placeholder="Buscar Ciudad" 
            value={ciudad}
            onChange={(e)=> setCiudad(e.target.value)}/>
            <button>Buscar</button>
          </form>
        </div>
        <div className="container-location">
          <select name="paises" id="pais">
            
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
        <div className="temperatura-detalles">

        </div>
      </div>

      <div className="sub-container">
        <div className="resumen-day card-radio"></div>
      </div>
    </div>
  );
}

export default ContainerApp;

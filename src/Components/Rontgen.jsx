import React from "react";
import "./TahlilSonuc.css";
import tahlil1 from "./LabSonuc/tahlil1.png";

function Rontgen() {
  return (
    <div>
      <div className="tahlil-content">
        <img style={{height:"400px"}} src={tahlil1} alt="tahlil1" id="tahlil1" />
      </div>
    </div>
  );
}

export default Rontgen;

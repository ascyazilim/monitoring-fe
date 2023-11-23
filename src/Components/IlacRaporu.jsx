import React from "react";
import "./IlacRaporu.css";

const IlacRaporu = ({ onClose }) => {

  return (
    <div className="main-ilac-raporu">
      <div className="baslik">İlaç Raporu</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="form-ilac-raporu">
        
      </div>
    </div>
  );
};

export default IlacRaporu;

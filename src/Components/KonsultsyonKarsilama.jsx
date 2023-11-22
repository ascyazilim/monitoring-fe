import React from "react";

function KonsultsyonKarsilama({onClose}) {
  return (
    <div className="konsultasyon-karsilama-main">
      <div className="baslik">Konsültasyon</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="konsultasyon-sol-menu">
      </div>
      <div className="konsultasyon-sag-menu"></div>
    </div>
  );
}

export default KonsultsyonKarsilama;

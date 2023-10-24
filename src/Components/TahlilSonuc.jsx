import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TahlilSonuc.css";
import MRSonuc from "./MRSonuc";
import KanSonuc from "./KanSonuc";
import IdrarSonuc from "./IdrarSonuc";
import TomografiSonuc from "./TomografiSonuc";

function TahlilSonuc() {
  const navigate = useNavigate();
  const [showMrSonuc, setShowMrSonuc] = useState(false);
  const [showKanSonuc, setShowKanSonuc] = useState(false);
  const [showIdrarSonuc, setShowIdrarSonuc] = useState(false);
  const [showTomografiSonuc, setShowTomografiSonuc] = useState(false);


  const handleMrClick = () => {
    setShowMrSonuc(true);
    setShowKanSonuc(false);
    setShowIdrarSonuc(false);
    setShowTomografiSonuc(false);
  };

  const handleKanClick = () => {
    setShowKanSonuc(true);
    setShowMrSonuc(false);
    setShowIdrarSonuc(false);
    setShowTomografiSonuc(false);
  };

  const handleIdrarClick = () => {
    setShowIdrarSonuc(true);
    setShowMrSonuc(false);
    setShowKanSonuc(false);
    setShowTomografiSonuc(false);
  }

  const handleTomografiClick = () => {
    setShowTomografiSonuc(true);
    setShowMrSonuc(false);
    setShowKanSonuc(false);
    setShowIdrarSonuc(false);
  }

  return (
    <div className="main-tahlil">
      <div className="baslik">Tahlil Sonuçları</div>
      <div className="tahlil-menu">
        <button className={showMrSonuc ? "active": ""} onClick={handleMrClick}>MR Sonuçları</button>
        <button className={showKanSonuc ? "active": ""}  onClick={handleKanClick}>Kan Sonuçları</button>
        <button className={showIdrarSonuc ? "active": ""} onClick={handleIdrarClick}>İdrar & Gaita Sonuçları</button>
        <button className={showTomografiSonuc ? "active": ""} onClick={handleTomografiClick}>Tomografi Sonuçları</button>
      </div>
      <div>
        {showMrSonuc ? <MRSonuc /> : null}
        {showKanSonuc ? <KanSonuc /> : null}
        {showIdrarSonuc ? <IdrarSonuc /> : null}
        {showTomografiSonuc ? <TomografiSonuc /> : null}
      </div>
    </div>
  );
}

export default TahlilSonuc;

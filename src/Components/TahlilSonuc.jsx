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
      <div className="tahlil-menu">
        <button onClick={handleMrClick}>MR Sonuçları</button>
        <button onClick={handleKanClick}>Kan Sonuçları</button>
        <button onClick={handleIdrarClick}>İdrar & Gaita Sonuçları</button>
        <button onClick={handleTomografiClick}>Tomografi Sonuçları</button>
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TahlilSonuc.css";
import Rontgen from "./Rontgen";
import KanSonuc from "./KanSonuc";
import IdrarSonuc from "./IdrarSonuc";
import TomografiSonuc from "./TomografiSonuc";

function TahlilSonuc({onClose}) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("MR");

  const tabs = [
    { name: "MR", title: "Röntgen Sonuçları", content: <Rontgen /> },
    { name: "Kan", title: "Kan Sonuçları", content: <KanSonuc /> },
    {
      name: "Idrar",
      title: "İdrar & Gaita Sonuçları",
      content: <IdrarSonuc />,
    },
    {
      name: "Tomografi",
      title: "Tomografi Sonuçları",
      content: <TomografiSonuc />,
    },
  ];

  return (
    <div className="main-tahlil">
      <div className="baslik">Tahlil Sonuçları</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="tahlil-menu">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={activeTab === tab.name ? "active" : ""}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name} className="tab-tahlil-content">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TahlilSonuc;

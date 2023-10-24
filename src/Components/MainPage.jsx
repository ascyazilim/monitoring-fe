import React from 'react';
import "./MainPage.css";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Anamnez from "./Anamnez";
import AmeliyatGiris from "./AmeliyatGiris";
import TahlilSonuc from './TahlilSonuc';
import KlinikSeyir from './KlinikSeyir';

const MainPage = () => {

    const navigate = useNavigate();
    const [showAnamnez, setShowAnamnez] = useState(false);
    const [showAmeliyat, setShowAmeliyat] = useState(false);
    const [showTahlil, setShowTahlil] = useState(false);
    const [showKlinikSeyir, setShowKlinikSeyir] = useState(false);

    const handleAnamnezClick = () => {
        setShowAnamnez(true);
        setShowAmeliyat(false);
        setShowTahlil(false);
        setShowKlinikSeyir(false);
    };

    const handleAmeliyatClick = () => {
        setShowAmeliyat(true);
        setShowAnamnez(false);
        setShowTahlil(false);
        setShowKlinikSeyir(false);
    }

    const handleTahlilClick = () => {
        setShowTahlil(true);
        setShowAnamnez(false);
        setShowAmeliyat(false);
        setShowKlinikSeyir(false);
    }

    const handleKlinikSeyirClick = () => {
        setShowKlinikSeyir(true);
        setShowAnamnez(false);
        setShowAmeliyat(false);
        setShowTahlil(false);
    }
  return (
    <div className='main-mainpage'>
        <div className="mainpage-menu">
            <button className={showAnamnez ? "active": ""} onClick={handleAnamnezClick}>Anamnez</button>
            <button className={showAmeliyat ? "active": ""} onClick={handleAmeliyatClick}>Ameliyat Giriş</button>
            <button className={showTahlil ? "active": ""} onClick={handleTahlilClick}>Tahlil Sonuçları</button>
            <button className={showKlinikSeyir ? "active": ""} onClick={handleKlinikSeyirClick}>Klinik Seyir</button>
        </div>
        <div>
            {showAnamnez ? <Anamnez /> : null}
            {showAmeliyat ? <AmeliyatGiris /> : null}
            {showTahlil ? <TahlilSonuc /> : null}
            {showKlinikSeyir ? <KlinikSeyir /> : null}
        </div>
    </div>
  )
}

export default MainPage
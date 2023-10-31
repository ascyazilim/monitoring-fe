import React from "react";
import "./TaburcuIstek.css";

const TaburcuIstek = ({ onClose }) => {
  return (
    <div className="main-taburcu">
      <div className="baslik">Hasta Taburcu İstek İşlemleri</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="taburcu-content">
        <div className="yatis-bilgileri">
          <label htmlFor="yatis-bilgileri">Yatış Bilgileri:</label>
          <input type="text" />
        </div>
        <div className="taburcu-tarihi">
          <label htmlFor="taburcu-tarihi">Taburcu Tarihi: </label>
          <input type="date" name="tarih" id="tarih" />
          <input type="time" name="zaman" id="zaman" />
          <label htmlFor="taburcu-tipi">Taburcu Tipi:</label>
          <select name="taburcu-tipi" id="taburcu-tipi"></select>
        </div>
        <div className="taburcu-doktor">
          <label htmlFor="taburcu-doktor">Taburcu Eden Dr.</label>
          <select name="taburcu-doktor" id="taburcu-doktor"></select>
          <label htmlFor="taburcu-ekip">Tab. Eden Ekip</label>
          <select name="taburcu-ekip" id="taburcu-ekip"></select>
        </div>
        <div className="aciklama">
          <label htmlFor="aciklama">Açıklama:</label>
          <textarea name="aciklama" id="aciklama" cols="84" rows="7"></textarea>
        </div>
      </div>
      <div className="window-button">
        <button style={{marginTop:"15px"}}>Kaydet</button>
      </div>
    </div>
  );
};

export default TaburcuIstek;

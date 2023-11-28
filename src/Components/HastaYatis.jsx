import React from "react";
import "./HastaYatis.css";

const HastaYatis = ({ onClose }) => {
  return (
    <div className="hasta-yatis-main">
      <div className="baslik">Hasta Yatış İstek</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="hasta-yatis-hasta-bilgileri">
        <h3>Ali Cebecioğlu</h3>
        <div className="yatan-hasta-bilgileri">
          <p>Yaş: 22/05/1989 - 34 yıl</p>
          <p>Dosya No: 123456789</p>
          <p>Tc Kimlik No: 12345678911</p>
        </div>
      </div>
      <div className="hasta-yatis-form">
        <div className="hasta-yatis-form-sol">
          <div className="hasta-yatis-bolum">
            <label htmlFor="bolum">Bölüm: </label>
            <select name="bolum" id="bolum">
              <option value="beyin-sinir">Beyin ve Sinir Cerrahisi</option>
              <option value="genel">Genel Cerrahi</option>
            </select>
          </div>
          <div className="hasta-yatis-birim">
            <label htmlFor="birim">Birim: </label>
            <select name="birim" id="birim">
              <option value="beyin-klinik">
                Beyin ve Sinir Cerrahisi Klinik- Hastane
              </option>
            </select>
          </div>
          <div className="hasta-yatis-istek-doktor">
            <label htmlFor="istek-doktor">İstek Doktor: </label>
            <select name="istek-doktor" id="istek-doktor">
              <option value="doktor1">Prof.Dr.Ahmet DEMİRCAN</option>
              <option value="doktor2">Prof.Dr. Ali Cebecioğlu</option>
              <option value="doktor3">Dr. Betül Öztürk</option>
              <option value="doktor4">Dr. Erman Kavlu</option>
              <option value="doktor5">Uzm.Dr. Hacı Nadir Yalçın</option>
              <option value="doktor6">Doç.Dr. Hakan Demirel</option>
            </select>
          </div>
        </div>
        <div className="hasta-yatis-form-sag">
          <div className="yatak-grubu">
            <label htmlFor="yatak-gurubu">Yatak Grubu: </label>
            <select name="yatak-grubu" id="yatak-grubu"></select>
          </div>
          <div className="yatak-turu">
            <label htmlFor="yatak-turu">Yatak Türü: </label>
            <select name="yatak-turu" id="yatak-turu"></select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HastaYatis;

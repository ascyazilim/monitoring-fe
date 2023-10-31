import React from "react";
import "./KlinikSeyir.css";

function KlinikSeyir({ onClose }) {
  return (
    <div className="main-klinik">
      <div className="baslik">Hasta Klinik Seyir Giriş</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="klinik-content">
        {/* <div className="hasta-bilgileri">
          <label for="hasta-bilgileri">Hasta Bilgileri:</label>
          <input type="text" />
        </div> */}
        <div className="tarih-saat">
          <label for="tarih">Tarih:</label>
          <input type="datetime-local" />
        </div>

        <div className="doktor">
          <label for="doktor">Doktor:</label>
          <select name="klinik-doktor" id="klinik doktor">
            <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
            <option value="doktor2">Dr. Betül Öztürk</option>
            <option value="doktor3">Dr. Erman Kavlu</option>
            <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
            <option value="doktor5">Doç.Dr. Hakan Demirel</option>
          </select>
          <span className="konsultan" for="konsultan">
            Konsültan:
          </span>
          <select name="konsultan" id="konsultan">
            <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
            <option value="doktor2">Dr. Betül Öztürk</option>
            <option value="doktor3">Dr. Erman Kavlu</option>
            <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
            <option value="doktor5">Doç.Dr. Hakan Demirel</option>
          </select>
          <span className="asistan" for="asistan">
            Asistan:
          </span>
          <select name="asistan" id="asistan">
            <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
            <option value="doktor2">Dr. Betül Öztürk</option>
            <option value="doktor3">Dr. Erman Kavlu</option>
            <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
            <option value="doktor5">Doç.Dr. Hakan Demirel</option>
          </select>
        </div>
        <div className="bulgular">
          <div>Yaşamsal Bulgular</div>
          <textarea cols="118" rows="5"></textarea>
        </div>
        <div className="tetkik">
          <div>Tetkik ve İşlemler</div>
          <textarea cols="118" rows="5"></textarea>
        </div>
        <div className="tedavi">
          <div>Tedavi Süreci</div>
          <textarea cols="118" rows="5"></textarea>
        </div>

        <div className="window-button ">
          <button>Kaydet</button>
        </div>
      </div>
    </div>
  );
}

export default KlinikSeyir;

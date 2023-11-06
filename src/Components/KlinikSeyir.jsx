import React from "react";
import "./KlinikSeyir.css";
import { useState } from "react";
import axios from "axios";

function KlinikSeyir({ onClose }) {
  const [tarih, setTarih] = useState("");
  const [doktor, setDoktor] = useState("");
  const [konsultasyon, setKonsultasyon] = useState("");
  const [asistan, setAsistan] = useState("");
  const [bulgular, setBulgular] = useState("");
  const [tetkik, setTetkik] = useState("");
  const [tedavi, setTedavi] = useState("");

  const handleSave = async () => {
    const data = {
      tarih,
      doktor,
      konsultasyon,
      asistan,
      bulgular,
      tetkik,
      tedavi,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/klinik-seyir/create", data
      );
      console.log("Veri başarıyla kaydedildi", response.data);
    }catch (error) {
      console.error("Veri kaydedilirken bir hata oluştu", error)
    }
  };
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
          <input
            type="datetime-local"
            value={tarih}
            onChange={(e) => setTarih(e.target.value)}
          />
        </div>

        <div className="doktor">
          <label for="doktor">Doktor:</label>
          <select
            name="klinik-doktor"
            id="klinik doktor"
            value={doktor}
            onChange={(e) => setDoktor(e.target.value)}
          >
            <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
            <option value="doktor2">Dr. Betül Öztürk</option>
            <option value="doktor3">Dr. Erman Kavlu</option>
            <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
            <option value="doktor5">Doç.Dr. Hakan Demirel</option>
          </select>
          <span className="konsultan" for="konsultan">
            Konsültan:
          </span>
          <select
            name="konsultan"
            id="konsultan"
            value={konsultasyon}
            onChange={(e) => setKonsultasyon(e.target.value)}
          >
            <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
            <option value="doktor2">Dr. Betül Öztürk</option>
            <option value="doktor3">Dr. Erman Kavlu</option>
            <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
            <option value="doktor5">Doç.Dr. Hakan Demirel</option>
          </select>
          <span className="asistan" for="asistan">
            Asistan:
          </span>
          <select
            name="asistan"
            id="asistan"
            value={asistan}
            onChange={(e) => setAsistan(e.target.value)}
          >
            <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
            <option value="doktor2">Dr. Betül Öztürk</option>
            <option value="doktor3">Dr. Erman Kavlu</option>
            <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
            <option value="doktor5">Doç.Dr. Hakan Demirel</option>
          </select>
        </div>
        <div className="bulgular">
          <div>Yaşamsal Bulgular</div>
          <textarea
            cols="118"
            rows="5"
            value={bulgular}
            onChange={(e) => setBulgular(e.target.value)}
          ></textarea>
        </div>
        <div className="tetkik">
          <div>Tetkik ve İşlemler</div>
          <textarea
            cols="118"
            rows="5"
            value={tetkik}
            onChange={(e) => setTetkik(e.target.value)}
          ></textarea>
        </div>
        <div className="tedavi">
          <div>Tedavi Süreci</div>
          <textarea
            cols="118"
            rows="5"
            value={tedavi}
            onChange={(e) => setTedavi(e.target.value)}
          ></textarea>
        </div>

        <div className="window-button ">
          <button onClick={handleSave}>Kaydet</button>
        </div>
      </div>
    </div>
  );
}

export default KlinikSeyir;

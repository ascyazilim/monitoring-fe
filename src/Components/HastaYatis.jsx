import React, { useEffect, useState } from "react";
import "./HastaYatis.css";
import axios from "axios";

const HastaYatis = ({ onClose }) => {
  const [hastaBilgileri, setHastaBilgileri] = useState("");
  const [bolum, setBolum] = useState("");
  const [birim, setBirim] = useState("");
  const [istekDoktor, setIstekDoktor] = useState("");
  const [istekAsistan, setIstekAsistan] = useState("");
  const [yatisTip, setYatisTip] = useState("");
  const [yatakGrubu, setYatakGrubu] = useState("");
  const [yatakTuru, setYatakTuru] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [yatisTarihi, setYatisTarihi] = useState("");
  const [yatisSure, setYatisSure] = useState("");
  const [yatisSureTur, setYatisSureTur] = useState("");
  const [taburcuTarihi, setTaburcuTarihi] = useState("");

  const handleSave = async () => {
    const data = {
      hastaBilgileri,
      bolum,
      birim,
      istekDoktor,
      istekAsistan,
      yatisTip,
      yatakGrubu,
      yatakTuru,
      aciklama,
      yatisTarihi,
      yatisSure,
      yatisSureTur,
      taburcuTarihi,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/hasta-yatis/create",
        data
      );
      console.log("Veri başarıyla kaydedildi", response.data);
    } catch (error) {
      console.error("Veri kaydedilirken bir hata oluştu", error);
    }
  };

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
            <select
              name="bolum"
              id="bolum"
              value={bolum}
              onChange={(e) => setBolum(e.target.value)}
            >
              <option value="beyin-sinir">Beyin ve Sinir Cerrahisi</option>
              <option value="genel">Genel Cerrahi</option>
            </select>
          </div>
          <div className="hasta-yatis-birim">
            <label htmlFor="birim">Birim: </label>
            <select
              name="birim"
              id="birim"
              value={birim}
              onChange={(e) => setBirim(e.target.value)}
            >
              <option value="beyin-klinik">
                Beyin ve Sinir Cerrahisi Klinik- Hastane
              </option>
            </select>
          </div>
          <div className="hasta-yatis-istek-doktor">
            <label htmlFor="istek-doktor">İstek Doktor: </label>
            <select
              name="istek-doktor"
              id="istek-doktor"
              value={istekDoktor}
              onChange={(e) => setIstekDoktor(e.target.value)}
            >
              <option value="doktor1">Prof.Dr.Ahmet DEMİRCAN</option>
              <option value="doktor2">Prof.Dr. Ali Cebecioğlu</option>
              <option value="doktor3">Dr. Betül Öztürk</option>
              <option value="doktor4">Dr. Erman Kavlu</option>
              <option value="doktor5">Uzm.Dr. Hacı Nadir Yalçın</option>
              <option value="doktor6">Doç.Dr. Hakan Demirel</option>
            </select>
          </div>
          <div className="hasta-yatis-istek-asistan">
            <label htmlFor="istek-asistan">İstek Asistan: </label>
            <select
              name="istek-asistan"
              id="istek-asistan"
              value={istekAsistan}
              onChange={(e) => setIstekAsistan(e.target.value)}
            >
              <option value="asistan1">Asistan 1</option>
              <option value="asistan2">Asistan 2</option>
              <option value="asistan3">Asistan 3</option>
              
            </select>
          </div>
          <div className="hasta-yatis-tip">
            <label htmlFor="yatis-tip">Yatış Tip: </label>
            <select
              name="yatis-tip"
              id="yatis-tip"
              value={yatisTip}
              onChange={(e) => setYatisTip(e.target.value)}
            >
              <option value="istek">İstek</option>
              <option value="diger">Diğer</option>
            </select>
          </div>
        </div>
        <div className="hasta-yatis-form-sag">
          <div className="yatak-grubu">
            <label htmlFor="yatak-gurubu">Yatak Grubu: </label>
            <select
              name="yatak-grubu"
              id="yatak-grubu"
              value={yatakGrubu}
              onChange={(e) => setYatakGrubu(e.target.value)}
            ></select>
          </div>
          <div className="yatak-turu">
            <label htmlFor="yatak-turu">Yatak Türü: </label>
            <select
              name="yatak-turu"
              id="yatak-turu"
              value={yatakTuru}
              onChange={(e) => setYatakTuru(e.target.value)}
            ></select>
          </div>
          <div className="hasta-yatis-aciklama">
            <label htmlFor="yatis-aciklama">Açıklama:</label>
            <textarea
              value={aciklama}
              onChange={(e) => setAciklama(e.target.value)}
              name="yatis-aciklama"
              id="yatis-aciklama"
              cols="25"
              rows="2"
            ></textarea>
          </div>
          <div className="hasta-yatis-tarihi">
            <label htmlFor="yatis-tarihi">Yatış Tarihi: </label>
            <input
              type="datetime-local"
              value={yatisTarihi}
              onChange={(e) => setYatisTarihi(e.target.value)}
            />
          </div>
          <div className="hasta-yatis-sure">
            <label htmlFor="yatis-sure">Yatış Süre: </label>
            <input
              type="text"
              id="yatis-sure-input"
              value={yatisSure}
              onChange={(e) => setYatisSure(e.target.value)}
            />
            <select
              name="yatis-sure"
              id="yatis-sure"
              value={yatisSureTur}
              onChange={(e) => setYatisSureTur(e.target.value)}
            >
              <option value="gun">Gün</option>
              <option value="ay">Ay</option>
            </select>
          </div>
          <div className="hasta-yatis-taburcu-tarihi">
            <label htmlFor="hasta-yatis-taburcu-tarihi">Taburcu Tarihi: </label>
            <input
              type="date"
              id="hasta-yatis-taburcu-tarihi-input"
              value={taburcuTarihi}
              onChange={(e) => setTaburcuTarihi(e.target.value)}
            />
            <p className="beklenen">(beklenen)</p>
          </div>
        </div>
      </div>
      <div
        className="window-button"
        style={{
          position: "fixed",
          left: "50%",
          bottom: "0",
          marginBottom: "5px",
        }}
      >
        <button onClick={handleSave}>Kaydet</button>
      </div>
    </div>
  );
};

export default HastaYatis;

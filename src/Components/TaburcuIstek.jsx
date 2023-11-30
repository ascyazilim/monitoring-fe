import React, { useEffect, useState } from "react";
import "./TaburcuIstek.css";
import axios from "axios";

const TaburcuIstek = ({selectedHasta, onClose }) => {
  const [yatisBilgileri, setYatisBilgileri] = useState("");
  const [taburcuTarihi, setTaburcuTarihi] = useState("");
  const [taburcuTipi, setTaburcuTipi] = useState("");
  const [doktor, setDoktor] = useState("");
  const [ekip, setEkip] = useState("");
  const [aciklama, setAciklama] = useState("");

  useEffect(() => {
    console.log("Selected Hasta: ",selectedHasta);
    if(selectedHasta){
      setYatisBilgileri(`${selectedHasta.ad} ${selectedHasta.soyad}, TC: ${selectedHasta.tcKimNo}`)
    }
  }, [selectedHasta]);


  const handleSave = async () => {
    const data = {
      yatisBilgileri,
      taburcuTarihi,
      taburcuTipi,
      doktor,
      ekip,
      aciklama,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/taburcu-istek/create",
        data
      );
      console.log("Veri başarıyla kaydedildi", response.data);
    } catch (error) {
      console.error("Veri kaydedilirken bir hata oluştu", error);
    }
  };
  
  return (
    <div className="main-taburcu">
      <div className="baslik">Hasta Taburcu İstek İşlemleri</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="taburcu-content">
        <div className="yatis-bilgileri">
          <label htmlFor="yatis-bilgileri">Yatış Bilgileri:</label>
          {selectedHasta && (
            <h3>{selectedHasta.ad} {selectedHasta.soyad}</h3>
          )}
            
          {/* <input
            type="text"
            value={yatisBilgileri}
            onChange={(e) => setYatisBilgileri(e.target.value)}
          /> */}
        </div>
        <div className="taburcu-tarihi">
          <label htmlFor="taburcu-tarihi">Taburcu Tarihi: </label>
          <input
            type="datetime-local"
            name="tarih"
            id="tarih"
            value={taburcuTarihi}
            onChange={(e) => setTaburcuTarihi(e.target.value)}
          />

          <label htmlFor="taburcu-tipi">Taburcu Tipi:</label>
          <select
            name="taburcu-tipi"
            id="taburcu-tipi"
            value={taburcuTipi}
            onChange={(e) => setTaburcuTipi(e.target.value)}
          >
            <option value="">Seçiniz</option>
            <option value="1">Normal Taburcu</option>
            <option value="2">Erken Taburcu</option>
            <option value="3">İstek Üzere Taburcu</option>
          </select>
        </div>
        <div className="taburcu-doktor">
          <label htmlFor="taburcu-doktor">Taburcu Eden Dr.</label>
          <select
            name="taburcu-doktor"
            id="taburcu-doktor"
            value={doktor}
            onChange={(e) => setDoktor(e.target.value)}
          >
            <option value="">Seçiniz</option>
            <option value="1">Dr. Ahmet Yılmaz</option>
            <option value="2">Dr. Mehmet Öz</option>
            <option value="3">Dr. Ayşe Öztürk</option>
          </select>
          <label htmlFor="taburcu-ekip">Tab. Eden Ekip</label>
          <select
            name="taburcu-ekip"
            id="taburcu-ekip"
            value={ekip}
            onChange={(e) => setEkip(e.target.value)}
          >
            <option value="">Seçiniz</option>
            <option value="1">Hemşire Ekibi</option>
            <option value="2">Fizyoterapi Ekibi</option>
            <option value="3">Diyet Ekibi</option>
          </select>
        </div>
        <div className="aciklama">
          <label htmlFor="aciklama">Açıklama:</label>
          <textarea
            name="aciklama"
            id="aciklama"
            cols="84"
            rows="10"
            value={aciklama}
            onChange={(e) => setAciklama(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="window-button">
        {/* <button onClick={handleSave} style={{ marginTop: "15px" }}>Kaydet</button> */}
        <button className="save-button" onClick={handleSave}>Kaydet</button>
      </div>
    </div>
  );
};

export default TaburcuIstek;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AmeliyatGiris.css";

function AmeliyatGiris({ onClose }) {
  const [ameliyatGiris, setAmeliyatGiris] = useState([]);
  const [baslangicTarihi, setBaslangicTarihi] = useState("");
  const [bitisTarihi, setBitisTarihi] = useState("");
  const [ameliyathane, setAmeliyathane] = useState("ameliyathane1");
  const [anestezi, setAnestezi] = useState("genel");
  const [ameliyatTipi, setAmeliyatTipi] = useState("ayaktan");
  const [norolojik, setNorolojik] = useState("");
  const [abdomen, setAbdomen] = useState("");
  const [preopTani, setPreopTani] = useState("");
  const [postopTani, setPostopTani] = useState("");
  const [sonuc, setSonuc] = useState("");
  const [risk, setRisk] = useState("");
  const [kalp, setKalp] = useState("");
  const [gogus, setGogus] = useState("");
  const [checkboxSelection, setCheckboxSelection] = useState("");

  const [cerrahiEkip, setCerrahiEkip] = useState("");
  const [cerrahiPersonel, setCerrahiPersonel] = useState("");

  const [anesteziEkibi, setAnesteziEkibi] = useState("");
  const [anesteziPersonel, setAnesteziPersonel] = useState("");

  const handleSave = async () => {
    const data = {
      baslangicTarihi,
      bitisTarihi,
      ameliyathane,
      anestezi,
      ameliyatTipi,
      norolojik,
      abdomen,
      preopTani,
      postopTani,
      sonuc,
      risk,
      kalp,
      gogus,
      checkboxSelection,
      cerrahiEkip,
      cerrahiPersonel,
      anesteziEkibi,
      anesteziPersonel,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/ameliyat-giris/create",
        data
      );
      console.log("Veri başarıyla kaydedildi", response.data);
    } catch (error) {
      console.error("veri kaydedilirken bir hata oluştu", error);
    }
  };

  // useEffect(() => {
  //   const fetchAmeliyatGiris = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/ameliyat-giris/${id}"
  //       );
  //       setAmeliyatGiris(response.data);
  //     } catch (error) {
  //       console.error("Veri alınamadı:", error);
  //     }
  //   };
  //   fetchAmeliyatGiris();
  // }, []);
  return (
    <div className="main-ameliyat">
      <div className="baslik">Ameliyat Giriş</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="section">
        <div className="form">
          <form className="main-form">
            <div className="baslangic">
              <label for="baslangicTarihi">Başlangıç Tarihi:</label>
              <input
                type="datetime-local"
                id="baslangicTarihi"
                name="baslangicTarihi"
                value={baslangicTarihi}
                onChange={(e) => setBaslangicTarihi(e.target.value)}
              />
            </div>

            <div className="bitis">
              <label for="bitisTarihi">Bitiş Tarihi:</label>
              <input
                type="datetime-local"
                id="bitisTarihi"
                name="bitisTarihi"
                value={bitisTarihi}
                onChange={(e) => setBitisTarihi(e.target.value)}
              />
            </div>
            <div className="ameliyathane">
              <label for="ameliyathane">Ameliyathane:</label>
              <select
                name="ameliyathane"
                id="ameliyathane"
                value={ameliyathane}
                onChange={(e) => setAmeliyathane(e.target.value)}
              >
                <option value="ameliyathane1">Ameliyathane 1</option>
                <option value="ameliyathane2">Ameliyathane 2</option>
                <option value="ameliyathane3">Ameliyathane 3</option>
                <option value="ameliyathane4">Ameliyathane 4</option>
              </select>
            </div>
            <div className="anestezi">
              <label for="anestezi">Anestezi:</label>
              <select
                name="anestezi"
                id="anestezi"
                value={anestezi}
                onChange={(e) => setAnestezi(e.target.value)}
              >
                <option value="genel">Genel</option>
                <option value="bolgesel">Bölgesel</option>
                <option value="lokal">Lokal</option>
              </select>
            </div>
            <div className="ameliyat-tipi">
              <label for="ameliyat-tipi">Ameliyat Tipi:</label>
              <select
                name="ameliyat-tipi"
                id="ameliyat-tipi"
                value={ameliyatTipi}
                onChange={(e) => setAmeliyatTipi(e.target.value)}
              >
                <option value="ayaktan">Ayaktan</option>
                <option value="acil">Acil</option>
                <option value="elektif">Elektif</option>
                <option value="biyopsi">Biyopsi</option>
                <option value="acik">Açık</option>
              </select>
            </div>
            <div className="norolojik">
              <label for="norolojik">Nörolojik:</label>
              <select
                name="norolojik"
                id="norolojik"
                value={norolojik}
                onChange={(e) => setNorolojik(e.target.value)}
              >
                <option value="deger1"></option>
              </select>
            </div>
            <div className="abdomen">
              <label for="abdomen">Abdomen:</label>
              <select
                name="abdomen"
                id="abdomen"
                value={abdomen}
                onChange={(e) => setAbdomen(e.target.value)}
              >
                <option value="deger1"></option>
              </select>
            </div>
          </form>
        </div>
        <div className="text-area">
          <div className="preop">
            <label for="preop">Preop Tanı: </label>
            <input
              type="text"
              value={preopTani}
              onChange={(e) => setPreopTani(e.target.value)}
            />
          </div>
          <div className="postop">
            <label for="postop">Postop Tanı: </label>
            <input
              type="text"
              value={postopTani}
              onChange={(e) => setPostopTani(e.target.value)}
            />
          </div>
          <div className="sonuc">
            <label for="sonuc">Sonuc: </label>
            <select
              name="sonuc"
              id="sonuc"
              value={sonuc}
              onChange={(e) => setSonuc(e.target.value)}
            >
              <option value="sonuc"></option>
            </select>
          </div>
          <div className="risk">
            <label for="risk" className="risk-label">
              Risk:
            </label>
            <select
              name="risk"
              id="risk"
              value={risk}
              onChange={(e) => setRisk(e.target.value)}
            >
              <option value="risk"></option>
            </select>
            <label for="kalp" className="kalp-label">
              Kalp:{" "}
            </label>
            <select
              name="kalp"
              id="kalp"
              value={kalp}
              onChange={(e) => setKalp(e.target.value)}
            >
              <option value="kalp"></option>
            </select>
            <label for="gogus" className="gogus-label">
              Göğüs:{" "}
            </label>
            <select
              name="gogus"
              id="gogus"
              value={gogus}
              onChange={(e) => setGogus(e.target.value)}
            >
              <option value="gogus"></option>
            </select>
          </div>
          <div className="checkboxs">
            <input
              type="checkbox"
              value={checkboxSelection}
              onChange={(e) => setCheckboxSelection(e.target.value)}
            />
            <label for="acil" className="acil-label">
              Acil
            </label>
            <input type="checkbox" />
            <label for="patoloji" className="patoloji-label">
              Patoloji Var
            </label>
            <input type="checkbox" />
            <label for="ozel" className="ozel-label">
              Özel Fark Var
            </label>
            <input type="checkbox" />
            <label for="malzeme" className="malzeme-label">
              Özellikli Malzeme Var
            </label>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="sol-bolum">
          <div className="cerrahi-ekip">
            <label for="cerrahi-ekip">Cerrahi Ekip:</label>
            <select
              className="ekip"
              id="ekip"
              value={cerrahiEkip}
              onChange={(e) => setCerrahiEkip(e.target.value)}
            >
              <option value="ekip"></option>
            </select>
            {/* <button className="ekle">Ekle</button> */}
          </div>
          <div className="personel">
            <label for="personel" id="personel">
              Personel:{" "}
            </label>
            <select name="doktor" id="doktor">
              <option value="doktor">Doktor</option>
            </select>
            <select
              name="isim-soyisim"
              id="isim-soyisim"
              className="isim-soyisim"
              value={cerrahiPersonel}
              onChange={(e) => setCerrahiPersonel(e.target.value)}
            >
              <option value="isim-soyisim"></option>
            </select>
            {/* <button className="sil">Sil</button> */}
          </div>
        </div>
        <div className="sag-bolum">
          <div className="anestezi-ekibi">
            <label for="anestezi-ekibi">Anestezi Ekibi: </label>
            <select
              name="anestezi-ekibi"
              id="anestezi-ekibi"
              value={anesteziEkibi}
              onChange={(e) => setAnesteziEkibi(e.target.value)}
            >
              <option value="anestezi-ekibi"></option>
            </select>
          </div>
          <div className="personel-anestezi">
            <label for="persone-anestezi">Personel:</label>
            <select
              name="persone-anestezi"
              id="personel-anestezi"
              value={anesteziPersonel}
              onChange={(e) => setAnesteziPersonel(e.target.value)}
            >
              <option value="persone-anestezi"></option>
            </select>
            <button className="ekle">Ekle</button>
            <button className="sil">Sil</button>
          </div>
        </div>
      </div>
      <div className="window-button">
        <button onClick={handleSave} style={{ marginTop: "20px" }}>Kaydet</button>
      </div>
    </div>
  );
}

export default AmeliyatGiris;

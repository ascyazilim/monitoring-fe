import React, { useState } from "react";
import "./Konsultasyon.css";
import axios from "axios";

export const Konsultasyon = ({ onClose }) => {
  const [noteType, setNoteType] = useState("istek");
  const [istekNotu, setIstekNotu] = useState("");
  const [istekBolumAdi, setIstekBolumAdi] = useState("istek-eriskin-acil");
  const [istekBirimAdi, setIstekBirimAdi] = useState("acil-klinik");
  const [istekDoktorAdi, setIstekDoktorAdi] = useState("doktor1");
  const [istekDoktorIletisim, setIstekDoktorIletisim] = useState("");
  const [istekAsistanAdi, setIstekAsistanAdi] = useState("");
  const [istekTarih, setIstekTarih] = useState("");
  const [istekNedeni, setIstekNedeni] = useState("");

  const [karsilamaBolumAdi, setKarsilamaBolumAdi] = useState(
    "karsilama-enfeksiyon"
  );
  const [karsilamaBirimAdi, setKarsilamaBirimAdi] =
    useState("enfeksiyon-klinik");
  const [karsilamaDoktorAdi, setKarsilamaDoktorAdi] = useState("doktor1");
  const [karsilamaAsistanAdi, setKarsilamaAsistanAdi] = useState("");
  const [karsilamaEkip, setKarsilamaEkip] = useState("");
  const [karsilamaTarih, setKarsilamaTarih] = useState("");
  const [karsilamaCevap, setKarsilamaCevap] = useState("");
  const [karsilamaNotu, setKarsilamaNotu] = useState("");

  const handleSave = async () => {
    const data = {
      noteType,
      istekNotu,
      istekBolumAdi,
      istekBirimAdi,
      istekDoktorAdi,
      istekDoktorIletisim,
      istekAsistanAdi,
      istekTarih,
      istekNedeni,
      karsilamaBolumAdi,
      karsilamaBirimAdi,
      karsilamaDoktorAdi,
      karsilamaAsistanAdi,
      karsilamaEkip,
      karsilamaTarih,
      karsilamaCevap,
      karsilamaNotu,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/konsultasyon/create",
        data
      );
      console.log("Veri başarıyla kaydedildi", response.data);
    } catch (error) {
      console.error("veri kaydedilirken bir hata oluştu", error);
    }
  };

  return (
    <div className="main-konsultasyon">
      <div className="baslik">Konsültasyon</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="section">
        <div className="form">
          <div className="istek">
            <div className="istek-content">
              <div className="istek-baslik">İstek Bilgileri</div>
              <div className="istek-bolum">
                <label htmlFor="bolum-adi">Bölüm adı:</label>
                <select
                  name="bolum-adi"
                  id="bolum-adi"
                  value={istekBolumAdi}
                  onChange={(e) => setIstekBolumAdi(e.target.value)}
                >
                  <option value="istek-eriskin-acil">Erişkin Acil</option>
                  <option value="istek-cocuk-acil">Çocuk Acil</option>
                </select>
              </div>
              <div className="istek-birim">
                <label htmlFor="birim-adi">Birim Adı:</label>
                <select
                  name="birim-adi"
                  id="birim-adi"
                  value={istekBirimAdi}
                  onChange={(e) => setIstekBirimAdi(e.target.value)}
                >
                  <option value="acil-klinik">Acil Klinik</option>
                </select>
              </div>
              <div className="istek-doktor-adi">
                <label htmlFor="istek-doktor-adi">Doktor Adı:</label>
                <select
                  name="istek-doktor-adi"
                  id="istek-doktor-adi"
                  value={istekDoktorAdi}
                  onChange={(e) => setIstekDoktorAdi(e.target.value)}
                >
                  <option value="doktor1">Prof.Dr.Ahmet DEMİRCAN</option>
                  <option value="doktor2">Prof.Dr. Ali Cebecioğlu</option>
                  <option value="doktor3">Dr. Betül Öztürk</option>
                  <option value="doktor4">Dr. Erman Kavlu</option>
                  <option value="doktor5">Uzm.Dr. Hacı Nadir Yalçın</option>
                  <option value="doktor6">Doç.Dr. Hakan Demirel</option>
                </select>
              </div>
              <div className="istek-doktor-iletisim">
                <label htmlFor="doktor-iletisim">Dr. İletişim:</label>
                <input
                  type="text"
                  value={istekDoktorIletisim}
                  onChange={(e) => setIstekDoktorIletisim(e.target.value)}
                />
              </div>
              <div className="istek-asistan">
                <label htmlFor="asistan">Asistan Adı:</label>
                <input
                  type="text"
                  value={istekAsistanAdi}
                  onChange={(e) => setIstekAsistanAdi(e.target.value)}
                />
              </div>
              <div className="istek-tarih">
                <label htmlFor="istek-tarih">İstek Tarihi:</label>
                <input
                  type="datetime-local"
                  value={istekTarih}
                  onChange={(e) => setIstekTarih(e.target.value)}
                />
              </div>
              <div className="istek-nedeni">
                <label htmlFor="nedeni">Nedeni: </label>
                <input
                  type="text"
                  value={istekNedeni}
                  onChange={(e) => setIstekNedeni(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="karsilama">
            <div className="karsilama-baslik">Karşılama Bilgileri</div>
            <div className="karsilama-bolum">
              <label htmlFor="bolum-adi">Bölüm Adı:</label>
              <select
                name="bolum-adi"
                id="bolum-adi"
                value={karsilamaBolumAdi}
                onChange={(e) => setKarsilamaBolumAdi(e.target.value)}
              >
                <option value="karsilama-enfeksiyon">
                  Enfeksiyon Hastalıkları
                </option>
                <option value="karsilama-goz">Göz Hastalıkları</option>
                <option value="karsilama-dahiliye">Dahiliye</option>
              </select>
            </div>
            <div className="karsilama-birim">
              <label htmlFor="birim-adi">Birim Adı:</label>
              <select
                name="birim-adi"
                id="birim-adi"
                value={karsilamaBirimAdi}
                onChange={(e) => setKarsilamaBirimAdi(e.target.value)}
              >
                <option value="enfeksiyon-klinik">Enfeksiyon Klinik</option>
                <option value="goz-klinik">Göz Klinik</option>
                <option value="dahiliye-klinik">Dahiiye klinik</option>
              </select>
            </div>
            <div className="karsilama-doktor">
              <label htmlFor="karsilama-doktor">Doktor Adı:</label>
              <select
                name="karsilama-doktor"
                id="karsilama-doktor"
                value={karsilamaDoktorAdi}
                onChange={(e) => setKarsilamaDoktorAdi(e.target.value)}
              >
                <option value="doktor1">Prof.Dr.Ahmet DEMİRCAN</option>
                <option value="doktor2">Prof.Dr. Ali Cebecioğlu</option>
                <option value="doktor3">Dr. Betül Öztürk</option>
                <option value="doktor4">Dr. Erman Kavlu</option>
                <option value="doktor5">Uzm.Dr. Hacı Nadir Yalçın</option>
                <option value="doktor6">Doç.Dr. Hakan Demirel</option>
              </select>
            </div>
            <div className="karsilama-asistan">
              <label htmlFor="karsilama-asistan">Asistan Adı:</label>
              <input
                type="text"
                value={karsilamaAsistanAdi}
                onChange={(e) => setKarsilamaAsistanAdi(e.target.value)}
              />
            </div>
            <div className="karsilama-ekip">
              <label htmlFor="ekip">Ekip: </label>
              <input
                type="text"
                value={karsilamaEkip}
                onChange={(e) => setKarsilamaEkip(e.target.value)}
              />
            </div>
            <div className="karsilama-tarih">
              <label htmlFor="karsilama-tarih">Karş. Tarihi:</label>
              <input
                type="datetime-local"
                value={karsilamaTarih}
                onChange={(e) => setKarsilamaTarih(e.target.value)}
              />
              <label htmlFor="cevap">Cevap:</label>
              <input
                type="text"
                value={karsilamaCevap}
                onChange={(e) => setKarsilamaCevap(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="karsilama-not">
        <div className="karsilama-not-button">
          <button
            className={`istek-button ${noteType === "istek" ? "active" : ""}`}
            onClick={() => setNoteType("istek")}
          >
            İstek Notu
          </button>
          <button
            className={`karsilama-button ${
              noteType === "karsilama" ? "active" : ""
            }`}
            onClick={() => setNoteType("karsilama")}
          >
            Karşılama Notu
          </button>
        </div>
        {noteType === "istek" ? (
          <textarea
            name="istek-note"
            id="istek-note"
            cols="122"
            rows="6"
            placeholder="İstek Notu girin"
            value={istekNotu}
            onChange={(e) => setIstekNotu(e.target.value)}
          ></textarea>
        ) : (
          <textarea
            name="karsilama-note"
            id="karsilama-note"
            cols="122"
            rows="6"
            placeholder="Karşılama Notu girin"
            value={karsilamaNotu}
            onChange={(e) => setKarsilamaNotu(e.target.value)}
          ></textarea>
        )}
      </div> */}
      <div className="tabstrip-konsultasyon">
        <button
          className={
            noteType === "istek" ? "tabstrip-button active" : "tabstrip-button"
          }
          onClick={() => setNoteType("istek")}
        >
          İstek Notu
        </button>
        <button
          className={
            noteType === "karsilama"
              ? "tabstrip-button active"
              : "tabstrip-button"
          }
          onClick={() => setNoteType("karsilama")}
        >
          Karşılama Notu
        </button>
      </div>
      <div className="karsilama-not">
        {noteType === "istek" ? (
          <textarea
            name="istek-note"
            id="istek-note"
            cols="122"
            rows="6"
            placeholder="İstek Notu girin"
            value={istekNotu}
            onChange={(e) => setIstekNotu(e.target.value)}
          ></textarea>
        ) : (
          <textarea
            name="karsilama-note"
            id="karsilama-note"
            cols="122"
            rows="6"
            placeholder="Karşılama Notu girin"
            value={karsilamaNotu}
            onChange={(e) => setKarsilamaNotu(e.target.value)}
          ></textarea>
        )}
      </div>
      <div className="window-button">
        <button onClick={handleSave}>Kaydet</button>
      </div>
    </div>
  );
};

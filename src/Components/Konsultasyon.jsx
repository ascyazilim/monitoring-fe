import React, { useState } from "react";
import "./Konsultasyon.css";

export const Konsultasyon = ({onClose}) => {
  const [noteType, setNoteType] = useState("istek");
  const [istekNote, setIstekNote] = useState("");
  const [karsilamaNote, setKarsilamaNote] = useState("");

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
                <select name="bolum-adi" id="bolum-adi">
                  <option value="istek-eriskin-acil">Erişkin Acil</option>
                  <option value="istek-cocuk-acil">Çocuk Acil</option>
                </select>
              </div>
              <div className="istek-birim">
                <label htmlFor="birim-adi">Birim Adı:</label>
                <select name="birim-adi" id="birim-adi">
                  <option value="acil-klinik">Acil Klinik</option>
                </select>
              </div>
              <div className="istek-doktor-adi">
                <label htmlFor="istek-doktor-adi">Doktor Adı:</label>
                <select name="istek-doktor-adi" id="istek-doktor-adi">
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
                <input type="text" />
              </div>
              <div className="istek-asistan">
                <label htmlFor="asistan">Asistan Adı:</label>
                <input type="text" />
              </div>
              <div className="istek-tarih">
                <label htmlFor="istek-tarih">İstek Tarihi:</label>
                <input type="datetime-local" />
              </div>
              <div className="istek-nedeni">
                <label htmlFor="nedeni">Nedeni: </label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="karsilama">
            <div className="karsilama-baslik">Karşılama Bilgileri</div>
            <div className="karsilama-bolum">
              <label htmlFor="bolum-adi">Bölüm Adı:</label>
              <select name="bolum-adi" id="bolum-adi">
                <option value="karsilama-enfeksiyon">
                  Enfeksiyon Hastalıkları
                </option>
                <option value="karsilama-goz">Göz Hastalıkları</option>
                <option value="karsilama-dahiliye">Dahiliye</option>
              </select>
            </div>
            <div className="karsilama-birim">
              <label htmlFor="birim-adi">Birim Adı:</label>
              <select name="birim-adi" id="birim-adi">
                <option value="enfeksiyon-klinik">Enfeksiyon Klinik</option>
                <option value="goz-klinik">Göz Klinik</option>
                <option value="dahiliye-klinik">Dahiiye klinik</option>
              </select>
            </div>
            <div className="karsilama-doktor">
              <label htmlFor="karsilama-doktor">Doktor Adı:</label>
              <select name="karsilama-doktor" id="karsilama-doktor">
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
              <input type="text" />
            </div>
            <div className="karsilama-ekip">
              <label htmlFor="ekip">Ekip: </label>
              <input type="text" />
            </div>
            <div className="karsilama-tarih">
              <label htmlFor="karsilama-tarih">Karş. Tarihi:</label>
              <input type="datetime-local" />
              <label htmlFor="cevap">Cevap:</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="karsilama-not">
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
            rows="8"
            placeholder="İstek Notu girin"
            value={istekNote}
            onChange={(e) => setIstekNote(e.target.value)}
          ></textarea>
        ) : (
          <textarea
            name="karsilama-note"
            id="karsilama-note"
            cols="122"
            rows="8"
            placeholder="Karşılama Notu girin"
            value={karsilamaNote}
            onChange={(e) => setKarsilamaNote(e.target.value)}
          ></textarea>
        )}
      </div>
    </div>
  );
};


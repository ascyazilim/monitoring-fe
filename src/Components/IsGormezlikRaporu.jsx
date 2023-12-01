import React, { useState } from "react";
import "./IsGormezlikRaporu.css";
import axios from "axios";

function IsGormezlikRaporu({ onClose }) {
  const [hastaAdiSoyadi, setHastaAdiSoyadi] = useState("");
  const [hastaTcKimNo, setHastaTcKimNo] = useState("");
  const [raporDurumu, setRaporDurumu] = useState("");
  const [meslekHastaligiSuphesi, setMeslekHastaligiSuphesi] = useState("");
  const [ayaktaBaslamaTarihi, setAyaktaBaslamaTarihi] = useState("");
  const [ayaktaBitisTarihi, setAyaktaBitisTarihi] = useState("");
  const [doktorAdiSoyadi, setDoktorAdiSoyadi] = useState("");
  const [doktorBrans, setDoktorBrans] = useState("");
  const [raporAciklama, setRaporAciklama] = useState("");
  const [duzenlendigiTarih, setDuzenlendigiTarih] = useState("");
  const [baslamaTarihi, setBaslamaTarihi] = useState("");
  const [vaka, setVaka] = useState("");
  const [duzenlemeTuru, setDuzenlemeTuru] = useState("");
  const [adliVaka, setAdliVaka] = useState("");
  const [yatisDurumu, setYatisDurumu] = useState("");
  const [yatarakGunSayisi, setYatarakGunSayisi] = useState("");
  const [ayaktaGunSayisi, setAyaktaGunSayisi] = useState("");

  const handleSave = async () => {
    const data = {
      hastaAdiSoyadi,
      hastaTcKimNo,
      raporDurumu,
      meslekHastaligiSuphesi,
      ayaktaBaslamaTarihi,
      ayaktaBitisTarihi,
      doktorAdiSoyadi,
      doktorBrans,
      raporAciklama,
      duzenlendigiTarih,
      baslamaTarihi,
      vaka,
      duzenlemeTuru,
      adliVaka,
      yatisDurumu,
      yatarakGunSayisi,
      ayaktaGunSayisi,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/isgormezlik-rapor/create",
        data
      );
      console.log("Veri başarıyla kaydedildi", response.data);
    } catch (error) {
      console.error("Veri kaydedilirken bir hata oluştu", error);
    }
  };

  return (
    <div className="isgormezlik-main">
      <div className="baslik">İş Görmezlik Raporu</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="isgormezlik-form">
        <div className="isgormezlik-sol">
          <div className="belge-duzenleme-tarihi">
            <label htmlFor="duzenlenme-tarihi">Düzenlendiği Tarih:</label>
            <input
              type="date"
              value={duzenlendigiTarih}
              onChange={(e) => setDuzenlendigiTarih(e.target.value)}
            />
          </div>

          <div className="baslama-tarihi">
            <label htmlFor="baslama-tarihi">Başlama Tarihi:</label>
            <input
              type="date"
              value={baslamaTarihi}
              onChange={(e) => setBaslamaTarihi(e.target.value)}
            />
          </div>
          <div className="vaka">
            <label htmlFor="vaka">Vaka:</label>
            <select
              name="vaka"
              id="vaka"
              value={vaka}
              onChange={(e) => setVaka(e.target.value)}
            >
              <option value="is-kazasi">İş Kazası</option>
              <option value="hastalik">Hastalık</option>
            </select>
          </div>
          <div className="duzenleme-turu">
            <label htmlFor="duzenleme-turu">Düzenleme Türü:</label>
            <select
              name="duzenleme-turu"
              id="duzenleme-turu"
              value={duzenlemeTuru}
              onChange={(e) => setDuzenlemeTuru(e.target.value)}
            >
              <option value="heyet">Heyet</option>
              <option value="tek-hekim">Tek Hekim</option>
            </select>
          </div>

          <div className="adli-vaka">
            <label htmlFor="adli-vaka">Adli Vaka:</label>
            <select
              name="adli-vaka"
              id="adli-vaka"
              value={adliVaka}
              onChange={(e) => setAdliVaka(e.target.value)}
            >
              <option value="adli-vaka">Adli Vaka</option>
              <option value="trafik-kazasi">Trafik Kazası</option>
              <option value="yok">Yok</option>
            </select>
          </div>
          <div className="yatis-durumu">
            <label htmlFor="yatis-durumu">Yatış Durumu:</label>
            <select
              name="yatis-durumu"
              id="yatis-durumu"
              value={yatisDurumu}
              onChange={(e) => setYatisDurumu(e.target.value)}
            >
              <option value="ayakta">Ayakta</option>
              <option value="yatis-var">Yatış Var</option>
              <option value="karma">Karma</option>
            </select>
          </div>
          <div className="yatarak-gun">
            <label htmlFor="yatarak-gun">Yatarak Gün Sayısı:</label>
            <input
              type="text"
              value={yatarakGunSayisi}
              onChange={(e) => setYatarakGunSayisi(e.target.value)}
            />
          </div>
          <div className="ayakta-gun">
            <label htmlFor="ayakta-gun">Ayakta Gün Sayısı:</label>
            <input
              type="text"
              value={ayaktaGunSayisi}
              onChange={(e) => setAyaktaGunSayisi(e.target.value)}
            />
          </div>
        </div>

        <div className="isgormezlik-sag">
          <div className="hasta-adsoyad">
            <label htmlFor="hasta-adsoyad">Hasta Adı Soyadı:</label>
            <input
              type="text"
              value={hastaAdiSoyadi}
              onChange={(e) => setHastaAdiSoyadi(e.target.value)}
            />
          </div>
          <div className="tc-kimlik-no">
            <label htmlFor="tc-kimlik-no">Tc Kimlik No:</label>
            <input
              type="text"
              value={hastaTcKimNo}
              onChange={(e) => setHastaTcKimNo(e.target.value)}
            />
          </div>
          <div className="rapor-durumu">
            <label htmlFor="rapor-durumu">Rapor Durumu:</label>
            <input
              type="radio"
              name="rapor-durumu"
              value="ÇALIŞIR"
              checked={raporDurumu === "ÇALIŞIR"}
              onChange={(e) => setRaporDurumu(e.target.value)}
              style={{ marginLeft: "56px" }}
            />
            <label htmlFor="calisir">ÇALIŞIR</label>
            <input
              type="radio"
              name="rapor-durumu"
              value="KONTROL"
              checked={raporDurumu === "KONTROL"}
              onChange={(e) => setRaporDurumu(e.target.value)}
            />
            <label htmlFor="kontrol">KONTROL</label>
            <input
              type="radio"
              name="rapor-durumu"
              value="ÖLÜM"
              checked={raporDurumu === "ÖLÜM"}
              onChange={(e) => setRaporDurumu(e.target.value)}
            />
            <label htmlFor="olum">ÖLÜM</label>
          </div>
          <div className="meslek-hastaligi">
            <label htmlFor="meslek-hastaligi">Meslek Hast.Şüphesi:</label>
            <select
              name="meslek-hastaligi"
              id="meslek-hastaligi"
              value={meslekHastaligiSuphesi}
              onChange={(e) => setMeslekHastaligiSuphesi(e.target.value)}
            >
              <option value="var">Var</option>
              <option value="yok">Yok</option>
            </select>
          </div>
          <div className="ayakta-baslama">
            <label htmlFor="ayakta-baslama">Ayakta Başlama Tarihi:</label>
            <input
              type="date"
              value={ayaktaBaslamaTarihi}
              onChange={(e) => setAyaktaBaslamaTarihi(e.target.value)}
            />
          </div>
          <div className="ayakta-bitis">
            <label htmlFor="ayakta-bitis">Ayakta Bitiş Tarihi:</label>
            <input
              type="date"
              value={ayaktaBitisTarihi}
              onChange={(e) => setAyaktaBitisTarihi(e.target.value)}
            />
          </div>
          <div className="rapor-doktor">
            <label htmlFor="rapor-doktor">Doktor Adı Soyadı:</label>
            <select
              name="rapor-doktor"
              id="rapor-doktor"
              value={doktorAdiSoyadi}
              onChange={(e) => setDoktorAdiSoyadi(e.target.value)}
            >
              <option value="doktor1">Prof.Dr.Ahmet DEMİRCAN</option>
              <option value="doktor2">Prof.Dr. Ali Cebecioğlu</option>
              <option value="doktor3">Dr. Betül Öztürk</option>
              <option value="doktor4">Dr. Erman Kavlu</option>
              <option value="doktor5">Uzm.Dr. Hacı Nadir Yalçın</option>
              <option value="doktor6">Doç.Dr. Hakan Demirel</option>
            </select>
          </div>
          <div className="doktor-brans">
            <label htmlFor="doktor-brans">Doktor Branş:</label>
            <select
              name="doktor-brans"
              id="doktor-brans"
              value={doktorBrans}
              onChange={(e) => setDoktorBrans(e.target.value)}
            >
              <option value="dahiliye">Dahiliye</option>
              <option value="genel-cerrahi">Genel Cerrahi</option>
              <option value="goz">Göz Hastalıkları</option>
              <option value="kardiyoloji">Kardiyoloji</option>
              <option value="psikiyatri">Psikiyatri</option>
            </select>
          </div>
          <div className="rapor-aciklama">
            <label htmlFor="rapor-aciklama">Rapor Açıklama:</label>
            <textarea
              name="rapor-aciklama"
              id="rapor-aciklama"
              value={raporAciklama}
              onChange={(e) => setRaporAciklama(e.target.value)}
              cols="35"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="window-button">
        <button onClick={handleSave}>Kaydet</button>
      </div>
    </div>
  );
}

export default IsGormezlikRaporu;

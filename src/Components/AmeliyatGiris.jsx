import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AmeliyatGiris.css";

function AmeliyatGiris() {
  const [ameliyatGiris, setAmeliyatGiris] = useState([]);

  useEffect(() => {
    const fetchAmeliyatGiris = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/ameliyat-giris/${id}"
        );
        setAmeliyatGiris(response.data);
      } catch (error) {
        console.error("Veri alınamadı:", error);
      }
    };
    fetchAmeliyatGiris();
  }, []);
  return (
    <div className="main">
      <div className="baslik">Ameliyat Giriş</div>
      <div className="section">
        <div className="form">
          <form className="main-form">
            <div className="baslangic">
              <label for="baslangicTarihi">Başlangıç Tarihi:</label>
              <input type="date" id="baslangicTarihi" name="baslangicTarihi" />
              <input type="time" id="baslangicSaat" name="baslangicSaat" />
            </div>

            <div className="bitis">
              <label for="bitisTarihi">Bitiş Tarihi:</label>
              <input type="date" id="bitisTarihi" name="bitisTarihi" />
              <input type="time" id="bitisSaat" name="bitisSaat" />
            </div>
            <div className="ameliyathane">
              <label for="ameliyathane">Ameliyathane:</label>
              <select name="ameliyathane" id="ameliyathane">
                <option value="ameliyathane1">Ameliyathane 1</option>
                <option value="ameliyathane2">Ameliyathane 2</option>
                <option value="ameliyathane3">Ameliyathane 3</option>
                <option value="ameliyathane4">Ameliyathane 4</option>
              </select>
            </div>
            <div className="anestezi">
              <label for="anestezi">Anestezi:</label>
              <select name="anestezi" id="anestezi">
                <option value="genel">Genel</option>
                <option value="bolgesel">Bölgesel</option>
                <option value="lokal">Lokal</option>
              </select>
            </div>
            <div className="ameliyat-tipi">
              <label for="ameliyat-tipi">Ameliyat Tipi:</label>
              <select name="ameliyat-tipi" id="ameliyat-tipi">
                <option value="ayaktan">Ayaktan</option>
                <option value="acil">Acil</option>
                <option value="elektif">Elektif</option>
                <option value="biyopsi">Biyopsi</option>
                <option value="acik">Açık</option>
              </select>
            </div>
            <div className="norolojik">
              <label for="norolojik">Nörolojik:</label>
              <select name="norolojik" id="norolojik">
                <option value="deger1"></option>
              </select>
            </div>
            <div className="abdomen">
              <label for="abdomen">Abdomen:</label>
              <select name="abdomen" id="abdomen">
                <option value="deger1"></option>
              </select>
            </div>
          </form>
        </div>
        <div className="text-area">
          <div className="preop">
            <label for="preop">Preop Tanı: </label>
            <input type="text" />
          </div>
          <div className="postop">
            <label for="postop">Postop Tanı: </label>
            <input type="text" />
          </div>
          <div className="sonuc">
            <label for="sonuc">Sonuc: </label>
            <select name="sonuc" id="sonuc">
                <option value="sonuc"></option>
            </select>
          </div>
          <div className="risk">
            <label for="risk" className="risk-label">
              Risk:
            </label>
            <select name="risk" id="risk">
              <option value="risk"></option>
            </select>
            <label for="kalp" className="kalp-label">
              Kalp:{" "}
            </label>
            <select name="kalp" id="kalp">
              <option value="kalp"></option>
            </select>
            <label for="gogus" className="gogus-label">
              Göğüs:{" "}
            </label>
            <select name="gogus" id="gogus">
              <option value="gogus"></option>
            </select>
          </div>
          <div className="checkboxs">
            <input type="checkbox" />
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
            <select className="ekip" id="ekip">
              <option value="ekip"></option>
            </select>
            <button className="ekle">Ekle</button>
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
            >
              <option value="isim-soyisim"></option>
            </select>
            <button className="sil">Sil</button>
          </div>
        </div>
        <div className="sag-bolum">
            <div className="anestezi-ekibi">
                <label for="anestezi-ekibi">Anestezi Ekibi: </label>
                <select name="anestezi-ekibi" id="anestezi-ekibi">
                    <option value="anestezi-ekibi"></option>
                </select>
            </div>
            <div className="personel-anestezi">
                <label for="persone-anestezi">Personel:</label>
                <select name="persone-anestezi" id="personel-anestezi">
                    <option value="persone-anestezi"></option>
                </select>
                <button className="ekle">Ekle</button>
                <button className="sil">Sil</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AmeliyatGiris;

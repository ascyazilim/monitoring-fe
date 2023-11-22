import React from "react";
import "./IsGormezlikRaporu.css";

function IsGormezlikRaporu({ onClose }) {
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
            <input type="date" />
          </div>
          
          <div className="baslama-tarihi">
            <label htmlFor="baslama-tarihi">Başlama Tarihi:</label>
            <input type="date" />
          </div>
          <div className="vaka">
            <label htmlFor="vaka">Vaka:</label>
            <select name="vaka" id="vaka">
              <option value="is-kazasi">İş Kazası</option>
              <option value="hastalik">Hastalık</option>
            </select>
          </div>
          <div className="duzenleme-turu">
            <label htmlFor="duzenleme-turu">Düzenleme Türü:</label>
            <select name="duzenleme-turu" id="duzenleme-turu">
              <option value="heyet">Heyet</option>
              <option value="tek-hekim">Tek Hekim</option>
            </select>
          </div>

          <div className="adli-vaka">
            <label htmlFor="adli-vaka">Adli Vaka:</label>
            <select name="adli-vaka" id="adli-vaka">
              <option value="adli-vaka">Adli Vaka</option>
              <option value="trafik-kazasi">Trafik Kazası</option>
              <option value="yok">Yok</option>
            </select>
          </div>
          <div className="yatis-durumu">
            <label htmlFor="yatis-durumu">Yatış Durumu:</label>
            <select name="yatis-durumu" id="yatis-durumu">
              <option value="ayakta">Ayakta</option>
              <option value="yatis-var">Yatış Var</option>
              <option value="karma">Karma</option>
            </select>
          </div>
          <div className="yatarak-gun">
            <label htmlFor="yatarak-gun">Yatarak Gün Sayısı:</label>
            <input type="text" />
          </div>
          <div className="ayakta-gun">
            <label htmlFor="ayakta-gun">Ayakta Gün Sayısı:</label>
            <input type="text" />
          </div>
        </div>

        <div className="isgormezlik-sag">
          <div className="hasta-adsoyad">
            <label htmlFor="hasta-adsoyad">Hasta Adı Soyadı:</label>
            <input type="text" />
          </div>
          <div className="tc-kimlik-no">
            <label htmlFor="tc-kimlik-no">Tc Kimlik No:</label>
            <input type="text" />
          </div>
          <div className="rapor-durumu">
            <label htmlFor="rapor-durumu">Rapor Durumu:</label>
            <input
              type="radio"
              name="rapor-durumu"
              style={{ marginLeft: "56px" }}
            />
            <label htmlFor="calisir">ÇALIŞIR</label>
            <input type="radio" name="rapor-durumu" />
            <label htmlFor="kontrol">KONTROL</label>
            <input type="radio" name="rapor-durumu" />
            <label htmlFor="olum">ÖLÜM</label>
          </div>
          <div className="meslek-hastaligi">
            <label htmlFor="meslek-hastaligi">Meslek Hast.Şüphesi:</label>
            <select name="meslek-hastaligi" id="meslek-hastaligi">
              <option value="var">Var</option>
              <option value="yok">Yok</option>
            </select>
          </div>
          <div className="ayakta-baslama">
            <label htmlFor="ayakta-baslama">Ayakta Başlama Tarihi:</label>
            <input type="date" />
          </div>
          <div className="ayakta-bitis">
            <label htmlFor="ayakta-bitis">Ayakta Bitiş Tarihi:</label>
            <input type="date" />
          </div>
          <div className="rapor-doktor">
            <label htmlFor="rapor-doktor">Doktor Adı Soyadı:</label>
            <select name="rapor-doktor" id="rapor-doktor">
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
            <select name="doktor-brans" id="doktor-brans">
              <option value="dahiliye">Dahiliye</option>
              <option value="genel-cerrahi">Genel Cerrahi</option>
              <option value="goz">Göz Hastalıkları</option>
              <option value="kardiyoloji">Kardiyoloji</option>
              <option value="psikiyatri">Psikiyatri</option>
            </select>
          </div>
          <div className="rapor-aciklama">
            <label htmlFor="rapor-aciklama">Rapor Açıklama:</label>
            <textarea name="rapor-aciklama" id="rapor-aciklama" cols="35" rows="3"></textarea>
          </div>
        </div>
      </div>
      <div className="window-button">
        <button>Kaydet</button>
      </div>
    </div>
  );
}

export default IsGormezlikRaporu;

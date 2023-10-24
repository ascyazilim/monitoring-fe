import React from "react";
import "./Anamnez.css";

import { useState } from "react";
import TaniEkle from "./TaniEkle";
import IlacEkle from "./IlacEkle";
import HizmetIstemEkle from "./HizmetIstemEkle";

function Anamnez() {
  //Şikayet ve Hikaye Alanları
  const [sikayet, setSikayet] = useState("");
  const [hikaye, setHikaye] = useState("");

  //Doktor seçim Alanları
  const [selectedSikayetDoktor, setSelectedSikayetDoktor] = useState("");
  const [selectedHikayeDoktor, setSelectedHikayeDoktor] = useState("");

  //Özgeçmiş ve Soygeçmiş Alanları
  const [ozgecmis, setOzgecmis] = useState("");
  const [soygecmis, setSoygecmis] = useState("");

  //Doktor Seçim Alanları
  const [selectedOzgecmisDoktor, setSelectedOzgecmisDoktor] = useState("");
  const [selectedSoygecmisDoktor, setSelectedSoygecmisDoktor] = useState("");

  //Alerji ve Sigara Alanları
  const [alerji, setAlerji] = useState("");
  const [sigara, setSigara] = useState("");
  const [sigaraAciklama, setSigaraAciklama] = useState("");

  //Grip Aşısı Alanları
  const [gripAsisi, setGripAsisi] = useState("");
  const [gripAsisiAciklama, setGripAsisisAciklama] = useState("");

  //Tanı, İlaç ve İstem Listeleri
  const [selectedTaniList, setSelectedTaniList] = useState([]);
  const [selectedIlacList, setSelectedIlacList] = useState([]);
  const [selectedIstemList, setSelectedIstemList] = useState([]);

  //Tanı Ekleme Ekranı
  const [isModalOpenTani, setModalOpenTani] = useState(false);
  // const [selectedTaniList, setSelectedTaniList] = useState([]);

  const handleOpenModalTani = () => {
    setModalOpenTani(true);
  };
  const handleCloseModalTani = () => {
    setModalOpenTani(false);
  };
  const handleSelectedTaniListChange = (selectedItems) => {
    setSelectedTaniList(selectedItems);
  };

  //Tanı Silme
  const removeTani = (index) => {
    const newList = [...selectedTaniList];
    newList.splice(index, 1);
    setSelectedTaniList(newList);
  };

  //İlaç Ekleme Ekranı
  const [isModalOpenIlac, setModalOpenIlac] = useState(false);
  // const [selectedIlacList, setSelectedIlacList] = useState([]);

  const handleOpenModalIlac = () => {
    setModalOpenIlac(true);
  };
  const handleCloseModalIlac = () => {
    setModalOpenIlac(false);
  };
  const handleSelectedIlacListChange = (selectedItems) => {
    setSelectedIlacList(selectedItems);
  };

  //İlaç Silme
  const removeIlac = (index) => {
    const newList = [...selectedIlacList];
    newList.splice(index, 1);
    setSelectedTaniList(newList);
  };

  //Hizmet-istem Ekleme
  const [isModalOpenIstem, setModalOpenIstem] = useState(false);
  // const [selectedIstemList, setSelectedIstemList] = useState([]);

  const handleOpenModalIstem = () => {
    setModalOpenIstem(true);
  };
  const handleCloseModalIstem = () => {
    setModalOpenIstem(false);
  };

  const handleSelectedIstemListChange = (selectedItems) => {
    setSelectedIstemList(selectedItems);
  };

  //Hizmet-İstem Silme
  const removeIstem = (index) => {
    const newList = [...selectedIstemList];
    newList.splice(index, 1);
    setSelectedIstemList(newList);
  };

  //Muayene Kaydet
  const handleMuayeneKaydet = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/muayene-kaydet/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sikayet,
            hikaye,
            ozgecmis,
            soygecmis,
            alerji,
            sigara,
            sigaraAciklama,
            gripAsisi,
            gripAsisiAciklama,
            taniList: selectedTaniList.map((tani) => ({
              icd10Kodu: tani.icd10Kodu,
              taniAdi: tani.taniAdi,
            })),
            // selectedTaniList,
            selectedIlacList,
            selectedIstemList,
          }),
        }
      );
      if (response.ok) {
        alert("Muayene başarıyla kaydedildi.");
      } else {
        const data = await response.json();
        alert("Muayene kaydedilirken bir hata oluştu: " + (data.message || ""));
      }
    } catch (error) {
      alert("Ağ hatası:", error);
    }
  };

  return (
    <div className="main">
      <div className="baslik">Muayene</div>
      <div className="muayene-top">
        <div className="form-text">
          <form className="main-form">
            <div className="sikayet">
              <label htmlFor="sikayet">Şikayet:</label>
              <textarea
                cols="45"
                rows="4"
                value={sikayet}
                onChange={(e) => setSikayet(e.target.value)}
              ></textarea>
            </div>
            <div className="hikaye">
              <label fhtmlForor="hikaye">Hikaye:</label>
              <textarea
                cols="45"
                rows="4"
                value={hikaye}
                onChange={(e) => setHikaye(e.target.value)}
              ></textarea>
            </div>
          </form>
        </div>
        <div className="form-doktor">
          <form className="doktor-form">
            <div className="sikayet-doktor">
              <select
                name="sikayet-doktor"
                id="sikayet-doktor"
                value={selectedSikayetDoktor}
                onChange={(e) => setSelectedSikayetDoktor(e.target.value)}
              >
                <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
                <option value="doktor2">Dr. Betül Öztürk</option>
                <option value="doktor3">Dr. Erman Kavlu</option>
                <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
                <option value="doktor5">Doç.Dr. Hakan Demirel</option>
              </select>
              <input type="date" id="sikayet-date" name="sikayet-date" />
            </div>
            <div className="hikaye-doktor">
              <select
                name="hikaye-doktor"
                id="hikaye-doktor"
                value={selectedHikayeDoktor}
                onChange={(e) => setSelectedHikayeDoktor(e.target.value)}
              >
                <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
                <option value="doktor2">Dr. Betül Öztürk</option>
                <option value="doktor3">Dr. Erman Kavlu</option>
                <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
                <option value="doktor5">Doç.Dr. Hakan Demirel</option>
              </select>
              <input type="date" id="hikaye-date" name="hikaye-date" />
            </div>
          </form>
        </div>
      </div>

      <div className="muayene-bottom">
        <div className="form-text">
          <form className="main-form">
            <div className="ozgecmis">
              <label htmlFor="ozgecmis">Özgeçmiş:</label>
              <textarea
                cols="45"
                rows="4"
                value={ozgecmis}
                onChange={(e) => setOzgecmis(e.target.value)}
              ></textarea>
            </div>
            <div className="soygecmis">
              <label htmlFor="soygecmis">Soygeçmiş:</label>
              <textarea
                cols="45"
                rows="4"
                value={soygecmis}
                onChange={(e) => setSoygecmis(e.target.value)}
              ></textarea>
            </div>
          </form>
        </div>
        <div className="form-doktor">
          <form className="doktor-form">
            <div className="ozgecmis-doktor">
              <select
                name="ozgecmis-doktor"
                id="ozgecmis-doktor"
                value={selectedOzgecmisDoktor}
                onChange={(e) => setSelectedOzgecmisDoktor(e.target.value)}
              >
                <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
                <option value="doktor2">Dr. Betül Öztürk</option>
                <option value="doktor3">Dr. Erman Kavlu</option>
                <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
                <option value="doktor5">Doç.Dr. Hakan Demirel</option>
              </select>
              <input type="date" id="ozgecmis-date" name="ozgecmis-date" />
            </div>
            <div className="soygecmis-doktor">
              <select
                name="soygecmis-doktor"
                id="soygecmis-doktor"
                value={selectedSoygecmisDoktor}
                onChange={(e) => setSelectedSoygecmisDoktor(e.target.value)}
              >
                <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
                <option value="doktor2">Dr. Betül Öztürk</option>
                <option value="doktor3">Dr. Erman Kavlu</option>
                <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
                <option value="doktor5">Doç.Dr. Hakan Demirel</option>
              </select>
              <input type="date" id="soygecmis-date" name="soygecmis-date" />
            </div>
          </form>
        </div>
      </div>

      <div className="alerji">
        <label htmlFor="alerji">Alerji:</label>
        <textarea
          name="alerji"
          id="alerji"
          cols="103"
          rows="2"
          value={alerji}
          onChange={(e) => setAlerji(e.target.value)}
        ></textarea>
      </div>

      <div className="sigara">
        <label htmlFor="sigara" id="sigara-baslik">
          Sigara:
        </label>
        <input
          type="radio"
          name="sigara"
          value="yok"
          checked={sigara === "yok"}
          onChange={(e) => setSigara(e.target.value)}
        />
        <label htmlFor="yok">Yok</label>
        <input
          type="radio"
          name="sigara"
          value="var"
          checked={sigara === "var"}
          onChange={(e) => setSigara(e.target.value)}
        />
        <label htmlFor="var">Var</label>
        <label for="aciklama">Açıklama</label>
        <textarea
          name="aciklama"
          id="aciklama"
          cols="79"
          rows="2"
          value={sigaraAciklama}
          onChange={(e) => setSigaraAciklama(e.target.value)}
        ></textarea>
      </div>

      <div className="grip-asisi">
        <label htmlFor="girp-asisi" id="grip-baslik">
          Grip Aşısı:
        </label>
        <input
          type="radio"
          name="grip"
          value="yok"
          checked={gripAsisi === "yok"}
          onChange={(e) => setGripAsisi(e.target.value)}
        />
        <label htmlFor="yok">Yok</label>
        <input
          type="radio"
          name="grip"
          value="var"
          checked={gripAsisi === "var"}
          onChange={(e) => setGripAsisi(e.target.value)}
        />
        <label htmlFor="var">Var</label>
        <label htmlFor="aciklama">Açıklama</label>
        <textarea
          name="aciklama"
          id="aciklama"
          cols="79"
          rows="2"
          value={gripAsisiAciklama}
          onChange={(e) => setGripAsisisAciklama(e.target.value)}
        ></textarea>
      </div>
      <div className="tani-ekle">
        <label htmlFor="tani">Tanı: </label>
        {/* <input
          type="text"
          value={selectedTaniList.join(",   ")}
          onChange={(e) => setSelectedTaniList(e.target.value)}
        /> */}
        <table className="taniekle-table">
          <thead>
            <tr>
              <th className="icd-kodu">ICD10 Kodu</th>
              <th className="tani-adi">Tanı Adı</th>
            </tr>
          </thead>
          <tbody>
            {selectedTaniList.map((tani, index) => (
              <tr key={index}>
                <td className="icd-kodu">{tani.icd10Kodu}</td>
                <td className="tani-adi">{tani.taniAdi}</td>
                <td className="sil-buton">
                  <button onClick={() => removeTani(index)}>Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
      </div>
      {/* <div className="ilac-istem"> */}
      <div className="ilac-ekle">
        <label htmlFor="ilac">İlaç: </label>
        {/* <input
          type="text"
          value={selectedIlacList.join(",   ")}
          onChange={(e) => setSelectedIlacList(e.target.value)}
        /> */}
        {/* onClick={handleOpenModalIlac} tıklayınca modal açılsın */}
        <table className="ilacekle-table">
          <thead>
            <tr>
              <th className="ilac-baslik">İlaç Adı</th>
              <th className="doz-baslik-yeni">Doz</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedIlacList.map((ilac, index) => (
              <tr key={index}>
                <td className="ilac-content">{ilac.ilacAdi}</td>
                <td className="doz-content-yeni">{ilac.doz}</td>
                <td className="sil-buton">
                  <button onClick={() => removeIlac(index)}>Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="istem-ekle">
        <label htmlFor="istem">İstem:</label>
        <table className="istemekle-table">
          <thead>
            <tr>
              <th className="hizmet-kodu-baslik">Hizmet Kodu</th>
              <th className="istem-adi-baslik">İstem Adı</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedIstemList.map((istem, index) => (
              <tr key={index}>
                <td className="hizmet-kodu">{istem.hizmetKodu}</td>
                <td className="istem-adi">{istem.istemAdi}</td>
                <td className="sil-buton">
                  <button onClick={() => removeIstem(index)}>Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* </div> */}

      <div className="alt-menu">
        <button className="menu-button" onClick={handleOpenModalTani}>
          Tanı
          <br /> Ekle
        </button>
        {isModalOpenTani && (
          <TaniEkle
            onClose={handleCloseModalTani}
            onSelectedItemsChange={handleSelectedTaniListChange}
          />
        )}
        <button className="menu-button" onClick={handleOpenModalIlac}>
          İlaç
          <br /> Ekle
        </button>
        {isModalOpenIlac && (
          <IlacEkle
            onClose={handleCloseModalIlac}
            onSelectedItemsChange={handleSelectedIlacListChange}
          />
        )}
        <button className="menu-button" onClick={handleOpenModalIstem}>
          Hizmet İstem Ekle
        </button>
        {isModalOpenIstem && (
          <HizmetIstemEkle
            onClose={handleCloseModalIstem}
            onSelectedItemsChange={handleSelectedIstemListChange}
          />
        )}
        <button
          className="menu-button muayene-kaydet-button"
          onClick={handleMuayeneKaydet}
        >
          Muayene Kaydet
        </button>
      </div>
    </div>
  );
}

export default Anamnez;

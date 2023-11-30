import React, { useEffect } from "react";
import "./Anamnez.css";

import { useState } from "react";
import TaniEkle from "./TaniEkle";
import IlacEkle from "./IlacEkle";
import HizmetIstemEkle from "./HizmetIstemEkle";
import { Konsultasyon } from "./Konsultasyon";
import AmeliyatGiris from "./AmeliyatGiris";
import KlinikSeyir from "./KlinikSeyir";
import TaburcuIstek from "./TaburcuIstek";
import TahlilSonuc from "./TahlilSonuc";
import IsGormezlikRaporu from "./IsGormezlikRaporu";
import IlacRaporu from "./IlacRaporu";
import HastaYatis from "./HastaYatis";

function Anamnez({selectedHasta}) {
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

  const [selectedKonsultasyon, setSelectedKonsultasyon] = useState([]);
  const [selectedAmeliyat, setSelectedAmeliyat] = useState([]);
  const [selectedKlinik, setSelectedKlinik] = useState([]);
  const [selectedTaburcu, setSelectedTaburcu] = useState([]);
  const [selectedRapor, setSelectedRapor] = useState([]);
  const [selectedIlacRapor, setSelectedIlacRapor] = useState([]);
  const [selectedTahlil, setSelectedTahlil] = useState([]);
  const [selectedHastaYatis, setSelectedHastaYatis] = useState([]);

  //Tanı türü Seçimi
  const [selectedTaniTuru, setSelectedTaniTuru] = useState("");

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
    setSelectedTaniList((prevSelectedTaniList) => {
      const newTaniList = [...prevSelectedTaniList];
      selectedItems.forEach((selectedItem) => {
        if (
          !newTaniList.some((tani) => tani.icd10Kodu === selectedItem.icd10Kodu)
        ) {
          newTaniList.push(selectedItem);
        }
      });
      return newTaniList;
    });
  };

  //Tanı Silme
  const removeTani = (index) => {
    const newList = [...selectedTaniList];
    newList.splice(index, 1);
    setSelectedTaniList(newList);
  };

  //Konsültasyon Ekleme Ekranı
  const [isModalOpenKonsultasyon, setModalOpenKonsultasyon] = useState(false);

  const handleOpenModalKonsultasyon = () => {
    setModalOpenKonsultasyon(true);
  };

  const handleCloseModalKonsultasyon = () => {
    setModalOpenKonsultasyon(false);
  };

  const handleSelectedKonsultasyonChange = (selectedItems) => {
    setSelectedKonsultasyon(selectedItems);
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
    setSelectedIlacList((prevSelectedIlacList) => {
      const newIlacList = [...prevSelectedIlacList];
      selectedItems.forEach((selectedItem) => {
        if (!newIlacList.some((ilac) => ilac.barkod === selectedItem.barkod)) {
          newIlacList.push(selectedItem);
        }
      });
      return newIlacList;
    });
  };

  //İlaç Silme
  const removeIlac = (index) => {
    const newList = [...selectedIlacList];
    newList.splice(index, 1);
    setSelectedIlacList(newList);
  };

  //İlacın dozunu yerel depolamaya kaydeden fonksiyon
  const saveDozToLocalStorage = (ilacIndex, dozValue) => {
    const currentIlacList = [...selectedIlacList];
    currentIlacList[ilacIndex].selectedDoz = dozValue;
    setSelectedIlacList(currentIlacList);
    localStorage.setItem("ilacDoz_${ilacIndex}", dozValue);
  };
  //ilacın dozunu yerel depolamadan yükleyen fonksiyon
  const loadDozFromLocalStorage = () => {
    const loadedIlacList = selectedIlacList.map((ilac, index) => {
      const savedDoz = localStorage.getItem("ilacDoz_${index}");
      return { ...ilac, selectedDoz: savedDoz || ilac.selectedDoz };
    });
    setSelectedIlacList(loadedIlacList);
  };

  useEffect(() => {
    loadDozFromLocalStorage();
  }, []);

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
    setSelectedIstemList((prevSelectedIstemList) => {
      const newIstemList = [...prevSelectedIstemList];
      selectedItems.forEach((selectedItem) => {
        if (
          !newIstemList.some(
            (istem) => istem.istemAdi === selectedItem.istemAdi
          )
        ) {
          newIstemList.push(selectedItem);
        }
      });
      return newIstemList;
    });
  };

  //Hizmet-İstem Silme
  const removeIstem = (index) => {
    const newList = [...selectedIstemList];
    newList.splice(index, 1);
    setSelectedIstemList(newList);
  };

  //Ameliyat Giriş Ekleme
  const [isModalOpenAmeliyat, setModalOpenAmeliyat] = useState(false);

  const handleOpenModalAmeliyat = () => {
    setModalOpenAmeliyat(true);
  };
  const handleCloseModalAmeliyat = () => {
    setModalOpenAmeliyat(false);
  };
  const handleSelectedAmeliyatChange = (selectedItems) => {
    setSelectedAmeliyat(selectedItems);
  };

  //Klinik Seyir Ekleme
  const [isModalOpenKlinik, setModalOpenKlinik] = useState(false);

  const handleOpenModalKlinik = () => {
    setModalOpenKlinik(true);
  };
  const handleCloseModalKlinik = () => {
    setModalOpenKlinik(false);
  };
  const handleSelectedKlinikChange = (selectedItems) => {
    setSelectedKlinik(selectedItems);
  };

  // Taburcu İstek Ekleme
  const [isModalOpenTaburcu, setModalOpenTaburcu] = useState(false);

  const handleOpenModalTaburcu = () => {
    setModalOpenTaburcu(true);
  };
  const handleCloseModalTaburcu = () => {
    setModalOpenTaburcu(false);
  };
  const handleSelectedTaburcuChange = (selectedItems) => {
    setSelectedTaburcu(selectedItems);
  };

  //Rapor Ekleme
  const [isModalOpenRapor, setModalOpenRapor] = useState(false);

  const handleOpenModalRapor = () => {
    setModalOpenRapor(true);
  };
  const handleCloseModalRapor = () => {
    setModalOpenRapor(false);
  };
  const handleSelectedRaporChange = (selectedItems) => {
    setSelectedRapor(selectedItems);
  };

  //Ilac Rapor Ekleme
  const [isModalOpenIlacRapor, setModalOpenIlacRapor] = useState(false);

  const handleOpenModalIlacRapor = () => {
    setModalOpenIlacRapor(true);
  };
  const handleCloseModalIlacRapor = () => {
    setModalOpenIlacRapor(false);
  };
  const handleSelectedIlacRaporChange = (selectedItems) => {
    setSelectedIlacRapor(selectedItems);
  };
    
  //Tahlil Sonuç Ekleme
  const [isModalOpenTahlil, setModalOpenTahlil] = useState(false);

  const handleOpenModalTahlil = () => {
    setModalOpenTahlil(true);
  };
  const handleCloseModalTahlil = () => {
    setModalOpenTahlil(false);
  };
  const handleSelectedTahlilChange = (selectedItems) => {
    setSelectedTahlil(selectedItems);
  };

  //Hasta Yatış Ekleme
  const [isModalOpenHastaYatis, setModalOpenHastaYatis] = useState(false);

  const handleOpenModalHastaYatis = () => {
    setModalOpenHastaYatis(true);
  };
  const handleCloseModalHastaYatis = () => {
    setModalOpenHastaYatis(false);
  };
  const handleSelectedHastaChange = (selectedItems) => {
    setSelectedHastaYatis(selectedItems);
  };


  //Doz ekleme
  //const [doz, setDoz] = useState("");

  //yerel depolama alanından doktor seçimlerini yükleme
  useEffect(() => {
    const storedSikayetDoktor = localStorage.getItem("selectedSikayetDoktor");
    const storedHikayeDoktor = localStorage.getItem("selectedHikayeDoktor");
    const storedOzgecmisDoktor = localStorage.getItem("selectedOzgecmisDoktor");
    const storedSoygecmisDoktor = localStorage.getItem(
      "selectedSoygecmisDoktor"
    );

    if (storedSikayetDoktor) {
      setSelectedSikayetDoktor(storedSikayetDoktor);
    }
    if (storedHikayeDoktor) {
      setSelectedHikayeDoktor(storedHikayeDoktor);
    }
    if (storedOzgecmisDoktor) {
      setSelectedOzgecmisDoktor(storedOzgecmisDoktor);
    }
    if (storedSoygecmisDoktor) {
      setSelectedSoygecmisDoktor(storedSoygecmisDoktor);
    }
  }, []);

  //Doktor seçimini yerel depolamaya kaydeder
  useEffect(() => {
    localStorage.setItem("selectedSikayetDoktor", selectedSikayetDoktor);
  }, [selectedSikayetDoktor]);

  useEffect(() => {
    localStorage.setItem("selectedHikayeDoktor", selectedHikayeDoktor);
  }, [selectedHikayeDoktor]);

  useEffect(() => {
    localStorage.setItem("selectedOzgecmisDoktor", selectedOzgecmisDoktor);
  }, [selectedOzgecmisDoktor]);

  useEffect(() => {
    localStorage.setItem("selectedSoygecmisDoktor", selectedSoygecmisDoktor);
  }, [selectedSoygecmisDoktor]);

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
            // taniList: selectedTaniList.map((tani) => ({
            //   id: tani.id,
            //   icd10Kodu: tani.icd10Kodu,
            //   taniAdi: tani.taniAdi,
            // })),
            taniList: selectedTaniList,
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

  //TabStrip
  const [activeTab, setActiveTab] = useState("tani");

  const tabs = [
    {
      name: "tani",
      title: "Tanı",
      content: (
        <div className="tani-ekle">
          {/* <label htmlFor="tani">Tanı: </label> */}

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
          <div className="alt-menu">
            <button
              className="menu-button"
              style={{ marginBottom: "10px" }}
              onClick={handleOpenModalTani}
            >
              Tanı
              <br /> Ekle
            </button>
            {isModalOpenTani && (
              <TaniEkle
                onClose={handleCloseModalTani}
                onSelectedItemsChange={handleSelectedTaniListChange}
              />
            )}
            <br />
            <select
              name="tani-turu"
              id="tani-turu"
              value={selectedTaniTuru}
              onChange={(e) => setSelectedTaniTuru(e.target.value)}
            >
              <option value="tani1">Ön Tanı</option>
              <option value="tani2">Kesin Tanı</option>
            </select>
          </div>
        </div>
      ),
    },
    {
      name: "ilac",
      title: "İlaç",
      content: (
        <div className="ilac-ekle">
          {/* <label htmlFor="ilac">İlaç: </label> */}

          <table className="ilacekle-table">
            <thead>
              <tr>
                <th className="ilac-doz-yeni">Doz</th>
                <th className="ilac-kodu-yeni">İlaç Kodu</th>
                <th className="ilac-adi-yeni">İlaç Adı</th>
                <th className="doz-sil"></th>
              </tr>
            </thead>
            <tbody>
              {selectedIlacList.map((ilac, index) => (
                <tr key={index}>
                  {/* <td className="ilac-doz-content-yeni">{ilac.doz}</td> */}
                  <td className="ilac-doz-content-yeni">
                    <select
                      name="doz"
                      id="doz"
                      value={ilac.selectedDoz || "doz1"}
                      onChange={(e) =>
                        saveDozToLocalStorage(index, e.target.value)
                      }
                    >
                      <option value="doz1">1x1</option>
                      <option value="doz2">1x2</option>
                      <option value="doz3">1x3</option>
                    </select>
                  </td>
                  <td className="ilac-kodu-content-yeni">{ilac.barkod}</td>
                  <td className="ilac-content-yeni">{ilac.ilacAdi}</td>
                  <td className="sil-buton">
                    <button onClick={() => removeIlac(index)}>Sil</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="alt-menu">
            <button
              // style={{ marginLeft: "15px" }}
              className="menu-button"
              onClick={handleOpenModalIlac}
            >
              İlaç
              <br /> Ekle
            </button>
            {isModalOpenIlac && (
              <IlacEkle
                onClose={handleCloseModalIlac}
                onSelectedItemsChange={handleSelectedIlacListChange}
              />
            )}
          </div>
        </div>
      ),
    },
    {
      name: "istem",
      title: "Hizmet - İstem",
      content: (
        <div className="istem-ekle">
          <div className="istem-ekle">
            {/* <label htmlFor="istem">İstem:</label> */}
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
            <div className="alt-menu">
              <button
                // style={{ marginLeft: "15px" }}
                className="menu-button"
                onClick={handleOpenModalIstem}
              >
                Hizmet İstem Ekle
              </button>
              {isModalOpenIstem && (
                <HizmetIstemEkle
                  onClose={handleCloseModalIstem}
                  onSelectedItemsChange={handleSelectedIstemListChange}
                />
              )}
            </div>
          </div>
        </div>
      ),
    },
  ];

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
              <label htmlFor="hikaye">Hikaye:</label>
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
      <div
        style={{
          borderBottom: "1px dotted #1976d2",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      ></div>
      <div className="alt-menu-tab">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={activeTab === tab.name ? "active" : ""}
            // className={`menu-button ${activeTab === tab.name ? "active" : ""}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name} className="tab-panel">
                {tab.content}
              </div>
            )
        )}
      </div>

      <div className="alt-menu">
        {/* <button className="menu-button" onClick={handleOpenModalTani}>
          Tanı
          <br /> Ekle
        </button> */}
        {isModalOpenTani && (
          <TaniEkle
            onClose={handleCloseModalTani}
            onSelectedItemsChange={handleSelectedTaniListChange}
          />
        )}

        {/* <button className="menu-button" onClick={handleOpenModalIlac}>
          İlaç
          <br /> Ekle
        </button> */}
        {isModalOpenIlac && (
          <IlacEkle
            onClose={handleCloseModalIlac}
            onSelectedItemsChange={handleSelectedIlacListChange}
          />
        )}
        {/* <button className="menu-button" onClick={handleOpenModalIstem}>
          Hizmet İstem Ekle
        </button> */}
        {isModalOpenIstem && (
          <HizmetIstemEkle
            onClose={handleCloseModalIstem}
            onSelectedItemsChange={handleSelectedIstemListChange}
          />
        )}
        <button className="menu-button" onClick={handleOpenModalKonsultasyon}>
          Konsültasyon Ekle
        </button>
        {isModalOpenKonsultasyon && (
          <Konsultasyon
            onClose={handleCloseModalKonsultasyon}
            onSelectedItemsChange={handleSelectedKonsultasyonChange}
          />
        )}
        <button className="menu-button" onClick={handleOpenModalAmeliyat}>
          Ameliyat <br /> Giriş
        </button>
        {isModalOpenAmeliyat && (
          <AmeliyatGiris
            onClose={handleCloseModalAmeliyat}
            onSelectedItemsChange={handleSelectedAmeliyatChange}
          />
        )}
        <button className="menu-button" onClick={handleOpenModalKlinik}>
          Klinik <br /> Seyir
        </button>
        {isModalOpenKlinik && (
          <KlinikSeyir
            onClose={handleCloseModalKlinik}
            onSelectedItemsChange={handleSelectedKlinikChange}
          />
        )}
        <button className="menu-button" onClick={handleOpenModalTaburcu}>
          Taburcu <br /> İstek
        </button>
        {isModalOpenTaburcu && (
          <TaburcuIstek
            selectedHasta= {selectedHasta}  //eklenen kısım
            onClose={handleCloseModalTaburcu}
            onSelectedItemsChange={handleSelectedTaburcuChange}
          />
        )}
        <button className="menu-button" onClick={handleOpenModalRapor}>
          İş Görmezlik <br />Raporu Ekle
        </button>
        {isModalOpenRapor && (
          <IsGormezlikRaporu
            onClose={handleCloseModalRapor}
            onSelectedItemsChange={handleSelectedRaporChange}
          />
        )}
        <button className="menu-button" onClick={handleOpenModalIlacRapor}>
          İlaç Rapor <br/> Hazırlama
        </button>
        {isModalOpenIlacRapor && (
          <IlacRaporu 
            onClose={handleCloseModalIlacRapor}
            onSelectedItemsChange={handleSelectedIlacRaporChange}
          />
        )}
        <button className="menu-button" onClick={handleOpenModalTahlil}>
          Tahlil <br /> Sonuç
        </button>
        {isModalOpenTahlil && (
          <TahlilSonuc
            onClose={handleCloseModalTahlil}
            onSelectedItemsChange={handleSelectedTahlilChange}
          />
        )}
        <button className="menu-button" onClick={handleOpenModalHastaYatis}>
          Hasta <br/> Yatış
        </button>
        {isModalOpenHastaYatis && (
          <HastaYatis 
            onClose={handleCloseModalHastaYatis}
            onSelectedItemsChange={handleSelectedHastaChange}
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

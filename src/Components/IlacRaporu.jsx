import React from "react";
import "./IlacRaporu.css";
import { useState } from "react";
import TaniEkle from "./TaniEkle";

const IlacRaporu = ({ onClose }) => {
  const [selectedTaniList, setSelectedTaniList] = useState([]);
  const [selectedDoktorList, setSelectedDoktorList] = useState([]);

  const [isModalOpenTani, setModalOpenTani] = useState("");
  const [isModalOpenDoktor, setModalOpenDoktor] = useState("");

  const handleOpenModalTani = () => {
    setModalOpenTani(true);
  };

  const handleCloseModalTani = () => {
    setModalOpenTani(false);
  };

  const handleOpenModalDoktor = () => {
    setModalOpenDoktor(true);
  };
  const handleCloseModalDoktor = () => {
    setModalOpenDoktor(false);
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

  const handleSelectedDoktorListChange = (selectedItems) => {
    setSelectedDoktorList((prevSelectedDoktorList) => {
      const newDoktorList = [...prevSelectedDoktorList];
      selectedItems.forEach((selectedItem) => {
        if (
          !newDoktorList.some((doktor) => doktor.drAdi === selectedItem.drAdi)
        ) {
          newDoktorList.push(selectedItem);
        }
      });
      return newDoktorList;
    });
  };


  const removeTani = (index) => {
    const newList = [...selectedTaniList];
    newList.splice(index, 1);
    setSelectedTaniList(newList);
  };

  return (
    <div className="main-ilac-raporu">
      <div className="baslik">İlaç Raporu</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="ilac-raporu">
        <div className="hasta-bilgileri-ilac-raporu">
          <h4>Ali Cebecioğlu 22/05/1989</h4>
        </div>
        <div className="form-ilac-raporu-tarih">
          <div className="ilac-rapor-tarihi">
            <label htmlFor="rapor-tarihi">Rapor Tarihi:</label>
            <input type="date" />
          </div>
          <div className="ilac-rapor-protokol-no">
            <label htmlFor="protokol-no">Protokol No:</label>
            <input type="text" />
          </div>
          <div className="ilac-rapor-sayac-no">
            <label htmlFor="sayac-no">Sayaç No:</label>
            <input type="text" />
          </div>
          <div className="ilac-rapor-duzenleme-turu">
            <label htmlFor="duzenleme-turu">Düzenleme Türü:</label>
            <select name="duzenleme-turu" id="duzenleme-turu">
              <option value="tek-hekim">Tek Hekim</option>
              <option value="heyet">Heyet</option>
            </select>
          </div>
        </div>
        <div className="form-ilac-rapor-baslik">
          <div className="rapor-basligi">
            <label htmlFor="rapor-basligi">Rapor Başlığı:</label>
            <input type="text" />
          </div>
          <div className="rapor-isteyen-doktor">
            <label htmlFor="isteyen-doktor">İsteyen Doktor:</label>
            <select name="isteyen-doktor" id="isteyen-doktor">
              <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
              <option value="doktor2">Dr. Betül Öztürk</option>
              <option value="doktor3">Dr. Erman Kavlu</option>
              <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
              <option value="doktor5">Doç.Dr. Hakan Demirel</option>
            </select>
          </div>
        </div>
        <div className="rapor-girisleri">
          <div className="ilac-rapor-tanilari">
            <label htmlFor="rapor-tanilari">Rapor Tanıları</label>
            <button onClick={handleOpenModalTani}>Tanı Ekle</button>
            {isModalOpenTani && (
              <TaniEkle onClose={handleCloseModalTani}
              onSelectedItemsChange={handleSelectedTaniListChange}/>
            )}
            
          </div>
          <div className="ilac-rapor-doktorlari">
            <label htmlFor="rapor-doktorlari">Rapor Doktorları</label>
            <button>Doktor Ekle</button>
          </div>
        </div>
        {/* className="tani-ekle" */}
        <div>
          {/* className="taniekle-table" */}
          <table style={{width:"45%"}}>
            <thead>
              <tr>
                {/* className="icd-kodu" className="tani-adi" */}
                <th >ICD10 Kodu</th>
                <th >Tanı Adı</th>
              </tr>
            </thead>
            <tbody>
              {selectedTaniList.map((tani, index) => (
                <tr key={index}>
                  {/* className="icd-kodu" className="tani-adi" className="sil-buton" */}
                  <td>{tani.icd10Kodu}</td>
                  <td>{tani.taniAdi}</td>
                  <td >
                    <button onClick={() => removeTani(index)}>Sil</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IlacRaporu;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HizmetIstemEkle.css";

function HizmetIstemEkle({ onSelectedItemsChange, onClose }) {
  const [istemList, setIstemList] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const fetchIstemList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/hizmet-istem-bilgisi"
        );
        setIstemList(response.data);
      } catch (error) {
        console.error("Veri alınamadı:", error);
      }
    };
    fetchIstemList();
  }, []);

  const handleCheckboxChange = (istem) => {
    if (selectedOptions.some((option) => option.id === istem.id)) {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option.id === istem.id)
      );
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, istem]);
    }
  };

  const handleAddOption = () => {
    onSelectedItemsChange(selectedOptions);
    setSelectedOptions([]);
    onClose();
  }

  return (
    <div className="istem-ekle-modal">
      <h2>Hizmet - İstem Listesi</h2>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="scrollable-liste">
        <table>
          <thead>
            <tr>
              <th className="sec-baslik">Seç</th>
              <th className="kod-baslik">Hizmet Kodu</th>
              <th className="istem-baslik">İstem Adı</th>
            </tr>
          </thead>
          <tbody>
            {istemList.map((istem) => (
              <tr key={istem.id}>
                <td className="chec-content">
                  <input
                    type="checkbox"
                    value={istem.istemAdi}
                    onChange={() => handleCheckboxChange(istem)}
                  />
                </td>
                <td className="kod-content">{istem.hizmetKodu}</td>
                <td className="istem-content">{istem.istemAdi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-button" onClick={handleAddOption}>Ekle</button>
    </div>
  );
}

export default HizmetIstemEkle;

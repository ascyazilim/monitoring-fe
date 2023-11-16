import React, { useEffect, useState } from "react";
import "./TaniEkle.css";
import axios from "axios";

function TaniEkle({ onSelectedItemsChange, onClose }) {
  const [taniList, setTaniList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const fetchIstemList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/tani-list");
        setTaniList(response.data);
      } catch (error) {
        console.error("Veri alınamadı:", error);
      }
    };
    fetchIstemList();
  }, []);

  const handleCheckboxChange = (tani) => {
    if (selectedOptions.some((option) => option.id === tani.id)) {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option.id === tani.id)
      );
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, tani]);
    }
  };
  const handleAddOption = () => {
    onSelectedItemsChange(selectedOptions);
    setSelectedOptions([]);
    onClose();
  };

  return (
    <div className="tani-ekle-modal">
      <h2>Tanı Listesi</h2>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="scrollable-liste">
        <table>
          <thead>
            <tr>
              <th className="sec-baslik">Seç</th>
              <th className="icd-baslik">ICD10 Kodu</th>
              <th className="tani-baslik">Tanı Adı</th>
            </tr>
          </thead>
          <tbody>
            {taniList.map((tani) => (
              <tr key={tani.id}>
                <td className="chec-content">
                  <input
                    type="checkbox"
                    value={tani.taniAdi}
                    onChange={() => handleCheckboxChange(tani)}
                  />
                </td>
                <td className="icd-content">{tani.icd10Kodu}</td>
                <td className="tani-content">{tani.taniAdi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-button" onClick={handleAddOption}>
        Ekle
      </button>
    </div>
  );
}

export default TaniEkle;

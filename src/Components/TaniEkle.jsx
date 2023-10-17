import React, { useEffect, useState } from "react";
import "./TaniEkle.css";
import axios from "axios";

function TaniEkle({ onSelectedItemsChange, onClose }) {
  const [taniList, setTaniList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const fetchTaniListesi = async () => {
      try {
        const response = await axios.get("http://localhost:8080/tani-list");
        setTaniList(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Veri alınamadı: ", error);
      }
    };
    fetchTaniListesi();
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
    const selectedTaniNames = selectedOptions.map(
      (option) => `${option.icd10Kodu} - ${option.taniAdi}`
    );
    onSelectedItemsChange(selectedTaniNames);
    setSelectedOptions([]);
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
              {/* <th>Seç</th> */}
              <th>ICD10 Kodu</th>
              <th>Tanı Adı</th>
            </tr>
          </thead>
          <tbody>
            {taniList.map((tani) => (
              <tr key={tani.id}>
                <td>
                  <input
                    type="checkbox"
                    value={tani.taniAdi}
                    onChange={() => handleCheckboxChange(tani)}
                  />
                </td>
                <td>{tani.icd10Kodu}</td>
                <td>{tani.taniAdi}</td>
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

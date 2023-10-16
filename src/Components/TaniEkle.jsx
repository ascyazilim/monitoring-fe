import React, { useEffect, useState } from "react";
import "./TaniEkle.css";
import axios from "axios";

function TaniEkle({ addToTable, onSelectedItemsChange, onClose }) {
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
        {taniList.map((tani) => (
          <label key={tani.id} className="checkbox-item">
            <input
              type="checkbox"
              name="option"
              value={tani.taniAdi}
              className="checkbox-input"
              onChange={() => handleCheckboxChange(tani)}
            />
            {`${tani.icd10Kodu} - ${tani.taniAdi}`}
          </label>
        ))}
      </div>
      <button className="add-button" onClick={handleAddOption}>
        Ekle
      </button>
    </div>
  );
}

export default TaniEkle;

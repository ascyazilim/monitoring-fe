import React, { useEffect, useState } from "react";
import "./IlacEkle.css";
import axios from "axios";

function IlacEkle({ onSelectedItemsChange, onClose }) {
  const [ilacList, setIlacList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  //   useEffect(() => {
  //     const fetchIlacListesi = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:8080/ilac-list");
  //         setIlacList(response.data);
  //         setLoading(false);
  //       } catch (error) {
  //         console.error("Veri alınamadı: ", error);
  //       }
  //     };
  //     fetchIlacListesi();
  //   }, []);
  useEffect(() => {
    const fetchIlacList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/ilac-list");
        setIlacList(response.data);
      } catch (error) {
        console.error("Veri alınamadı:", error);
      }
    };
    fetchIlacList();
  }, []);

  const handleCheckboxChange = (ilac) => {
    if (selectedOptions.some((option) => option.id === ilac.id)) {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option.id === ilac.id)
      );
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, ilac]);
    }
  };

  const handleAddOption = () => {
    const selectedIlacNames = selectedOptions.map(
      (option) => `${option.ilacAdi} - ${option.doz}`
    );
    onSelectedItemsChange(selectedIlacNames);
    setSelectedOptions([]);
  };

  return (
    <div className="ilac-ekle-modal">
      <h2>İlaç Listesi</h2>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="scrollable-liste">
        {ilacList.map((ilac) => (
          <label key={ilac.id} className="checkbox-item">
            <input
              type="checkbox"
              name="option"
              value={ilac.ilacAdi}
              className="checkbox-input"
              onChange={() => handleCheckboxChange(ilac)}
            />
            {`${ilac.ilacAdi} - ${ilac.doz}`}
          </label>
        ))}
      </div>
      <button className="add-button" onClick={handleAddOption}>
        Ekle
      </button>
    </div>
  );
}

export default IlacEkle;

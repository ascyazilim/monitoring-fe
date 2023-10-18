import React, { useEffect, useState } from "react";
import "./IlacEkle.css";
import axios from "axios";

function IlacEkle({ onSelectedItemsChange, onClose }) {
  const [ilacList, setIlacList] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);


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
    onClose();
  };

  return (
    <div className="ilac-ekle-modal">
      <h2>İlaç Listesi</h2>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="scrollable-liste">
        <table>
          <thead>
            <tr>
              <th>Seç</th>
              <th>İlaç Adı</th>
              <th>Doz</th>
            </tr>
          </thead>
          <tbody>
            {ilacList.map((ilac) => (
              <tr key={ilac.id}>
                <td>
                  <input
                    type="checkbox"
                    value={ilac.ilacAdi}
                    onChange={() => handleCheckboxChange(ilac)}
                  />
                </td>
                <td>{ilac.ilacAdi}</td>
                <td>{ilac.doz}</td>
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

export default IlacEkle;

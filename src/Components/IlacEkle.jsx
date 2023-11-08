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
    onSelectedItemsChange(selectedOptions);
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
              <th className="sec-baslik">Seç</th>
              <th className="ilac-kodu-baslik">İlaç Kodu</th>
              <th className="ilac-baslik">İlaç Adı</th>
              {/* <th className="doz-baslik">Doz</th> */}
            </tr>
          </thead>
          <tbody>
            {ilacList.map((ilac) => (
              <tr key={ilac.id}>
                <td className="chec-content">
                  <input
                    type="checkbox"
                    value={ilac.ilacAdi}
                    onChange={() => handleCheckboxChange(ilac)}
                  />
                </td>
                <td className="ilac-kodu-content">{ilac.barkod}</td>
                <td className="ilac-content">{ilac.ilacAdi}</td>
                {/* <td className="doz-content">
                  <select name="doz" id="doz">
                    <option value="doz1">1x1</option>
                    <option value="doz2">2x1</option>
                    <option value="doz3">3x1</option>
                  </select>
                </td> */}
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

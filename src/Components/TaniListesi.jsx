import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Button } from "@mui/material";
import "./TaniList.css";

const TaniListesi = ({ addToTable, onSelectedItemsChange }) => {
  const [taniList, setTaniList] = useState([]);
  const [loading, setLoading] = useState(true);
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
    if (selectedOptions.some(option => option.id === tani.id)) {
      setSelectedOptions(prevOptions => prevOptions.filter(option => option.id !== tani.id));
    } else {
      setSelectedOptions(prevOptions => [...prevOptions, tani]);
    }
  };

  const handleAddOption = () => {
    const selectedTaniNames = selectedOptions.map(option => `${option.icd10Kodu} - ${option.taniAdi}`);
    onSelectedItemsChange(selectedTaniNames);
    setSelectedOptions([]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 400,
        width: 620,
      }}
    >
      <h2 style={{ marginLeft: "135px" }}>Tanı Listesi</h2>
      <div className="checkbox-container">
        <div className="scrollable-container">
          {taniList.map((tani) => (
            <label key={tani.id} className="checkbox-item">
              <input
                type="checkbox"
                name="option"
                value={tani.taniAdi}
                checked={selectedOptions.some(option => option.id === tani.id)}
                onChange={() => handleCheckboxChange(tani)}
                className="checkbox-input"
              />
              {`${tani.icd10Kodu} - ${tani.taniAdi}`}
            </label>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "10px", marginTop: "5px" }}>
          <Button variant="contained" color="primary" onClick={handleAddOption}>Ekle</Button>
        </div>
      </div>
    </div>
  );
};

export default TaniListesi;

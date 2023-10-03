import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import "./Card.css";
import { Button } from "@mui/material";
import "./TaniList.css";

const TaniListesi = ({addToTable, onSelectedItemsChange}) => {
  const [taniList, setTaniList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  const [isModalOpen, setIsModalopen] = useState(false);

  const [selectedTaniList, setSelectedTaniList] = useState([]);


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


  const handleAddOption = () => {
    if (selectedOption.trim() !== '') {
      addToTable(selectedOption);

      onSelectedItemsChange([...selectedTaniList, selectedOption]);
      setSelectedOption("");
      setIsModalopen(false);
    }
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
      <h2 style={{marginLeft: "135px"}}>Tanı Listesi</h2>
      <div className="checkbox-container">
        <div className="scrollable-container">
          {taniList.map((tani) => (
            <label key={tani.id} className="checkbox-item">
              <input
                type="checkbox"
                name="option"
                value={tani.taniAdi}
                checked={selectedOption === tani.taniAdi}
                onChange={() => setSelectedOption(tani.taniAdi)}
                className="checkbox-input"
              />
              {tani.taniAdi}
            </label>
          ))}
        </div>
        <div style={{display: "flex", justifyContent:"flex-end", marginRight:"10px", marginTop:"5px"}}>
        <Button variant="contained" color="primary" onClick={handleAddOption}>Ekle</Button>
      </div>
      </div>
      
      
    </div>
  );
};

export default TaniListesi;




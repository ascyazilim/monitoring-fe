import React, { useState, useEffect } from "react";
import { Card, Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Card.css";
import "./TaniList.css";

const IlacListesi = ({ addToTableIlac, onSelectedItemsChange }) => {
  const [ilacList, setIlacList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedIlacList, setSelectedIlacList] = useState([]);

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

  const handleAddOption = () => {
    if (selectedOption.trim() !== "") {
      addToTableIlac(selectedOption);

      onSelectedItemsChange([...selectedIlacList, selectedOption]);
      setSelectedOption("");
      setIsModalOpen(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 400,
        width: 600,
      }}
    >
      <h2 style={{marginLeft:"80px"}}>İlaç Listesi</h2>
      <div className="checkbox-container" style={{width:"300px"}}>
        <div className="scrollable-container">
          {ilacList.map((ilac) => (
            <label key={ilac.id} className="checkbox-item">
              <input
                type="checkbox"
                name="option"
                value={ilac.ilacAdi}
                checked={selectedOption === ilac.ilacAdi}
                onChange={() => setSelectedOption(ilac.ilacAdi)}
                className="checkbox-input"
              />
              {ilac.ilacAdi}
            </label>
          ))}
        </div>
        <div
          // style={{
          //   display: "flex",
          //   justifyContent: "flex-end",
          //   marginRight: "10px",
          //   marginTop: "5px",
          // }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddOption}
            style={{ margin: "20px auto", display: "block" }}
          >
            Ekle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IlacListesi;

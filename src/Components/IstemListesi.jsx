import React, { useEffect, useState } from "react";
import "./TaniList.css";
import axios from "axios";
import "./Card.css";
import { Button } from "@mui/material";

const IstemListesi = ({ addToTableIstem, onSelectedItemsChange }) => {
  const [istemList, setIstemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedIstemList, setSelectedIstemList] = useState([]);

  useEffect(() => {
    const fetchIstemListesi = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/hizmet-istem-bilgisi"
        );
        setIstemList(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Veri Alınamadı: ", error);
      }
    };
    fetchIstemListesi();
  }, []);

  const handleAddOption = () => {
    if (selectedOption.trim() !== "") {
      addToTableIstem(selectedOption);

      onSelectedItemsChange([...selectedIstemList, selectedOption]);
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
        width: 620,
      }}
    >
      <h2 style={{marginLeft:"80px"}}>Hizmet - İstem Listesi</h2>
      <div className="checkbox-container">
        <div className="scrollable-container">
          {istemList.map((istem) => (
            <label key={istem.id} className="checkbox-item">
              <input
                type="checkbox"
                name="option"
                value={istem.istemAdi}
                checked={selectedOption === istem.istemAdi}
                onChange={() => setSelectedOption(istem.istemAdi)}
                className="checkbox-input"
              />
              {istem.istemAdi}
            </label>
          ))}
        </div>
        <div>
          <Button
            style={{ margin: "20px auto", display: "block" }}
            variant="contained"
            color="primary"
            onClick={handleAddOption}
          >
            Ekle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IstemListesi;

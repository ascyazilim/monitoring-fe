import React, { useEffect, useState } from "react";
import "./TaniList.css";
import axios from "axios";
import "./Card.css";
import { Button } from "@mui/material";

const IstemListesi = ({ addToTableIstem, onSelectedItemsChange }) => {
  const [istemList, setIstemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
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

  const handleOptionChange = (option) => {
    const index = selectedOptions.indexOf(option);
    if (index === -1) {
      // Eğer seçili değilse, ekleyin
      setSelectedOptions([...selectedOptions, option]);
    } else {
      // Eğer seçili ise, kaldırın
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }
  };

  const handleAddOption = () => {
    if (selectedOptions.length > 0) {
      addToTableIstem(selectedOptions);

      onSelectedItemsChange([...selectedIstemList, ...selectedOptions]);
      setSelectedOptions([]);
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
      <h2 style={{ marginLeft: "80px" }}>Hizmet - İstem Listesi</h2>
      <div className="checkbox-container">
        <div className="scrollable-container">
          {istemList.map((istem) => (
            <label key={istem.id} className="checkbox-item">
              <input
                type="checkbox"
                name="option"
                value={istem.istemAdi}
                checked={selectedOptions.includes(istem.istemAdi)}
                onChange={() => handleOptionChange(istem.istemAdi)}
                className="checkbox-input"
              />
              {`${istem.hizmetKodu} - ${istem.istemAdi}`}
              
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
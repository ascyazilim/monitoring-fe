import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
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
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 350,
          width: 500,
        }}
      >
        <h2 style={{ marginLeft: "80px" }}>İlaç Listesi</h2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Seç</TableCell>
                <TableCell>İlac Adı</TableCell>
                <TableCell>Doz</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ilacList.map((ilac) => (
                <TableRow key={ilac.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      name="option"
                      value={ilac.ilacAdi}
                      checked={selectedOption === ilac.ilacAdi}
                      onChange={() => setSelectedOption(ilac.ilacAdi)}
                    />
                  </TableCell>
                  <TableCell>{ilac.ilacAdi}</TableCell>
                  <TableCell>{ilac.doz}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
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

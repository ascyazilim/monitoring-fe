import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "@mui/material";
import { Link } from "react-router-dom";

function DoktorBilgisi() {
  const [doktorBilgisi, setDoktorBilgisi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/doktor-bilgisi"
        );
        setDoktorBilgisi(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Card>
        <h2>Doktor Bilgisi Listesi</h2>
        <div>
          {doktorBilgisi.map((doktor) => (
            <Card key={doktor.id} style={{ margin: "10px", padding: "10px" }}>
              <div>ID: {doktor.id}</div>
              <div>Dr Adı: {doktor.drAdi}</div>
              <div>Dr Soyadı: {doktor.drSoyadi}</div>
              <Link to={`/doktor-detay/${doktor.id}`}>
                <Button variant="contained" color="primary">
                  Detayları Görüntüle
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default DoktorBilgisi;
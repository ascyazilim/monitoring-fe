import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "@mui/material";
import { Link } from "react-router-dom";

function MuayeneBilgisi() {
  const [muayeneListesi, setMuayeneListesi] = useState([]);

  useEffect(() => {
    // Verilerin alınacağı API endpointini düzenleyin
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/muayene-bilgisi"
        );
        setMuayeneListesi(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Card>
        <h2>Muayene Bilgisi Listesi</h2>
        <div>
          {muayeneListesi.map((muayene) => (
            <Card key={muayene.id} style={{ margin: "10px", padding: "10px" }}>
              <div>ID: {muayene.id}</div>
              <div>İşlem Sıra No: {muayene.islemSiraNo}</div>
              <Link to={`/muayene-detay/${muayene.id}`}>
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

export default MuayeneBilgisi;

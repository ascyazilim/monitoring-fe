import { Button, Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./Card.css";

function DoktorBilgisiDetay() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [doktorDetay, setDoktorDetay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/doktor-bilgisi/${id}`
        );
        setDoktorDetay(response.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, [id]);

  if (!doktorDetay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainDiv">
      <Card className="mainCard">
        <h2 className="mainCardH2">Doktor Bilgisi Detay</h2>

        <div>ID: {doktorDetay.id}</div>
        <div>Dr Tescil No: {doktorDetay.drTescilNo}</div>
        <div>Dr Adı: {doktorDetay.drAdi}</div>
        <div>Dr Soyadı: {doktorDetay.drSoyadi}</div>
        <div>Dr Branş Kodu: {doktorDetay.drBransKodu}</div>
        <div>Tipi: {doktorDetay.tipi}</div>
        <div className="backButton">
          <Button
            
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
          >
            Geri
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default DoktorBilgisiDetay;

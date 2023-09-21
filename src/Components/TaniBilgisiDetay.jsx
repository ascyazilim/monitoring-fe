import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
//import { Card, Button } from "react-bootstrap";
import { Card, Button } from "@mui/material";
import "./Card.css";

function TaniBilgisiDetay() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [taniDetay, setTaniDetay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/tani-bilgisi/${id}`
        );
        setTaniDetay(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!taniDetay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainDiv">
      <Card className="mainCard">
        <h2 className="mainCardH2">Tanı Detay</h2>
        <div>ID: {taniDetay.id}</div>
        <div>İşlem Sıra No: {taniDetay.islemSiraNo}</div>
        <div>Birincil Tanı: {taniDetay.birincilTani}</div>
        <div>Hizmet Sunucu RefNo: {taniDetay.hizmetSunucuRefNo}</div>
        <div>Tanı Kodu: {taniDetay.taniKodu}</div>
        <div>Tanı Tipi: {taniDetay.taniTipi}</div>
        <div>Özel Durum: {taniDetay.ozelDurum}</div>

        <div className="backButton">
          <Button
            className="backButton"
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

export default TaniBilgisiDetay;

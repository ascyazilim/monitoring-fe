import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
//import { Card } from "react-bootstrap";
import { Card, Button } from "@mui/material";

function MuayeneBilgisiDetay() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [muayeneDetay, setMuayeneDetay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/muayene-bilgisi/${id}`
        );
        setMuayeneDetay(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!muayeneDetay) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Card style={{ margin: "10px", padding: "10px" }}>
        <h2>Muayene Detayı</h2>

        <div>ID: {muayeneDetay.id}</div>
        <div>Branş Kodu: {muayeneDetay.bransKodu}</div>
        <div>Dr. Tescil No: {muayeneDetay.drTescilNo}</div>
        <div>SUT kodu: {muayeneDetay.sutKodu}</div>
        <div>Hizmet Sunucu Ref No: {muayeneDetay.hizmetSunucuRefNo}</div>
        <div>İşlem Sıra No: {muayeneDetay.islemSiraNo}</div>
        <div>Muayene Tarihi: {muayeneDetay.muayeneTarihi}</div>
        <div>Özel Durum: {muayeneDetay.ozelDurum}</div>
        <div>
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

export default MuayeneBilgisiDetay;
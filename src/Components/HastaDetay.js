import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
//import { Card, Button } from "react-bootstrap";
import { Card, Button } from "@mui/material";
import { padding } from "@mui/system";
import "./Card.css";

function HastaDetay() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [hastaDetay, setHastaDetay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/hasta/${id}`);
        setHastaDetay(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!hastaDetay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainDiv">
      <Card className="mainCard">
        <h2 className="mainCardH2">
          {hastaDetay.ad} {hastaDetay.soyad}
        </h2>
        <div>
          <span className="detaySpan">ID:</span> {hastaDetay.id}
        </div>
        <div>
          <span className="detaySpan">TcKimlikNo:</span> {hastaDetay.tcKimNo}
        </div>
        <div>
          <span className="detaySpan">Ad:</span> {hastaDetay.ad}
        </div>
        <div>
          <span className="detaySpan">SoyAd:</span> {hastaDetay.soyad}
        </div>
        <div>
          <span className="detaySpan">Cinsiyet:</span> {hastaDetay.cinsiyet}
        </div>
        <div>
          <span className="detaySpan">Doğum Tarihi:</span> {hastaDetay.dogumTarihi}
        </div>
        <div>
          <span className="detaySpan">Sigortalı Türü:</span> {hastaDetay.sigortaliTuru}
        </div>
        <div>
          <span className="detaySpan">Devredilen Kurum:</span> {hastaDetay.devredilenKurum}
        </div>
        <div>
          <span className="detaySpan">Katılım Payından Muaf:</span> {hastaDetay.katilimPayindanMuaf}
        </div>
        <div>
          <span className="detaySpan">Kapsam Adı:</span> {hastaDetay.kapsamAdi}
        </div>
        <div>
          <span className="detaySpan">İlave Ücretten Muaf:</span> {hastaDetay.ilaveUcrettenMuaf}
        </div>

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

export default HastaDetay;

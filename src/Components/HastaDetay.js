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
        <h2 className="mainCardH2">{hastaDetay.ad} {hastaDetay.soyad}</h2>
        <div>ID: {hastaDetay.id}</div>
        <div>TcKimlikNo: {hastaDetay.tcKimNo}</div>
        <div>Ad: {hastaDetay.ad}</div>
        <div>SoyAd: {hastaDetay.soyad}</div>
        <div>Cinsiyet: {hastaDetay.cinsiyet}</div>
        <div>Doğum Tarihi: {hastaDetay.dogumTarihi}</div>
        <div>Sigortalı Türü: {hastaDetay.sigortaliTuru}</div>
        <div>Devredilen Kurum: {hastaDetay.devredilenKurum}</div>
        <div>Katılım Payından Muaf: {hastaDetay.katilimPayindanMuaf}</div>
        <div>Kapsam Adı: {hastaDetay.kapsamAdi}</div>
        <div>İlave Ücretten Muaf: {hastaDetay.ilaveUcrettenMuaf}</div>

        <div style={{ padding:"10px", display:"grid", placeItems:"center"}}>
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

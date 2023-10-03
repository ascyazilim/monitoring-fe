import { Button, Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./Card.css";

function IlacBilgisiDetay() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [ilacDetay, setIlacDetay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/ilac-bilgisi/${id}`
        );
        setIlacDetay(response.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, [id]);

  if (!ilacDetay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainDiv">
      <Card className="mainCard">
        <h2 className="mainCardH2">İlaç Bilgisi Detay</h2>

        <div>ID: {ilacDetay.id}</div>

        <div>Açıklama: {ilacDetay.aciklama}</div>
        <div>Ad: {ilacDetay.ad}</div>
        <div>Adet: {ilacDetay.adet}</div>
        <div>Barkod: {ilacDetay.barkod}</div>
        <div>Hizmet Sunucu RefNo: {ilacDetay.hizmetSunucuRefNo}</div>
        <div>İlaç Türü: {ilacDetay.ilacTuru}</div>
        <div>İşlem Sıra No: {ilacDetay.islemSiraNo}</div>
        <div>İşlem Tarihi: {ilacDetay.islemTarihi}</div>
        <div>Tutar: {ilacDetay.tutar}</div>
        <div>Paket Hariç: {ilacDetay.paketHaric}</div>
        <div>Özel Durum: {ilacDetay.ozelDurum}</div>
        <div>Çoklu Özel Durum: {ilacDetay.cokluOzelDurum}</div>
        <div>Seri No: {ilacDetay.seriNo}</div>
        <div>Son Kullanım Tarihi: {ilacDetay.sonKullanimTarihi}</div>
        <div>Batch No: {ilacDetay.batchNo}</div>
        <div>ITS Birim Sarf ID: {ilacDetay.itsBirimSarfId}</div>
        <div>Majistral İlaç: {ilacDetay.majistralIlac}</div>
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

export default IlacBilgisiDetay;

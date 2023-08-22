import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";

function HastaDetay() {
  const { id } = useParams();

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
    <div>
      <h2>Hasta Detay</h2>
      <Card style={{margin: "10px", padding:"10px"}}>
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
        </Card>
    </div>
  );
}

export default HastaDetay;

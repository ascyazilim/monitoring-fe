import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";

function MuayeneBilgisiDetay() {
  const { id } = useParams();

  const [muayeneDetay, setMuayeneDetay] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
        try{
            const response = await axios.get(`http://localhost:8080/muayene-bilgisi/${id}`);
            setMuayeneDetay(response.data);
        }catch (error){
            console.error("Error:", error);
        }
    };

    fetchData();
  }, [id]);

  if(!muayeneDetay){
    return <div>Loading...</div>
  }
  return(
    <div>
        <h2>Muayene Detayı</h2>
        <Card style={{margin: "10px", padding:"10px"}}>
            <div>ID: {muayeneDetay.id}</div>
            <div>Branş Kodu: {muayeneDetay.bransKodu}</div>
            <div>Dr. Tescil No: {muayeneDetay.drTescilNo}</div>
            <div>SUT kodu: {muayeneDetay.sutKodu}</div>
            <div>Hizmet Sunucu Ref No: {muayeneDetay.hizmetSunucuRefNo}</div>
            <div>İşlem Sıra No: {muayeneDetay.islemSiraNo}</div>
            <div>Muayene Tarihi: {muayeneDetay.muayeneTarihi}</div>
            <div>Özel Durum: {muayeneDetay.ozelDurum}</div>

        </Card>
    </div>
  );
}

export default MuayeneBilgisiDetay;

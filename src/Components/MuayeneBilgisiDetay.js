import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
//import { Card } from "react-bootstrap";
import { Card, Button, Modal } from "@mui/material";
import "./Card.css";

function MuayeneBilgisiDetay() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    <div className="mainDiv">
      <Button variant="contained" color="primary" onClick={openModal}>
        Detay
      </Button>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        style={{
          position: 'absolute',
          top: '15%',
          left: '30%'
        }}
      >
        <Card className="mainCard">
          <h2 className="mainCardH2">Muayene Detayı</h2>

          <div>ID: {muayeneDetay.id}</div>
          <div>Branş Kodu: {muayeneDetay.bransKodu}</div>
          <div>Dr. Tescil No: {muayeneDetay.drTescilNo}</div>
          <div>SUT kodu: {muayeneDetay.sutKodu}</div>
          <div>Hizmet Sunucu Ref No: {muayeneDetay.hizmetSunucuRefNo}</div>
          <div>İşlem Sıra No: {muayeneDetay.islemSiraNo}</div>
          <div>Muayene Tarihi: {muayeneDetay.muayeneTarihi}</div>
          <div>Özel Durum: {muayeneDetay.ozelDurum}</div>
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
      </Modal>
    </div>
  );
}

export default MuayeneBilgisiDetay;
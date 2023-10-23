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

  const [muayeneDetay, setMuayeneDetay] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/muayene-kaydet/${id}`
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
          position: "absolute",
          top: "15%",
          left: "30%",
        }}
      >
        <Card className="mainCard">
          <h2 className="mainCardH2">Muayene Detayı</h2>

          <div>ID: {muayeneDetay.id}</div>
          <div>Şikayet: {muayeneDetay.sikayet}</div>
          <div>Hikaye: {muayeneDetay.hikaye}</div>
          <div>ÖzGeçmiş: {muayeneDetay.ozgecmis}</div>
          <div>SoyGeçmiş: {muayeneDetay.soygecmis}</div>
          <div>Alerji: {muayeneDetay.alerji}</div>
          <div>Sigara: {muayeneDetay.sigara}</div>
          <div>Sigara Açıklama: {muayeneDetay.sigaraAciklama}</div>
          <div>Grip Aşısı: {muayeneDetay.gripAsisi}</div>
          <div>Grip Aşısı Açıklama: {muayeneDetay.gripAsisiAciklama}</div>
          <div>Tanı List: {muayeneDetay.taniList}</div>
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

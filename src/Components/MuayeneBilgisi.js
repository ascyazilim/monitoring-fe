import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MuayeneBilgisi() {
  const [muayeneListesi, setMuayeneListesi] = useState([]);
  const [selectedMuayene, setSelectedMuayene] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = (muayene) => {
    setSelectedMuayene(muayene);
  };

  const closeModal = () => {
    setSelectedMuayene(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/muayene-bilgisi"
        );
        setMuayeneListesi(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <Card style={{ width: "400px" }}>
        <h2 style={{ textAlign: "center" }}>Muayene Bilgisi Listesi</h2>
        <div>
          {muayeneListesi.map((muayene) => (
            <Card
              key={muayene.id}
              style={{ margin: "10px", padding: "10px", textAlign: "center" }}
            >
              <div>ID: {muayene.id}</div>
              <div>İşlem Sıra No: {muayene.islemSiraNo}</div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => openModal(muayene)}
              >
                Detay
              </Button>
            </Card>
          ))}
        </div>
      </Card>
      {selectedMuayene && (
        <Modal
          open={true}
          onClose={closeModal}
          style={{
            position: "absolute",
            top: "15%",
            left: "30%",
          }}
        >
          <Card className="mainCard">
            <h2 className="mainCardH2">Muayene Detayı</h2>

            <div>ID: {selectedMuayene.id}</div>
            <div>Branş Kodu: {selectedMuayene.bransKodu}</div>
            <div>Dr. Tescil No: {selectedMuayene.drTescilNo}</div>
            <div>SUT kodu: {selectedMuayene.sutKodu}</div>
            <div>Hizmet Sunucu Ref No: {selectedMuayene.hizmetSunucuRefNo}</div>
            <div>İşlem Sıra No: {selectedMuayene.islemSiraNo}</div>
            <div>Muayene Tarihi: {selectedMuayene.muayeneTarihi}</div>
            <div>Özel Durum: {selectedMuayene.ozelDurum}</div>
            <div className="backButton">
              <Button variant="contained" color="primary" onClick={closeModal}>
                Geri
              </Button>
            </div>
          </Card>
        </Modal>
      )}
    </div>
  );
}

export default MuayeneBilgisi;

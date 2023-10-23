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
          "http://localhost:8080/muayene-kaydet/all"
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
              {/* <div>İşlem Sıra No: {muayene.islemSiraNo}</div> */}
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
            borderRadius: "5px",
          }}
          BackdropProps={{invisible: true}}
        >
          <Card className="mainCard">
            <h2 className="mainCardH2">Muayene Detayı</h2>

            <div><b>ID:</b> {selectedMuayene.id}</div>
            <div><b>Şikayet:</b> {selectedMuayene.sikayet}</div>
            <div><b>Hikaye:</b> {selectedMuayene.hikaye}</div>
            <div><b>ÖzGeçmiş:</b> {selectedMuayene.ozgecmis}</div>
            <div><b>SoyGeçmiş:</b> {selectedMuayene.soygecmis}</div>
            <div><b>Alerji:</b> {selectedMuayene.alerji}</div>
            <div><b>Sigara:</b> {selectedMuayene.sigara}</div>
            <div><b>Sigara Açıklama:</b> {selectedMuayene.sigaraAciklama}</div>
            <div><b>Grip Aşısı:</b> {selectedMuayene.gripAsisi}</div>
            <div><b>Grip Aşısı Açıklama:</b> {selectedMuayene.gripAsisiAciklama}</div>
            <div><b>Tanı List:</b> {selectedMuayene.taniList.map(tani=> (
              <div key={tani.id}>{tani.taniAdi}</div>
              
            ))}</div>
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

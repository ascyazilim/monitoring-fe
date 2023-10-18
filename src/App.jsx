import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Paper,

} from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaniBilgisiList from "./Components/TaniBilgisiList";
import CreateTaniBilgisi from "./Components/CreateTaniBilgisi";
import "./App.css";
import HastaBilgisi from "./Components/HastaBilgisi";

import { styled } from "@mui/system";
import MuayeneBilgisi from "./Components/MuayeneBilgisi";
import Navi from "./Components/Navi";
import CreateMuayeneBilgisi from "./Components/CreateMuayeneBilgisi";
import MuayeneBilgisiDetay from "./Components/MuayeneBilgisiDetay";
import AnaSayfa from "./Components/AnaSayfa";
import HastaDetay from "./Components/HastaDetay";
import TaniBilgisiDetay from "./Components/TaniBilgisiDetay";
import DoktorBilgisi from "./Components/DoktorBilgisi";
import DoktorBilgisiDetay from "./Components/DoktorBilgisiDetay";
import DoktorList from "./Components/DoktorList";
import IlacBilgisi from "./Components/IlacBilgisi";
import IlacBilgisiDetay from "./Components/IlacBilgisiDetay";
import IlacListesi from "./Components/IlacListesi";
import IlacListesiDetay from "./Components/IlacListesiDetay";
import logo from "./img/birkil3.jpeg";
import HastaAra from "./Components/HastaAra";
import MuayeneBilgisiDetayArama from "./Components/MuayeneBilgisiDetayArama";
import Login from "./Components/Login";
import AmeliyatGiris from "./Components/AmeliyatGiris";
import Anamnez from "./Components/Anamnez";

const MyStyledButton = styled(Button)({
  fontSize: "6px",
  padding: "10px 20px",
  backgroundColor: "skyblue",
  color: "black",
});

const App = () => {
  const [selectedMuayeneId, setSelectedMuayeneId] = useState(null);

  const handleMuayeneIdSelection = (id) => {
    setSelectedMuayeneId(id);
  };

  return (
    <Container
      style={{ marginLeft: "0px", marginBottom: "10px", marginRight: "10px" }}
    >
      <Router>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Navi />
          </Grid>
          <Grid item xs={9}>
            <Paper elevation={3} style={{ padding: "10px" }}>
              
              <div style={{ display: "flex", justifyContent: "start" }}>
                <Card style={{ width: "125px", height: "80px", margin: "5px", border:"1px solid #1976d2" }}>
                  <div>
                    <img
                      src={logo}
                      alt="Profil Fotosu"
                      className="logo-image"
                      style={{ width: "100px", height:"60px", marginTop:"10px", marginLeft:"5px" }}
                    />
                  </div>
                </Card>
                <Card
                  style={{
                    width: "200px",
                    height: "80px",
                    margin: "5px",
                    textAlign: "center",
                    border:"1px solid #1976d2"
                  }}
                >
                  <div style={{ marginTop: "10px" }}>
                    <h3>Ali Cebecioğlu</h3>
                  </div>
                  <div>12345678912</div>
                  <div>34, Erkek, 0(RH -)</div>
                </Card>
                <Card
                  style={{
                    width: "200px",
                    height: "80px",
                    margin: "5px",
                    textAlign: "center",
                    border:"1px solid #1976d2"
                  }}
                >
                  <div style={{marginTop: "10px"}}>
                    <h4>Giriş Bilgileri</h4>
                    <div></div>
                  </div>
                </Card>
                <Card
                  style={{
                    width: "200px",
                    height: "80px",
                    margin: "5px",
                    textAlign: "center",
                    border:"1px solid #1976d2"
                  }}
                >
                  <div style={{ marginTop: "10px" }}>
                    <h4>Dr. Fırat Aksun</h4>
                    <div>Uzm. Diş doktoru</div>
                  </div>
                </Card>
              </div>

              <div
                style={{ borderBottom: "1px solid #1976d2", marginBottom: "10px" }}
              ></div>
              <Routes>
                <Route path="/" element={<AnaSayfa />} />
                <Route path="/tani" element={<TaniBilgisiList />} />
                <Route path="/tani-olustur" element={<CreateTaniBilgisi />} />
                <Route path="/tani-detay/:id" element={<TaniBilgisiDetay />} />
                <Route path="/hasta" element={<HastaBilgisi />} />
                <Route path="/hasta-detay/:id" element={<HastaDetay />} />
                <Route path="/doktor" element={<DoktorBilgisi />} />
                <Route
                  path="/doktor-detay/:id"
                  element={<DoktorBilgisiDetay />}
                />
                <Route path="/doktor-list" element={<DoktorList />} />
                <Route path="/muayene" element={<MuayeneBilgisi />} />
                <Route
                  path="/muayene-olustur"
                  element={<CreateMuayeneBilgisi />}
                />
                <Route
                  path="/muayene-detay/:id"
                  element={<MuayeneBilgisiDetay />}
                />

                <Route path="/ilac-bilgisi" element={<IlacBilgisi />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ilac-detay/:id" element={<IlacBilgisiDetay />} />
                <Route path="/ilac-listesi" element={<IlacListesi />} />
                <Route path="/anamnez" element={<Anamnez />} />
                <Route path="/ameliyat-giris" element={<AmeliyatGiris />} />
                <Route
                  path="/ilac-list-detay/:id"
                  element={<IlacListesiDetay />}
                />
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </Router>
    </Container>
  );
};

export default App;

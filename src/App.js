import React from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaniBilgisiList from "./Components/TaniBilgisiList";
import CreateTaniBilgisi from "./Components/CreateTaniBilgisi";
import "./App.css";
import HastaBilgisi from "./Components/HastaBilgisi";
import SettingsIcon from "@mui/icons-material/Settings";
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


const MyStyledButton = styled(Button)({
  fontSize: "6px",
  padding: "10px 20px",
  backgroundColor: "skyblue",
  color: "black",
});

const App = () => {


  return (
    <Container
      style={{ marginLeft: "10px", marginBottom: "10px", marginRight: "10px" }}
    >
      {/* <h1 style={{ textAlign: "center" }}>Hasta Başı Monitör</h1> */}
      <Router>
        
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <Navi />
          </Grid>
          <Grid item xs={9}>
            <Paper elevation={3} style={{ padding: "10px" }}>
              <div style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "start" }}>
                  <MyStyledButton
                    className="menuButton"
                    variant="contained"
                    startIcon={<SettingsIcon />}
                    color="primary"
                    href="/muayene"
                  >
                    Muayene
                  </MyStyledButton>
                  <MyStyledButton
                    className="menuButton"
                    variant="contained"
                    startIcon={<SettingsIcon />}
                    color="primary"
                  >
                    Müdahale
                  </MyStyledButton>
                  <MyStyledButton
                    className="menuButton"
                    variant="contained"
                    startIcon={<SettingsIcon />}
                    color="primary"
                  >
                    İlaç
                  </MyStyledButton>
                  <MyStyledButton
                    className="menuButton"
                    variant="contained"
                    startIcon={<SettingsIcon />}
                    color="primary"
                  >
                    Reçete
                  </MyStyledButton>
                  <MyStyledButton
                    className="menuButton"
                    variant="contained"
                    startIcon={<SettingsIcon />}
                    color="primary"
                  >
                    Tedavi Planlama
                  </MyStyledButton>
                  <MyStyledButton
                    className="menuButton"
                    variant="contained"
                    startIcon={<SettingsIcon />}
                    color="primary"
                  >
                    Formlar
                  </MyStyledButton>
                  <MyStyledButton
                    className="menuButton"
                    variant="contained"
                    startIcon={<SettingsIcon />}
                    color="primary"
                  >
                    Karar-Taburcu
                  </MyStyledButton>
                </div>
              </div>
              <div
                style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}
              ></div>
              <Routes>
                <Route path="/" element={<AnaSayfa />} />
                <Route path="/tani" element={<TaniBilgisiList />} />
                <Route path="/tani-olustur" element={<CreateTaniBilgisi />} />
                <Route path="/tani-detay/:id" element={<TaniBilgisiDetay/>}/>
                <Route path="/hasta" element={<HastaBilgisi />} />
                <Route path="/hasta-detay/:id" element={<HastaDetay />} />
                <Route path="/doktor" element={<DoktorBilgisi />} />
                <Route path="/doktor-detay/:id" element={<DoktorBilgisiDetay />} />
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
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </Router>
    </Container>
  );
};

export default App;

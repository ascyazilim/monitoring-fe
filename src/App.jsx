import React, { useEffect, useState } from "react";
import { Button, Card, Container, Grid, Paper } from "@mui/material";
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
import IlacBilgisi from "./Components/IlacBilgisi";
import IlacBilgisiDetay from "./Components/IlacBilgisiDetay";
import IlacListesi from "./Components/IlacListesi";
import IlacListesiDetay from "./Components/IlacListesiDetay";
import logo from "./img/birkil3.jpeg";

import Login from "./Components/Login";
import AmeliyatGiris from "./Components/AmeliyatGiris";
import Anamnez from "./Components/Anamnez";
import TahlilSonuc from "./Components/TahlilSonuc";
import KlinikSeyir from "./Components/KlinikSeyir";

import axios from "axios";
import MainPage from "./Components/MainPage";



const App = () => {
  const [selectedMuayeneId, setSelectedMuayeneId] = useState(null);

  const [tcKimlikNo, setTcKimlikNo] = useState("");
  const [error, setError] = useState("");
  const [hastaBilgileri, setHastaBilgileri] = useState(null);
  const [selectedHasta, setSelectedHasta] = useState(null);

  //Navbar Search kısmı
  const [tumHastalar, setTumHastalar] = useState([]);
  const [filtrelenmisHastalar, setFiltrelenmisHastalar] = useState([]);

  //açılır kapanır search kısmı
  const [isGridVisible, setIsGridVisible] = useState(true);

  const toggleGridVisibility = () => {
    setIsGridVisible(!isGridVisible);
  };

  useEffect(() => {
    const fetchHastalar = async () => {
      try {
        const response = await axios.get('http://localhost:8080/hasta/all');
        setTumHastalar(response.data.slice(0, 10));
      } catch (error){
        console.error('Hastalar yüklenirken hata oluştu', error);
      }
    };
    fetchHastalar();
  }, []);


  const handleMuayeneIdSelection = (id) => {
    setSelectedMuayeneId(id);
  };

  const handleTcKimlikNoChange = (e) => {
    setTcKimlikNo(e.target.value);
  };

 

  const handleSearch = (e) => {
    e.preventDefault();
    const filtrelenen = tumHastalar.filter(hasta =>
      hasta.tcKimNo.includes(tcKimlikNo)
    );
    setFiltrelenmisHastalar(filtrelenen);
  };

  const selectHasta = (hasta) => {
    setSelectedHasta(hasta);
  }

  //yaş hesaplama date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <Container
      style={{ marginLeft: "0px", marginBottom: "10px", marginRight: "10px" }}
    >
      <Router>
        <Grid container spacing={3}>
          
          <Grid item xs={3}>
            {/* <Navi /> */}
            <div className="arama">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={tcKimlikNo}
                  onChange={(e) => setTcKimlikNo(e.target.value)}
                  placeholder="Tc Kimlik No ile Ara"
                />
                <button type="submit">Ara</button>
              </form>
              <ul style={{listStyleType: 'none'}}>
                {(filtrelenmisHastalar.length > 0 ? filtrelenmisHastalar: tumHastalar).map(hasta => (
                  <li key={hasta.id} onClick={() => selectHasta(hasta)}>
                    {hasta.ad} {hasta.soyad}, {hasta.tcKimNo}
                  </li>
                ))}
              </ul>
              {/* {error && <p>{error}</p>} */}
              {/* <ul style={{listStyleType:"none"}}>
                {filtrelenmisHastalar.map((hasta) => (
                  <li key={hasta.id} onClick={() => selectHasta(hasta)}>
                     {hasta.ad} {hasta.soyad}, {hasta.tcKimNo}
                  </li>
                ))}
              </ul> */}
            </div>
          </Grid>
          <Grid item xs={9}>
            <Paper elevation={3} style={{ padding: "10px" }}>
              
            

              <div style={{ display: "flex", justifyContent: "start" }}>
                <Card
                  style={{
                    width: "125px",
                    height: "80px",
                    margin: "5px",
                    border: "1px solid #1976d2",
                  }}
                >
                  <div>
                    <img
                      src={logo}
                      alt="Profil Fotosu"
                      className="logo-image"
                      style={{
                        width: "100px",
                        height: "60px",
                        marginTop: "10px",
                        marginLeft: "5px",
                      }}
                    />
                  </div>
                </Card>
                <Card
                  style={{
                    width: "200px",
                    height: "80px",
                    margin: "5px",
                    textAlign: "center",
                    border: "1px solid #1976d2",
                  }}
                >
                  {selectedHasta && (
                    <div style={{marginTop: "7px"}}>
                      <h3>{selectedHasta.ad} {selectedHasta.soyad}</h3>
                      <div><b>TC K.No:</b> {selectedHasta.tcKimNo}</div>
                      <div><b>Yaş:</b> {calculateAge(selectedHasta.dogumTarihi)}, <b>Cinsiyet:</b> {selectedHasta.cinsiyet}</div>
                    </div>
                  )}
                </Card>
                <Card
                  style={{
                    width: "200px",
                    height: "80px",
                    margin: "5px",
                    textAlign: "center",
                    border: "1px solid #1976d2",
                  }}
                >
                  <div style={{ marginTop: "10px" }}>
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
                    border: "1px solid #1976d2",
                  }}
                >
                  <div style={{ marginTop: "10px" }}>
                    <h4>Dr. Fırat Aksun</h4>
                    <div>Uzm. Diş doktoru</div>
                  </div>
                </Card>
              </div>

              <div
                style={{
                  borderBottom: "1px solid #1976d2",
                  marginBottom: "10px",
                }}
              ></div>
              
              <Routes>
                <Route path="/" element={<MainPage />} />
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
                <Route path="/klinik-seyir" element={<KlinikSeyir />} />
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
                <Route path="/anamnez" element={<Anamnez selectedHasta={selectedHasta}/>} />
                <Route path="/tahlil-sonuclari" element={<TahlilSonuc />} />

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

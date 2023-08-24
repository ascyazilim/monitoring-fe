import React from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  // FormControlLabel,
  // Checkbox,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
  // Typography,
} from "@mui/material";
//import { DatePicker } from "@mui/x-date-pickers";
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
//import Sidebar from "./Components/SideBar";

const MyStyledButton = styled(Button)({
  fontSize: "6px",
  padding: "10px 20px",
  backgroundColor: "skyblue",
  color: "black",

  //borderRadius: "25px",
});

const App = () => {
  // const [selectedUnit, setSelectedUnit] = useState("");
  // const [selectedDoctor, setSelectedDoctor] = useState("");
  //const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

  // const handleUnitChange = (event) => {
  //   setSelectedUnit(event.target.value);
  // };

  // const handleDoctorChange = (event) => {
  //   setSelectedDoctor(event.target.value);
  // };

  // const handleDateRangeChange = (newValue) => {
  //   setSelectedDateRange(newValue);
  // };

  // const units = [
  //   "Acil",
  //   "Dahiliye",
  //   "Çocuk",
  //   "Cerrahi",
  //   "Kardiyoloji",
  //   "Nöroloji",
  // ];
  // const doctors = ["Dr.Ali", "Dr.Sami"];

  return (
    <Container
      style={{ marginLeft: "10px", marginBottom: "10px", marginRight: "10px" }}
    >
      {/* <h1 style={{ textAlign: "center" }}>Hasta Başı Monitör</h1> */}
      <Router>
        <Navi />
        <Grid container spacing={3}>
          <Grid item xs={3}>
            {/* <Paper elevation={3} style={{ padding: "10px" }}>
              <Container maxWidth="sm">
                <form>
                  <div>
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel>Birim</InputLabel>
                      <Select
                        label="Birim"
                        value={selectedUnit}
                        onChange={handleUnitChange}
                      >
                        {units.map((unit) => (
                          <MenuItem key={unit} value={unit}>
                            {unit}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel>Personel</InputLabel>
                      <Select
                        label="Personel"
                        value={selectedDoctor}
                        onChange={handleDoctorChange}
                      >
                        {doctors.map((doctor) => (
                          <MenuItem key={doctor} value={doctor}>
                            {doctor}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          inputProps={{ "aria-label": "exampleCheck1" }}
                        />
                      }
                      label="Check me out"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      href="/hasta"
                      style={{ textTransform: "none"}}
                    >
                      <Typography variant="body2">HastaListele</Typography>
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      href="/create"
                      style={{ textTransform: "none" }}
                    >
                      <Typography variant="body2">TanıOluştur</Typography>
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      href="/"
                      style={{ textTransform: "none" }}
                    >
                      <Typography variant="body2">TanıListele</Typography>
                    </Button>
                  </div>
                </form>
              </Container>
            </Paper> */}
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

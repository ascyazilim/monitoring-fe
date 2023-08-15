import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaniBilgisiList from "./Components/TaniBilgisiList";
import CreateTaniBilgisi from "./Components/CreateTaniBilgisi";
import "./App.css";


const App = () => {
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  //const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  // const handleDateRangeChange = (newValue) => {
  //   setSelectedDateRange(newValue);
  // };

  const units = ["Acil", "Dahiliye", "Çocuk"];
  const doctors = ["Dr.Ali", "Dr.Sami"];

  return (
      <Container>
        <h1>Tanı Bilgisi Yönetimi</h1>
        <Router>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper elevation={3} style={{ padding: "10px" }}>
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
                    {/* <div>
                      <DatePicker
                        label="Tarih Aralığı"
                        value={selectedDateRange}
                        onChange={handleDateRangeChange}
                        renderInput={(startProps, endProps) => (
                          <React.Fragment>
                            <TextField
                              {...startProps}
                              variant="outlined"
                              margin="normal"
                            />
                            <Box sx={{ mx: 2 }}> - </Box>
                            <TextField
                              {...endProps}
                              variant="outlined"
                              margin="normal"
                            />
                          </React.Fragment>
                        )}
                      />
                    </div> */}
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
                    <div>
                      <Button variant="contained" color="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </form>
                </Container>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={3} style={{ padding: "10px" }}>
                <Routes>
                  <Route path="/" element={<TaniBilgisiList />} />
                  <Route path="/create" element={<CreateTaniBilgisi />} />
                </Routes>
              </Paper>
            </Grid>
          </Grid>
        </Router>
      </Container>
  );
};

export default App;

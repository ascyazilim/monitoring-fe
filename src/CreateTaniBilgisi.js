import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Paper,
} from "@mui/material";
import axios from "axios";
import "./App.css";

const CreateTaniBilgisi = () => {
  const [islemSiraNo, setIslemSiraNo] = useState("");
  const [birincilTani, setBirincilTani] = useState("");
  const [hizmetSunucuRefNo, setHizmetSunucuRefNo] = useState("");
  const [taniKodu, setTaniKodu] = useState("");
  const [taniTipi, setTaniTipi] = useState("");
  const [ozelDurum, setOzelDurum] = useState("");

  const handleCreate = async () => {
    const newTaniBilgisi = {
      islemSiraNo,
      birincilTani,
      hizmetSunucuRefNo,
      taniKodu,
      taniTipi,
      ozelDurum,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/tani-bilgisi/create",
        newTaniBilgisi
      );
      console.log("Oluşturulan Tanı Bilgisi: ", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} className="custom-form" style={{ padding: "20px" }}>
        <h2>Tanı Bilgisi Oluşturma</h2>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="İşlem Sıra No"
              variant="outlined"
              value={islemSiraNo}
              onChange={(e) => setIslemSiraNo(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Birincil Tanı"
              variant="outlined"
              value={birincilTani}
              onChange={(e) => setBirincilTani(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Hizmet Sunucu RefNo"
              variant="outlined"
              value={hizmetSunucuRefNo}
              onChange={(e) => setHizmetSunucuRefNo(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tanı Kodu"
              variant="outlined"
              value={taniKodu}
              onChange={(e) => setTaniKodu(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tanı Tipi"
              variant="outlined"
              value={taniTipi}
              onChange={(e) => setTaniTipi(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Özel Durum"
              variant="outlined"
              value={ozelDurum}
              onChange={(e) => setOzelDurum(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleCreate}>
              Oluştur
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CreateTaniBilgisi;

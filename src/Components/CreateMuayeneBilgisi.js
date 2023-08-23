import React, { useState } from "react";
import { Button, TextField, Grid, Container, Paper } from "@mui/material";
import axios from "axios";

function CreateMuayeneBilgisi() {
  const [formData, setFormData] = useState({
    bransKodu: "",
    drTescilNo: "",
    sutKodu: "",
    hizmetSunucuRefNo: "",
    islemSiraNo: "",
    muayeneTarihi: "",
    ozelDurum: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/muayene-bilgisi/create",
        formData
      );
      console.log("Response: ", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container component={Paper} maxWidth="xs" elevation={3} p={3}>
      <h2 style={{ textAlign: "center" }}>Muayene Bilgisi Ekle</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Branş Kodu"
              name="bransKodu"
              value={formData.bransKodu}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Dr. Tescil No"
              name="drTescilNo"
              value={formData.drTescilNo}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="SUT Kodu"
              name="sutKodu"
              value={formData.sutKodu}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Hizmet Sunucu Ref No"
              name="hizmetSunucuRefNo"
              value={formData.hizmetSunucuRefNo}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="İşlem Sıra No"
              name="islemSiraNo"
              value={formData.islemSiraNo}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Muayene Tarihi"
              name="muayeneTarihi"
              type="date"
              value={formData.muayeneTarihi}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Özel Durum"
              name="ozelDurum"
              value={formData.ozelDurum}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button variant="contained" color="primary" type="submit">
              Ekle
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CreateMuayeneBilgisi;

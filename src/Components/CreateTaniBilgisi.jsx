import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Button,
  TextField,
  Grid,
  Container,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import "../App.css";
import { padding } from "@mui/system";

const CreateTaniBilgisi = () => {
  const navigate = useNavigate();

  const [islemSiraNo, setIslemSiraNo] = useState("");
  const [birincilTani, setBirincilTani] = useState("");
  const [hizmetSunucuRefNo, setHizmetSunucuRefNo] = useState("");
  const [taniKodu, setTaniKodu] = useState("");
  const [taniTipi, setTaniTipi] = useState("");
  const [ozelDurum, setOzelDurum] = useState("");

  const handleBirincilTaniChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "E" || selectedValue === "H") {
      setBirincilTani(selectedValue);
    }
  };

  const handleOzelDurumChange = (event) => {
    const selectedValue = event.target.value;
    setOzelDurum(selectedValue);
  };

  const handleTaniTipiChange = (event) => {
    const selectedValue = event.target.value;
    if (
      selectedValue === "1" ||
      selectedValue === "2" ||
      selectedValue === "3"
    ) {
      setTaniTipi(selectedValue);
    }
  };

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

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container component={Paper} maxWidth="xs" elevation={3} p={3}>
      {/* <Paper elevation={3} className="custom-form" style={{ padding: "20px" }}> */}
      <h2 style={{ textAlign: "center" }}>Tanı Bilgisi Oluşturma</h2>
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
          {/* <TextField
              fullWidth
              label="Birincil Tanı"
              variant="outlined"
              value={birincilTani}
              onChange={(e) => setBirincilTani(e.target.value)}
            /> */}
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Birincil Tanı</InputLabel>
            <Select
              label="Birincil Tanı"
              value={birincilTani}
              onChange={handleBirincilTaniChange}
            >
              <MenuItem value="E">
                <Tooltip title="Evet">E</Tooltip>
              </MenuItem>
              <MenuItem value="H">
                <Tooltip title="Hayır">H</Tooltip>
              </MenuItem>
            </Select>
          </FormControl>
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
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Tanı Tipi</InputLabel>
            <Select
              label="Tanı Tipi"
              value={taniTipi}
              onChange={handleTaniTipiChange}
            >
              <MenuItem value="1">
                <Tooltip title="Ön tanı"><div>1</div></Tooltip>
              </MenuItem>
              <MenuItem value="2">
                <Tooltip title="Kesin tanı"><div>2</div></Tooltip>
              </MenuItem>
              <MenuItem value="3">
                <Tooltip title="Ayırıcı tanı"><div>3</div></Tooltip>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Özel Durum</InputLabel>
            <Select
              label="Özel Durum"
              value={ozelDurum}
              onChange={handleOzelDurumChange}
            >
              <MenuItem value="0">
                <Tooltip title="Organ,doku ve kök hücre nakli uygulanan hasta">
                  <div>0</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value="1">
                <Tooltip title="İşlem Tutarını Talep Etmiyorum">
                  <div>1</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value="2">
                <Tooltip title="18 Yaş Öncesi Başlayan Ortodonti Tedavi-fetal ekokardiyografi- bazı hematolojik hastalıklar yas kısıtlanmaması">
                  <div>2</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value="3">
                <Tooltip title="Acil İşlem (Hiperbarik Oksijen Tedavisinde acil gönderilmek istenen işlemler için)">
                  <div>3</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value="4">
                <Tooltip title="Yeşil kart Sağlık Bakanlığı sevkli hasta">
                  <div>4</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value="5">
                <Tooltip title="İmmünsuprese veya İmmün Yetmezliği Olan Hasta">
                  <div>5</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value="6">
                <Tooltip title="Muayene katılım payından muaf olması için gerekli sağlık kurulu raporu var">
                  <div>6</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value="7">
                <Tooltip title="İş kazası, trafik kazası veya adli vaka'da nükseden veya devam eden tedavi">
                  <div>7</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value="8">
                <Tooltip title="Muayene katılım payından muaf olması için gerekli sağlık kurulu raporu yok">
                  <div>8</div>
                </Tooltip>
              </MenuItem>
              <MenuItem value="9">
                <Tooltip title="Yoğun bakımda paket işlem ödenmesi için gün doldurulmuştur">
                  <div>9</div>
                </Tooltip>
              </MenuItem>
            </Select>
          </FormControl>

          {/* <TextField
              fullWidth
              label="Özel Durum"
              variant="outlined"
              value={ozelDurum}
              onChange={(e) => setOzelDurum(e.target.value)}
            /> */}
        </Grid>

        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button variant="contained" color="primary" onClick={handleCreate}>
            Ekle
          </Button>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </Container>
  );
};

export default CreateTaniBilgisi;

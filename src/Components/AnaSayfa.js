import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Button,
  Grid,
  Typography,
  Modal,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Checkbox,
  DialogTitle,
  IconButton
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "./Card.css";
import { styled } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";

const HomePage = () => {
  const [hastaBilgileri, setHastaBilgileri] = useState([]);
  const [taniBilgileri, setTaniBilgileri] = useState([]);
  const [doktorBilgileri, setDoktorBilgileri] = useState([]);
  const [muayeneBilgileri, setMuayeneBilgileri] = useState([]);

  const [isModalOpen, setIsModalopen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const openModal = () => {
    setIsModalopen(true);
  };

  const closeModal = () => {
    setIsModalopen(false);
  };

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleAddButtonClick = () => {
    console.log("Seçilen ögeler: ", selectedItems);
  };

  const MyStyledButton = styled(Button)({
    fontSize: "6px",
    padding: "10px 20px",
    backgroundColor: "skyblue",
    color: "black",
  });

  //const maxDisplayItems = 2;

  useEffect(() => {
    fetchHastaBilgileri();
    fetchTaniBilgileri();
    fetchDoktorBilgileri();
    fetchMuayeneBilgileri();
  }, []);

  const fetchHastaBilgileri = async () => {
    try {
      const response = await axios.get("http://localhost:8080/hasta/all");
      setHastaBilgileri(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDoktorBilgileri = async () => {
    try {
      const response = await axios.get("http://localhost:8080/doktor-bilgisi");
      setDoktorBilgileri(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMuayeneBilgileri = async () => {
    try {
      const response = await axios.get("http://localhost:8080/muayene-bilgisi");
      setMuayeneBilgileri(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTaniBilgileri = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tani-bilgisi");
      setTaniBilgileri(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ height: "650px", marginLeft: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Ana Sayfa</h2>
      <Grid container spacing={3}>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ display: "flex", justifyContent: "start" }}>
            <MyStyledButton
              className="menuButton"
              variant="contained"
              startIcon={<SettingsIcon />}
              color="primary"
              href="/muayene"
            >
              Tanı Ekle
            </MyStyledButton>
            <MyStyledButton
              className="menuButton"
              variant="contained"
              startIcon={<SettingsIcon />}
              color="primary"
              onClick={openModal}
            >
              Hizmet-İstem
            </MyStyledButton>
            <Modal
              open={isModalOpen}
              onClose={closeModal}
              style={{
                position: "absolute",
                top: "20%",
                left: "20%",
                borderRadius: "5px",
              }}
              BackdropProps={{ invisible: true }}
            >
              <Card
                className="mainCard"
                style={{ height: "400px", width: "400px" }}
              >
                <DialogTitle style={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={closeModal}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <div>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Hizmet Kodu</TableCell>
                        <TableCell>İstem Adı</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>312</TableCell>
                        <TableCell>Kan</TableCell>
                        <TableCell>
                          <Checkbox
                            checked={selectedItems.includes(1)}
                            onChange={() => handleCheckboxChange(1)}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>İdrar</TableCell>
                        <Checkbox
                          checked={selectedItems.includes(2)}
                          onChange={() => handleCheckboxChange(2)}
                        />
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "20px auto", display: "block" }}
                  >
                    Ekle
                  </Button>
                </div>
              </Card>
            </Modal>
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
        <Grid item xs={6}>
          <Card className="mainCard" style={{ width: "300px" }}>
            <CardContent>
              <h2>Hasta Bilgileri</h2>
              <div className="scrollable-content">
                {hastaBilgileri.map((hasta) => (
                  <div key={hasta.id}>
                    <Typography>ID: {hasta.id}</Typography>
                    <Typography>TC Kimlik No: {hasta.tcKimNo}</Typography>
                    <Link to={`/hasta-detay/${hasta.id}`}>
                      <Button variant="contained" color="primary">
                        Detay
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="mainCard" style={{ width: "300px" }}>
            <CardContent>
              <h2>Tanı Bilgileri</h2>
              <div className="scrollable-content">
                {taniBilgileri.map((tani) => (
                  <div key={tani.id}>
                    <Typography>ID: {tani.id}</Typography>
                    <Typography>İşlem Sıra No: {tani.islemSiraNo}</Typography>
                    <Link to={`/tani-detay/${tani.id}`}>
                      <Button variant="contained" color="primary">
                        Detay
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="mainCard" style={{ width: "300px" }}>
            <CardContent>
              <h2>Doktor Bilgileri</h2>
              <div className="scrollable-content">
                {doktorBilgileri.map((doktor) => (
                  <div key={doktor.id}>
                    {/* <Typography>ID: {doktor.id}</Typography> */}
                    <Typography>Dr Adı: {doktor.drAdi}</Typography>
                    <Typography>Dr SoyAdı: {doktor.drSoyadi}</Typography>
                    <Link to={`/doktor-detay/${doktor.id}`}>
                      <Button variant="contained" color="primary">
                        Detay
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="mainCard" style={{ width: "300px" }}>
            <CardContent>
              <h2>Muayene Bilgileri</h2>
              <div className="scrollable-content">
                {muayeneBilgileri.map((muayene) => (
                  <div key={muayene.id}>
                    <Typography>ID: {muayene.id}</Typography>
                    <Typography>
                      İşlem Sıra No: {muayene.islemSiraNo}
                    </Typography>
                    <Link to={`/muayene-detay/${muayene.id}`}>
                      <Button variant="contained" color="primary">
                        Detay
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;

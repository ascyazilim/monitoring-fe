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
  IconButton,
  TextField,
  Collapse,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "./Card.css";
import { styled } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import TaniBilgisiList from "./TaniBilgisiList";
import DoktorList from "./DoktorList";

const HomePage = () => {
  const [hastaBilgileri, setHastaBilgileri] = useState([]);
  const [taniBilgileri, setTaniBilgileri] = useState([]);
  const [doktorBilgileri, setDoktorBilgileri] = useState([]);
  const [muayeneBilgileri, setMuayeneBilgileri] = useState([]);

  const [isModalOpen, setIsModalopen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [modalAc, setModalAc] = useState(false);

  const [isModalDoktorOpen, setIsModalDoktorOpen] = useState(false);

  const openModal = () => {
    setIsModalopen(true);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const openDoktorList = () => {
    setIsModalopen(true);
  };

  const openModalDoktor = () => {
    setIsModalDoktorOpen(true);
  };

  const openMocalAc = () => {
    setModalAc(true);
  };

  const closeModal = () => {
    setIsModalopen(false);
  };

  const closeModalDoktor = () => {
    setIsModalDoktorOpen(false);
  };

  const closeModalAc = () => {
    setModalAc(false);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
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
              onClick={openSecondModal}
            >
              Anamnez Ekle
            </MyStyledButton>
            <Modal
              open={isSecondModalOpen}
              onClose={closeSecondModal}
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
                style={{ height: "340px", width: "600px" }}
              >
                <DialogTitle
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <h3 style={{ marginRight: "200px" }}>Anemnez </h3>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={closeSecondModal}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <div>
                  <TextField label="Şikayet" fullWidth />
                </div>
                <div>
                  <TextField label="Hikaye" fullWidth />
                </div>
                <div>
                  <TextField
                    label="Tanı Listesi"
                    fullWidth
                    onClick={openModal}
                  />
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "20px auto", display: "block" }}
                >
                  Ekle
                </Button>
              </Card>
            </Modal>
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
                style={{
                  height: "350px",
                  width: "400px",
                  borderRadius: "20px",
                }}
              >
                <DialogTitle
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <h3 style={{ marginRight: "70px" }}>İstem Formu</h3>
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
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Hizmet Kodu</th>
                        <th>İstem Adı</th>
                        <th>Sut Kodu</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(1)}
                            onChange={() => handleCheckboxChange(1)}
                          />
                        </td>
                        <td>312</td>
                        <td>Kan</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(2)}
                            onChange={() => handleCheckboxChange(2)}
                          />
                        </td>
                        <td>3</td>
                        <td>İdrar</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(3)}
                            onChange={() => handleCheckboxChange(3)}
                          />
                        </td>
                        <td>306</td>
                        <td>Ultrason</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(4)}
                            onChange={() => handleCheckboxChange(4)}
                          />
                        </td>
                        <td>211</td>
                        <td>Tomografi</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
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
              onClick={openDoktorList}
            >
              İlaç
            </MyStyledButton>
            <Modal
              open={isModalDoktorOpen}
              onClose={() => setIsModalDoktorOpen(false)}
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
                style={{
                  height: "350px",
                  width: "400px",
                  borderRadius: "20px",
                }}
              >
                {/* DoktorList component'ini burada görüntüle */}
                <DoktorList />
              </Card>
            </Modal>
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

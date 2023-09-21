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
import IlacListesi from "./IlacListesi";
import IlacListesiDetay from "./IlacListesiDetay";
import TaniListesi from "./TaniListesi";
import IstemListesi from "./IstemListesi";

const HomePage = () => {
  const [hastaBilgileri, setHastaBilgileri] = useState([]);
  const [taniBilgileri, setTaniBilgileri] = useState([]);
  const [doktorBilgileri, setDoktorBilgileri] = useState([]);
  const [muayeneBilgileri, setMuayeneBilgileri] = useState([]);

  const [tableData, setTableData] = useState([]);

  const [tableIstemData, setTableIstemData] = useState([]);

  const [inputText, setInputText] = useState("");
  const [cardTextList, setCardTextList] = useState([]);

  const [selectedTaniList, setSelectedTaniList] = useState([]);
  const [selectedIstemList, setSelectedIstemList] = useState([]);

  const [taniList, setTaniList] = useState([]);
  const [list, setList] = useState([]);

  const [IstemList, setIstemList] = useState([]);
  const [listIstem, setListIstem] = useState([]);

  const [isModalOpen, setIsModalopen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [isInputModalOpen, setIsInputModalOpen] = useState(false);

  const [isTaniOpen, setIsTaniOpen] = useState(false);
  const [isModalDoktorOpen, setIsModalDoktorOpen] = useState(false);

  const addToTable = (selectedOption) => {
    setTableData([...tableData, selectedOption]);
  };

  const addToTableIstem = (selectedOption) => {
    setTableIstemData([...tableIstemData, selectedOption]);
  };

  const openModal = () => {
    setIsModalopen(true);
  };

  const openTani = () => {
    setIsTaniOpen(true);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const openDoktorList = () => {
    setIsModalDoktorOpen(true);
  };

  const closeModal = () => {
    setIsModalopen(false);
  };

  const closeTani = () => {
    setIsTaniOpen(false);
  };

  const closeDoktorList = () => {
    setIsModalDoktorOpen(false);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSelectedIstemListChange = (selectedItems) => {
    setSelectedIstemList(selectedItems);
  };

  const handleSelectedTaniListChange = (selectedItems) => {
    setSelectedTaniList(selectedItems);
  };

  const handleTaniSelect = (selectedItems) => {
    setSelectedTaniList(selectedItems);
  };

  const openInputModal = () => {
    setIsInputModalOpen(true);
  };

  const closeInputModal = () => {
    setIsInputModalOpen(false);
  };

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleAddTextToCard = () => {
    setCardTextList([...cardTextList, inputText]);
    setInputText(""); // input alanını temizleyelim
    closeInputModal(); // Modal'ı kapat
  };

  const handleAddButtonClick = () => {
    const selectedTaniList = taniList.filter((item) =>
      selectedItems.includes(item.id)
    );

    const selectedTaniListAdi = selectedTaniList.map((item) => item.taniAdi);

    const updatedList = list.concat(selectedTaniListAdi);

    setList(updatedList);
    setSelectedItems([]);
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
    setTaniList([]);
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
                  <h3 style={{ marginRight: "200px" }}>Anamnez </h3>
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
                  <TextField
                    label="Şikayet"
                    fullWidth
                    value={inputText}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <TextField label="Hikaye" fullWidth />
                </div>
                <div>
                  <TextField
                    label="Tanı Listesi"
                    fullWidth
                    value={selectedTaniList.join(", ")}
                    onChange={(e) =>
                      setSelectedTaniList(e.target.value.split(", "))
                    }
                    onClick={openTani}
                  />
                </div>
                <Modal
                  open={isTaniOpen} // Modal, isTaniOpen durumuna bağlı olarak açılıp kapanacak
                  onClose={closeTani} // Modal'ı kapatmak için closeTani işlemini kulla
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
                      height: "420px",
                      width: 430,
                      borderRadius: "20px",
                    }}
                  >
                    {/* TaniBilgisiList bileşenini burada görüntüle */}
                    <TaniListesi
                      addToTable={addToTable}
                      onSelectedItemsChange={handleSelectedTaniListChange}
                    />
                  </Card>
                </Modal>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddTextToCard}
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
                  height: "420px",
                  width: 430,
                  borderRadius: "20px",
                }}
              >
                <IstemListesi
                  addToTableIstem={addToTableIstem}
                  onSelectedItemsChange={handleSelectedIstemListChange}
                />
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
              onClose={closeDoktorList}
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
                <IlacListesi />
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

        <Card className="mainCard" style={{ height: "140px", width: "700px" }}>
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Hasta Şikayeti</th>
              </tr>
            </thead>
            <tbody>
              {cardTextList.map((text, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="mainCard" style={{ height: "120px", width: "300px" }}>
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Tanı Listesi</th>
              </tr>
            </thead>
            <tbody>
              {selectedTaniList.map((item, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card
          className="mainCard"
          style={{ height: "120px", width: "300px", marginLeft: "80px" }}
        >
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Hizmet - İstem</th>
              </tr>
            </thead>
            <tbody>
              {selectedIstemList.map((item, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Grid>
    </div>
  );
};

export default HomePage;

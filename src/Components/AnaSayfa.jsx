import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Grid,
  Modal,
  TextField,
} from "@mui/material";


import axios from "axios";
import "../App.css";
import "./Card.css";
import "./TaniList.css";
import "./AnaSayfa.css";
import IlacListesi from "./IlacListesi";
import TaniListesi from "./TaniListesi";
import IstemListesi from "./IstemListesi";
import WindowModal from "./WindowModal";

const HomePage = () => {
  const [hastaBilgileri, setHastaBilgileri] = useState([]);
  const [taniBilgileri, setTaniBilgileri] = useState([]);
  const [doktorBilgileri, setDoktorBilgileri] = useState([]);
  const [muayeneBilgileri, setMuayeneBilgileri] = useState([]);

  const [tableData, setTableData] = useState([]);

  const [selectedData, setSelectedData] = useState([]);

  const [tableIstemData, setTableIstemData] = useState([]);
  const [tableIlacData, setTableIlacData] = useState([]);

  const [inputText, setInputText] = useState("");
 

  const [selectedContent, setSelectedContent] = useState("");

  const [selectedTaniList, setSelectedTaniList] = useState([]);
  const [selectedIstemList, setSelectedIstemList] = useState([]);
  const [selectedIlacList, setSelectedIlacList] = useState([]);

  const [taniList, setTaniList] = useState([]);
  const [list, setList] = useState([]);



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

  const addToTableIlac = (selectedOption) => {
    setTableIlacData([...tableIlacData, selectedOption]);
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

  const handleSelectedIlacListChange = (selectedItems) => {
    setSelectedIlacList(selectedItems);
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

  const handleAddToTable = () => {
    const newData = {
      sikayet: inputText,
      tani: selectedTaniList,
      istem: selectedIstemList,
      ilac: selectedIlacList,
    };
    setSelectedData([...selectedData, newData]);
  };

  const handleAddTextToCard = () => {
    const newData = {
      sikayet: inputText,
      tani: selectedTaniList.join(", "),
      istem: selectedIstemList.join(", "),
      ilac: selectedIlacList.join(", "),
    };
    setSelectedData([...selectedData, newData]);
    setSelectedContent(
      `Şikayet: ${inputText}, Tanı Listesi: ${selectedTaniList.join(",")}`
    );
    setInputText("");
    closeInputModal();
  };

  const handleAddIstemToCard = () => {
    setSelectedContent('Seçilen İstemler: ${selectedIstemList.join(",")}');
  };

  const handleAddIlacToCard = () => {
    setSelectedContent('Seçilen İlaçlar: ${selectedIlacList.join(",")}');
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

  const MyStyledButton = ({ onClick, label }) => {
    return (
      <li>
        <a href="#" onClick={onClick}>
          <span>{label}</span>
        </a>
      </li>
    );
  };

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
      <h2 style={{ textAlign: "center", marginBottom: "5px" }}>Ana Sayfa</h2>
      <Grid container spacing={3}>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ display: "flex", justifyContent: "start" }}>
            <Card id="tabs">
              <ul>
                <MyStyledButton
                  onClick={openSecondModal}
                  label={"Anamnez Ekle"}
                />
                <WindowModal
                  isOpen={isSecondModalOpen}
                  onClose={closeSecondModal}
                  
                  BackdropProps={{ invisible: false }}
                >
                  
                    
                    <div style={{marginBottom:"10px"}}>
                      <TextField
                        label="Şikayet"
                        fullWidth
                        value={inputText}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* <div>
                  <TextField label="Hikaye" fullWidth />
                </div> */}
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
                      BackdropProps={{ invisible: false }}
                    >
                      <Card
                        className="mainCard"
                        style={{
                          height: "400px",
                          width: "420px",
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
                  
                </WindowModal>
                <MyStyledButton onClick={openModal} label={"Hizmet-istem"} />
                <Modal
                  open={isModalOpen}
                  onClose={closeModal}
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "20%",
                    borderRadius: "5px",
                  }}
                  BackdropProps={{ invisible: false }}
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
                <MyStyledButton onClick={openDoktorList} label={"İlaç"} />
                <WindowModal
                  
                  isOpen={isModalDoktorOpen}
                  onClose={closeDoktorList}
                  
                  BackdropProps={{ invisible: false }}
                >
                  
                    <IlacListesi
                      addToTableIlac={addToTableIlac}
                      onSelectedItemsChange={handleSelectedIlacListChange}
                    />
                  
                </WindowModal>
                <MyStyledButton label={"Reçete"} />
                <MyStyledButton label={"Tedavi Planlama"} />
                <MyStyledButton label={"Formlar"} />
                <MyStyledButton label={"Karar-Taburcu"} />
              </ul>
            </Card>
          </div>
        </div>

        {/* <TableContainer component={Paper}> */}
          <table className="tableHomePage">
            <thead>
              <tr>
                <th>Şikayet</th>
                <th>Tanı</th>
                <th>Hizmet-İstem</th>
                <th>İlaç</th>
              </tr>
            </thead>
            <tbody>
              {selectedData.map((row, index) => (
                <tr key={index}>
                  <td style={{width: "10%"}}>{row.sikayet}</td>
                  <td style={{width: "40%"}}>
                    {Array.isArray(row.tani) ? row.tani.join(", ") : row.tani}
                  </td>
                  <td style={{width: "40%"}}>{row.istem}</td>
                  <td style={{width: "10%"}}>{row.ilac}</td>
                </tr>
              ))}
            </tbody>
          </table>
        {/* </TableContainer> */}

        
      </Grid>
    </div>
  );
};
export default HomePage;

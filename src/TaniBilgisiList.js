import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";

const TaniBilgisiList = () => {
  const [taniBilgileri, setTaniBilgileri] = useState([]);

  useEffect(() => {
    fetchTaniBilgileri();
  }, []);

  const fetchTaniBilgileri = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tani-bilgisi");
      setTaniBilgileri(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Tanı Bilgileri Listesi</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>İşlem Sıra No</TableCell>
              <TableCell>Birincil Tanı</TableCell>
              <TableCell>Hizmet Sunucu RefNo</TableCell>
              <TableCell>Tanı Kodu</TableCell>
              <TableCell>Tanı Tipi</TableCell>
              <TableCell>Özel Durum</TableCell>
              <TableCell>İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taniBilgileri.map((tani) => (
              <TableRow key={tani.id}>
                <TableCell>{tani.id}</TableCell>
                <TableCell>{tani.islemSiraNo}</TableCell>
                <TableCell>{tani.birincilTani}</TableCell>
                <TableCell>{tani.hizmetSunucuRefNo}</TableCell>
                <TableCell>{tani.taniKodu}</TableCell>
                <TableCell>{tani.taniTipi}</TableCell>
                <TableCell>{tani.ozelDurum}</TableCell>
                <TableCell>
                  <Button variant="contained" color="info">
                    Detay
                  </Button>
                  <Button variant="contained" color="warning">
                    Düzenle
                  </Button>
                  <Button variant="contained" color="error">
                    Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TaniBilgisiList;

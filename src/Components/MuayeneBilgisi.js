import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import axios from "axios";
import { Route, Routes } from "react-router";
import TaniBilgisiList from "./TaniBilgisiList";

const Muayene = () => {
  const [muayeneBilgisi, setMuayeneBilgisi] = useState([]);

  useEffect(() => {
    fetchMuayeneBilgisi();
  }, []);

  const fetchMuayeneBilgisi = async () => {
    try {
      const response = await axios.get("http://localhost:8080/muayene-bilgisi");
      setMuayeneBilgisi(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h2 style={{ textAlign: "center" }}>Muayene Bilgileri Listesi</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Dr Tescil No</TableCell>
                  <TableCell>Sut Kodu</TableCell>
                  <TableCell>Hizmet Sunucu RefNo</TableCell>
                  <TableCell>İşlem Sıra No</TableCell>
                  <TableCell>Muayene Tarihi</TableCell>
                  <TableCell>Özel Durum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {muayeneBilgisi.map((muayne) =>(
                    <TableRow key={muayne.id}>
                        <TableCell>{muayne.bransKodu}</TableCell>
                        <TableCell>{muayne.drTescilNo}</TableCell>
                        <TableCell>{muayne.sutKodu}</TableCell>
                        <TableCell>{muayne.hizmetSunucuRefNo}</TableCell>
                        <TableCell>{muayne.islemSiraNo}</TableCell>
                        <TableCell>{muayne.muayeneTarihi}</TableCell>
                        <TableCell>{muayne.ozelDurum}</TableCell>

                    </TableRow>
                ))}
              </TableBody>

            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={6}>
          <Routes>
            <Route path="/" element={<TaniBilgisiList />} />
          </Routes>
        </Grid>
      </Grid>
  );
};

export default Muayene;

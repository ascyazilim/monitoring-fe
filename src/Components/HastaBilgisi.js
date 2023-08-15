import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";

const HastaBilgisi = () => {
    const [hastaBilgileri, setHastaBilgileri] = useState([]);
  
    useEffect(() => {
      fetchHastaBilgileri();
    }, []);
  
    const fetchHastaBilgileri = async () => {
      try {
        const response = await axios.get("http://localhost:8080/hasta/all");
        setHastaBilgileri(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2 style={{textAlign:"center"}}>Hasta Bilgileri Listesi</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>TC KimlikNo</TableCell>
                <TableCell>Adı</TableCell>
                <TableCell>Soyadı</TableCell>
                <TableCell>Cinsiyet</TableCell>
                <TableCell>Doğum Tarihi</TableCell>
                <TableCell>Sigortalı Türü</TableCell>
                <TableCell>Devredilen Kurum</TableCell>
                <TableCell>Katılım Payından Muaf</TableCell>
                <TableCell>Kapsam Adı</TableCell>
                <TableCell>İlave Ücretten Muaf</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hastaBilgileri.map((hasta) => (
                <TableRow key={hasta.id}>
                  <TableCell>{hasta.id}</TableCell>
                  <TableCell>{hasta.tcKimNo}</TableCell>
                  <TableCell>{hasta.ad}</TableCell>
                  <TableCell>{hasta.soyad}</TableCell>
                  <TableCell>{hasta.cinsiyet}</TableCell>
                  <TableCell>{hasta.dogumTarihi}</TableCell>
                  <TableCell>{hasta.sigortaliTuru}</TableCell>
                  <TableCell>{hasta.devredilenKurum}</TableCell>
                  <TableCell>{hasta.katilimPayindanMuaf}</TableCell>
                  <TableCell>{hasta.kapsamAdi}</TableCell>
                  <TableCell>{hasta.ilaveUcrettenMuaf}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default HastaBilgisi;
  
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Button,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import "./Card.css";
import { useNavigate, useParams } from "react-router";
const IlacListesiDetay = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [ilacDetay, setIlacDetay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/ilac-list/${id}`
        );
        setIlacDetay(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!ilacDetay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainDiv">
      <Card className="mainCard">
        <h2 className="mainCardH2">İlaç Listesi</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow key={ilacDetay.id}>
                <TableCell>ID:</TableCell>
                <TableCell>{ilacDetay.id}</TableCell>
              </TableRow>
              <TableRow key={ilacDetay.barkod}>
                <TableCell>Barkod:</TableCell>
                <TableCell>{ilacDetay.barkod}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>İlaç Adı:</TableCell>
                <TableCell>{ilacDetay.ilacAdi}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Kullanim Birimi:</TableCell>
                <TableCell>{ilacDetay.kullanimBirimi}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Eczane Aktif Pasif:</TableCell>
                <TableCell>{ilacDetay.eczAktifPasif}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hastane Aktif Pasif:</TableCell>
                <TableCell>{ilacDetay.hasAktifPasif}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ayaktan Ödenme:</TableCell>
                <TableCell>{ilacDetay.ayaktanOdenme}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Yatan Ödenme:</TableCell>
                <TableCell>{ilacDetay.yatanOdenme}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Güncel Kamu İndirimli Fiyatı:</TableCell>
                <TableCell>{ilacDetay.guncelKamuIndirimliFiyati}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Yatan Maksimum Kullanım Periyot:</TableCell>
                <TableCell>{ilacDetay.yatanMaksimumKullanimPeriyot}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Yatan Maksimum Kullanım Periyot Birim:</TableCell>
                <TableCell>
                  {ilacDetay.yatanMaksimumKullanimPeriyotBirim}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="backButton">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
          >
            Geri
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default IlacListesiDetay;

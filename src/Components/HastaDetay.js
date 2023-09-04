import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
//import { Card, Button } from "react-bootstrap";
import { Card, Button, TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { padding } from "@mui/system";
import "./Card.css";

function HastaDetay() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [hastaDetay, setHastaDetay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/hasta/${id}`);
        setHastaDetay(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!hastaDetay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainDiv">
      <Card className="mainCard">
        <h2 className="mainCardH2">
          {hastaDetay.ad} {hastaDetay.soyad}
        </h2>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>ID:</TableCell>
                <TableCell>{hastaDetay.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TcKimlikNo:</TableCell>
                <TableCell>{hastaDetay.tcKimNo}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ad:</TableCell>
                <TableCell>{hastaDetay.ad}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SoyAd:</TableCell>
                <TableCell>{hastaDetay.soyad}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cinsiyet:</TableCell>
                <TableCell>{hastaDetay.cinsiyet}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Doğum Tarihi:</TableCell>
                <TableCell>{hastaDetay.dogumTarihi}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sigortali Türü:</TableCell>
                <TableCell>{hastaDetay.sigortaliTuru}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Devredilen Kurum:</TableCell>
                <TableCell>{hastaDetay.devredilenKurum}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Katılım Payından Muaf:</TableCell>
                <TableCell>{hastaDetay.katilimPayindanMuaf}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Kapsam Adı:</TableCell>
                <TableCell>{hastaDetay.kapsamAdi}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>İlave Ücretten Muaf</TableCell>
                <TableCell>{hastaDetay.ilaveUcrettenMuaf}</TableCell>
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
}

export default HastaDetay;
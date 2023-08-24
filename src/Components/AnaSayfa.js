import React, { useState, useEffect } from "react";
import { Card, CardContent, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "./Card.css";

const HomePage = () => {
  const [hastaBilgileri, setHastaBilgileri] = useState([]);
  const [taniBilgileri, setTaniBilgileri] = useState([]);
  const maxDisplayItems = 2;

  useEffect(() => {
    fetchHastaBilgileri();
    fetchTaniBilgileri();
  }, []);

  const fetchHastaBilgileri = async () => {
    try {
      const response = await axios.get("http://localhost:8080/hasta/all");
      setHastaBilgileri(response.data);
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
    <div>
      <h2 style={{ textAlign: "center" }}>Ana Sayfa</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card className="mainCard" style={{width:"300px"}}>
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
          <Card className="mainCard" style={{width:"300px"}}>
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
      </Grid>
    </div>
  );
};

export default HomePage;

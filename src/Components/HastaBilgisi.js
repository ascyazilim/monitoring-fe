import React, { useState, useEffect } from "react";
import { Card, Button} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const HastaBilgisi = () => {
  const [hastaBilgileri, setHastaBilgileri] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get("http://localhost:8080/hasta/all");
        setHastaBilgileri(response.data);
      }catch(error){
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{display: "grid", placeItems:"center"}}>
      <Card style={{width: '400px'}}>
        <h2 style={{textAlign:"center"}}>Hasta Bilgileri Listesi</h2>
        <div>
          {hastaBilgileri.map((hasta) => (
            <Card key={hasta.id} style={{margin: "10px", padding:"10px", textAlign:"center"}}>
              <div>ID: {hasta.id}</div>
              <div>Ad: {hasta.ad}</div>
              <div>SoyAd: {hasta.soyad}</div>
              <Link to={`/hasta-detay/${hasta.id}`}>
                <Button variant="contained" color="primary">
                    Detayı Görüntüle
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </Card>
      
    </div>
  );
};

export default HastaBilgisi;

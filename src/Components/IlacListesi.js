import React, { useState, useEffect } from "react";
import { Card, Button} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Card.css"

const IlacListesi = () => {
    const [ilacList, setIlacList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8080/ilac-list'
                );
                setIlacList(response.data);
            }catch (error){
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);


  return (
    <div className="mainDiv">
      <Card className="mainCard" style={{width:"300px"}}>
        <h2 className="mainCardH2">İlaç Listesi</h2>
        <div>
          {ilacList.map((ilac) => (
            <Card key={ilac.id} style={{margin: "10px", padding:"10px", textAlign:"center"}}>
              <div>ID: {ilac.id}</div>
              <div>Ad: {ilac.ilacAdi}</div>
              <div>SoyAd: {ilac.barkod}</div>
              <Link to={`/ilac-list-detay/${ilac.id}`}>
                <Button variant="contained" color="primary">
                    Detay
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </Card>
      
    </div>
  );
};

export default IlacListesi;
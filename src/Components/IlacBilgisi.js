import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Card, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function IlacBilgisi() {

    const [ilacBilgisi, setIlacBilgisi] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8080/ilac-bilgisi'
                );
                setIlacBilgisi(response.data);
            }catch (error){
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);
  return (
    <div style={{display:"grid", placeItems:"center"}}>
        <Card style={{width: '400px'}}>
            <h2 style={{textAlign: "center"}}>İlaç Bilgisi</h2>
            <div>
                {ilacBilgisi.map((ilac) => (
                    <Card key={ilac.id} style={{margin: "10px", padding:"10px", textAlign:"center"}}>
                        <div>ID: {ilac.id}</div>
                        <div>Barkod: {ilac.barkod}</div>
                        <div>Adet: {ilac.adet}</div>
                        <Link to={`/ilac-detay/${ilac.id}`}>
                            <Button variant='contained' color='primary'>
                                Detay
                            </Button>
                        </Link>
                    </Card>
                ))}
            </div>
        </Card>
    </div>
  );
}

export default IlacBilgisi;

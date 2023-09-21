import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DoktorList() {

    const [doktorList, setDoktorList] = useState([]);

    useEffect(() => {
        const fetchData = async ()=> {
            try{
                const response = await axios.get("http://localhost:8080/doktor-list");
                setDoktorList(response.data);
            } catch (error){
                console.error("Error: ", error);
            } 
        };
        fetchData();
    }, []);
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Doktor Listesi</h2>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Dr Adı</TableCell>
                        <TableCell>Dr Soyadı</TableCell>
                        <TableCell>Dr Diploma No</TableCell>
                        <TableCell>Dr Tescil No</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {doktorList.map((doktor) => (
                        <TableRow key={doktor.id}>
                            <TableCell>{doktor.id}</TableCell>
                            <TableCell>{doktor.drAdi}</TableCell>
                            <TableCell>{doktor.drSoyadi}</TableCell>
                            <TableCell>{doktor.drDiplomaNo}</TableCell>
                            <TableCell>{doktor.drTescilNo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default DoktorList;

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import "./Card.css";

const TaniListesi = () => {
  const [taniList, setTaniList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTaniListesi = async () => {
      try {
        const response = await axios.get("http://localhost:8080/tani-list");
        setTaniList(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Veri alınamadı: ", error);
      }
    };
    fetchTaniListesi();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70, headerClassName: "custom-header" },
    { field: "icd10Kodu", headerName: "ICD-10 Kodu", width: 150, headerClassName:"custom-header" },
    { field: "taniAdi", headerName: "Tanı Adı", width: 400, headerClassName: "custom-header" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 400,
        width: 600,
      }}
    >
      <div style={{ flex: 1, overflowY: "auto"}}>
        {loading ? (
          <p>Veriler yükleniyor...</p>
        ) : (
          <DataGrid
            rows={taniList}
            columns={columns}
            pageSize={5} 
            checkboxSelection={false}
            disableSelectionOnClick
            pageSizeOptions={[5, 10, 15, 20, 100]}
          />
        )}
      </div>
    </div>
  );
};

export default TaniListesi;

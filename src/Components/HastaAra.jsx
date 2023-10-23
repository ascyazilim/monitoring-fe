import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const HastaAra = () => {
  const [aramaId, setAramaId] = useState("");
  const [hasta, setHasta] = useState(null);
  const [hata, setHata] = useState("");

  const hastaAra = () => {
    axios
      .get(`http://localhost:8080/hasta/${aramaId}`)
      .then((response) => {
        setHasta([response.data]);
        setHata("");
      })
      .catch((error) => {
        console.error("Hasta bilgileri çekilirken bir hata oluştu.", error);
        setHasta([]);
        setHata("Hasta bilgisi bulunamadı");
      });
  };

  return (
    <div>
      <h1>Hasta Ara</h1>
      <input
        type="text"
        value={aramaId}
        onChange={(e) => setAramaId(e.target.value)}
        placeholder="Hasta ID girin"
      />
      <button onClick={hastaAra}>Ara</button>

      {hata && <div style={{color: "red"}}>{hata}</div>}

      <ul>
        {hasta.map((h) => (
          <li key={h.id}>{h.ad} {h.soyad}</li>
        ))}
      </ul>
    </div>
  );
};

export default HastaAra;

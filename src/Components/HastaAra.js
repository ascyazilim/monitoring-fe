import React, { useState } from "react";
import axios from "axios";

function HastaAra() {
  const [aramaAdi, setAramaAdi] = useState("");
  const [aramaSonuclari, setAramaSonuclari] = useState(null);

  const handleAramaAdiChange = (e) => {
    setAramaAdi(e.target.value);
  };

  const handleAra = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hasta/all?adi=${aramaAdi}`
      );
      if(response.data.length > 0){
        const hasta = response.data[0];
        setAramaSonuclari(hasta);
      }else{
        setAramaSonuclari("Aranan hasta bulunamadı.");
      }
    } catch (error) {
      console.error("Arama hatası:", error);
      setAramaSonuclari("Arama sırasında bir hata oluştu.");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Hasta Adı"
          value={aramaAdi}
          onChange={handleAramaAdiChange}
        />
        <button onClick={handleAra}>Ara</button>
      </div>
    </div>
  );
}

export default HastaAra;
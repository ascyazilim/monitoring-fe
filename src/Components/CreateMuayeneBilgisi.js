import axios from "axios";
import React, { useState } from "react";

function CreateMuayeneBilgisi() {
  const [formData, setFormData] = useState({
    bransKodu: "",
    drTescilNo: "",
    sutKodu: "",
    hizmetSunucuRefNo: "",
    islemSiraNo: "",
    muayeneTarihi: "",
    ozelDurum: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/muayene-bilgisi/create",
        formData
      );
      console.log("Response: ", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Muayene Bilgisi Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Branş Kodu:</label>
          <input
            type="text"
            name="bransKodu"
            value={formData.bransKodu}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dr. Tescil No</label>
          <input
            type="text"
            name="drTescilNo"
            value={formData.drTescilNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>SUT Kodu:</label>
          <input
            type="text"
            name="sutKodu"
            value={formData.sutKodu}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hizmet Sunucu Ref No:</label>
          <input
            type="text"
            name="hizmetSunucuRefNo"
            value={formData.hizmetSunucuRefNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>İşlem Sıra No:</label>
          <input
            type="text"
            name="islemSiraNo"
            value={formData.islemSiraNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Muayene Tarihi:</label>
          <input
            type="date"
            name="muayeneTarihi"
            value={formData.muayeneTarihi}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Özel Durum:</label>
          <input
            type="text"
            name="ozelDurum"
            value={formData.ozelDurum}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Ekle</button>
        </div>
      </form>
    </div>
  );
}

export default CreateMuayeneBilgisi;

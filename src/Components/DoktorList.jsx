
import axios from "axios";
import "./DoktorList.css";
import React, { useEffect, useState } from "react";

function DoktorList({ onSelectedItemsChange, onClose }) {
  const [doktorList, setDoktorList] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/doktor-list");
        setDoktorList(response.data);
      } catch (error) {
        console.error("Veri alınamadı: ", error);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (doktor) => {
    if (selectedOptions.some((option) => option.id === doktor.id)) {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option.id === doktor.id)
      );
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, doktor]);
    }
  };
  const handleAddOption = () => {
    onSelectedItemsChange(selectedOptions);
    setSelectedOptions([]);
    onClose();
  };

  return (
    <div className="doktor-ekle-modal">
      <h2>Doktor Listesi</h2>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="scrollable-liste">
        <table>
          <thead>
            <tr>
              <th className="sec-baslik">Seç</th>
              <th className="dradi-baslik">Dr Adı</th>
              <th className="drsoyadi-baslik">Dr Soyadı</th>
            </tr>
          </thead>
          <tbody>
            {doktorList.map((doktor) => (
              <tr key={doktor.id}>
                <td className="chec-content">
                  <input
                    type="checkbox"
                    value={doktor.drAdi}
                    onChange={() => handleCheckboxChange(doktor)}
                  />
                </td>
                <td className="dradi-content">{doktor.drAdi}</td>
                <td className="drsoyadi-content">{doktor.drSoyadi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-button" onClick={handleAddOption}>
        Ekle
      </button>
      {/* <TableContainer component={Paper}>
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
        </TableContainer> */}
    </div>
  );
}

export default DoktorList;

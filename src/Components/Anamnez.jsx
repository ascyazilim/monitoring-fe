import React from 'react';
import "./Anamnez.css";
import { TextField } from '@mui/material';
import { useState } from 'react';
import TaniEkle from './TaniEkle';

function Anamnez() {

    const [isModalOpenTani, setModalOpenTani] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedIstemList, setSelectedItemList] = useState([]);

    const handleOpenModalTani = () => {
        setModalOpenTani(true);
    }

    const handleCloseModalTani = () => {
        setModalOpenTani(false);
    }

    const addToTable = (selectedOption) => {
        setTableData([...tableData, selectedOption]);
      };

    const handleSelectedTaniListChange = (selectedItems) => {
        setSelectedItemList(selectedItems);
    };


  return (
    <div className='main'>
        <h3>Muayene</h3>
        <div className='muayene-top'>
            <div className='form-text'>
                <form className='main-form'>
                    <div className='sikayet'>
                        <label for="sikayet">Şikayet:</label>
                        <textarea cols="45" rows= "4"></textarea>
                    </div>
                    <div className='hikaye'>
                        <label for="hikaye">Hikaye:</label>
                        <textarea cols="45" rows="4"></textarea>
                    </div>
                </form>
            </div>
            <div className='form-doktor'>
                <form className='doktor-form'>
                    <div className='sikayet-doktor'>
                        <select name="sikayet-doktor" id="sikayet-doktor">
                            <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
                            <option value="doktor2">Dr. Betül Öztürk</option>
                            <option value="doktor3">Dr. Erman Kavlu</option>
                            <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
                            <option value="doktor5">Doç.Dr. Hakan Demirel</option>
                        </select>
                        <input type='date' id='sikayet-date' name='sikayet-date' />
                    </div>
                    <div className='hikaye-doktor'>
                        <select name="hikaye-doktor" id="hikaye-doktor">
                            <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
                            <option value="doktor2">Dr. Betül Öztürk</option>
                            <option value="doktor3">Dr. Erman Kavlu</option>
                            <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
                            <option value="doktor5">Doç.Dr. Hakan Demirel</option>
                        </select>
                        <input type='date' id='hikaye-date' name='hikaye-date' />
                    </div>
                </form>
            </div>
        </div>

        <div className='muayene-bottom'>
        <div className='form-text'>
                <form className='main-form'>
                    <div className='ozgecmis'>
                        <label for="ozgecmis">Özgeçmiş:</label>
                        <textarea cols="45" rows= "4"></textarea>
                    </div>
                    <div className='soygecmis'>
                        <label for="soygecmis">Soygeçmiş:</label>
                        <textarea cols="45" rows="4"></textarea>
                    </div>
                </form>
            </div>
            <div className='form-doktor'>
                <form className='doktor-form'>
                    <div className='ozgecmis-doktor'>
                        <select name="ozgecmis-doktor" id="ozgecmis-doktor">
                            <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
                            <option value="doktor2">Dr. Betül Öztürk</option>
                            <option value="doktor3">Dr. Erman Kavlu</option>
                            <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
                            <option value="doktor5">Doç.Dr. Hakan Demirel</option>
                        </select>
                        <input type='date' id='ozgecmis-date' name='ozgecmis-date' />
                    </div>
                    <div className='soygecmis-doktor'>
                        <select name="soygecmis-doktor" id="soygecmis-doktor">
                            <option value="doktor1">Prof.Dr. Ali Cebecioğlu</option>
                            <option value="doktor2">Dr. Betül Öztürk</option>
                            <option value="doktor3">Dr. Erman Kavlu</option>
                            <option value="doktor4">Uzm.Dr. Hacı Nadir Yalçın</option>
                            <option value="doktor5">Doç.Dr. Hakan Demirel</option>
                        </select>
                        <input type='date' id='soygecmis-date' name='soygecmis-date' />
                    </div>
                </form>
            </div>
        </div>

        <div className='alerji'>
            <label for="alerji">Alerji:</label>
            <textarea name="alerji" id="alerji" cols="103" rows="2"></textarea>
        </div>

        <div className='sigara'>
            <label for="sigara" id="sigara-baslik">Sigara:</label>          
            <input type="checkbox" />
            <label for="yok">Yok</label>
            <input type="checkbox" />
            <label for="var">Var</label>
            <label for="aciklama">Açıklama</label>
            <textarea name="aciklama" id="aciklama" cols="79" rows="2"></textarea>
        </div>

        <div className='grip-asisi'>
            <label for="girp-asisi" id="grip-baslik">Grip Aşısı:</label>          
            <input type="checkbox" />
            <label for="yok">Yok</label>
            <input type="checkbox" />
            <label for="var">Var</label>
            <label for="aciklama">Açıklama</label>
            <textarea name="aciklama" id="aciklama" cols="79" rows="2"></textarea>
        </div>
        <div className='tani-ekle'>
            <label for="tani">Tanı: </label>
            <input onClick={handleOpenModalTani} type="text" value={selectedIstemList.join(', ')}/>
        </div>

        <div className='alt-menu'>
            <button>Anamnez Ekle</button>
            <button>Anamnez Notları</button>
            <button>Hasta Sonuçları</button>
            <button onClick={handleOpenModalTani}>Tanı<br/> Ekle</button>
            {isModalOpenTani && <TaniEkle onClose={handleCloseModalTani} addToTable={addToTable} onSelectedItemsChange={handleSelectedTaniListChange} />}
        </div>

    </div>

  );
}

export default Anamnez;
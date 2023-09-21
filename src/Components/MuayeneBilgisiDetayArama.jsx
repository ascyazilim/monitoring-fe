import React, { useState } from 'react'

function MuayeneBilgisiDetayArama({ onAramaSubmit }) {
    const [searchId, setSearchId] = useState('');

    const handleInputChange = (e) => {
        setSearchId(e.target.value);
    };

    const handleSubmit = () => {
        onAramaSubmit(searchId);
    };
  return (
    <div>
        <input
            type='text'
            placeholder='ID'
            value={searchId}
            onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Ara</button>
    </div>
  );
}

export default MuayeneBilgisiDetayArama;

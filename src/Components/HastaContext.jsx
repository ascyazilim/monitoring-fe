import { createContext, useContext, useState } from "react"

const HastaContext = createContext();

export const useHastaContext = () => {
    return useContext(HastaContext);
};

export const HastaProvider = ({children}) => {
    const [hastaBilgileri, setHastaBilgileri] = useState([]);

    const value = {
        hastaBilgileri,
        setHastaBilgileri,
    };

    return (
        <HastaContext.Provider value={value}></HastaContext.Provider>
    );
};
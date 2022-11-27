import React,{ useState, useEffect, createContext} from "react";
import axios from "axios";
export const PetContext = createContext();

const BASEURL ="http://localhost:9000/pets";

export const PetContextProvider =({ children }) => {

    const [pets, setPets] = useState([]);
    

    useEffect(()=> {

        const getPets = async () => {
            const petsApi= await axios.get(BASEURL);
            setPets(petsApi.data)
        };
        getPets();
    
    },[]);

    
    return (
        <PetContext.Provider value={{pets}}>
      {children}
       </PetContext.Provider>
    )    
}
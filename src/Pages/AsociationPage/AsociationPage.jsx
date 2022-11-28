import axios from "axios";
import React, { useEffect, useState } from 'react'
import SearchComponent from "../../Components/SearchComponent/SearchComponent";

const AsociationPage = () => {

    const [allProtectors, setProtectors] = useState([]);
    const [searchProtector, setSearchProtector] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get("http://localhost:8000/animalProtector/user");
            setProtectors(data);
        };
        getData()

    }, []);
    const filterPets = allProtectors.filter((protector) => protector.name.toLowerCase().includes(searchProtector))

  return (
    <div>AsociationPage
        <div>
        <SearchComponent setSearchPj={setSearchProtector}></SearchComponent>
        </div>

        {filterPets.map((item, index) => {
            return (
            <div className="c-adopt-gallery-card">
                <div className="c-adopt-gallery-card__img" >
                        <img className="image" src={item.photo} alt={item.name} />
                    <div className="c-adopt-gallery-card__text">
                        <h4>{item?.name}</h4>
                        <h6>{item?.mail}</h6>
                    </div>
                </div>
                <button><img src='./assets/icons/favo.png' alt='favorites'/></button> 
                
            </div> 
            )
        })} 
    </div>
  )
}

export default AsociationPage
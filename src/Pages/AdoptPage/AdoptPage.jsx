import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent"
import SearchComponent from "../../Components/Search/SearchComponent";
import Search from "../../Components/Search/SearchComponent";
import SimpleBar from 'simplebar-react';

import "./AdoptPage.scss"
import ButtonBlueUsers from "../../Components/ButtonBlueUsers/ButtonBlueUsers";



const AdoptPage = () => {
    const navigate = useNavigate();
    const [allPets, setPets] = useState([]);
    const [searchPet, setSearchPet] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get("http://localhost:8000/pets");
            setPets(data);
        };
        getData()

    }, []);

    const filterPets = allPets.filter((pets) => pets.name.toLowerCase().includes(searchPet)) // esto es el filtro 4

    return (
        <>
            <div className="p-adopt-container">
               <SearchComponent setSearchPj={setSearchPet}></SearchComponent>  
                <div className="p-adopt-holder"> 
                    <div className="p-adopt-menu">
                        <h6>Animales en adopcion</h6>
                        <button className="c-button-login" onClick={() => navigate("/Filter")}>Filter </button>
                        <ButtonBlueUsers title={"Estado de la adopción"} route={"MainPage"} img={"./assets/icons/donate.png"}></ButtonBlueUsers>
                        
                    </div>
                    <SimpleBar className="c-adopt-gallery-holder">
                        <div className="c-adopt-gallery-holder__box">
                                {filterPets.map((item, index) => {
                                    return (
                                        <div className="c-adopt-gallery-card">
                                        <Link to={`/AdoptPage/${item._id}`}>
                                            <div className="c-adopt-gallery-card__img" >
                                                    <img className="image" src={item.photo} alt={item.name} />
                                                <div className="c-adopt-gallery-card__text">
                                                    <h4>{item?.name}</h4>
                                                    <h6>{item?.condition}</h6>
                                                </div>
                                            </div>
                                        </Link>
                                        </div>
                                        
                                    )
                                })}
                            </div>                        
                    </SimpleBar>
                </div>
            </div> 
            <NavbarComponent />
            </>
    )
}

export default AdoptPage
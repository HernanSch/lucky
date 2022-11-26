import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent"
import Search from "../../Components/Search/Search";

import "./AdoptPage.scss"



const AdoptPage = () => {
   
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
            <div>
                <Search setSearchPj={setSearchPet}></Search>
                
            </div>  
            <div className="p-adopt-container">     
                <div>
                    <div>
                        <h3>Animales en adopcion</h3>
                    </div>
                    <div className="generalBoxChar">

                        <div className="charContainer">
                            <div className="barBox">

                                {filterPets.map((item, index) => {

                                    return (

                                        <Link to={`/AdoptPage/${item._id}`}>

                                            <div className="charBox" >
                                                <div>
                                                    <img className="image" src={item.photo} alt="" />
                                                </div>

                                                <div className="namesChar">
                                                    <div className="backg">
                                                        <h2>{item?.name}</h2>
                                                        <h2>{item?.condition}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavbarComponent />
        </>
    )
}

export default AdoptPage
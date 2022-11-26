import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent"
import "./AdoptPage.scss"



const AdoptPage = () => {

  const [allPets, setPets] = useState ([]);
  const [searchPet, setSearchPet] = useState([]) // esta forma parte del buscador cambiar nombres 1º
  useEffect(() => {
      const getData = async () => {
      const {data} = await axios.get("http://localhost:9000/pets");
      setPets(data);
  
      };
      getData()

  },[]);

  const filterPets = allPets.filter((pets)=> pets.name.toLowerCase().includes(searchPet)) // esto es el filtro 4
  
  return (
    <>
    <div className="p-adopt-container">
    <div>
      <div>
        <h3>Animales en adopcion</h3>
      </div>
      <div className="generalBoxChar">

          <div className="charContainer">
              <div className="barBox">

                  {filterPets.map((item, index) =>{

                  return(

                          <Link  to={`/AdoptPage/${item._id}`}>

                              <div className="charBox" key={index}>
                                  <div>
                                      <img className="image" src={item.photo} alt="" /> 
                                  </div>

                                  <div className="namesChar">
                                      <div className="backg">
                                          <h2 className="textOn">{item?.name}</h2>
                                          <h2 className="textOn">{item?.age}</h2>
                                          <h2 className="textOn">{item?.record}</h2>
                                          <h2 className="textOn">{item?.condition}</h2>
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
    <NavbarComponent/>
    </>
  )
}

export default AdoptPage
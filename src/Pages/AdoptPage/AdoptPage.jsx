import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import SimpleBar from "simplebar-react";

import "./AdoptPage.scss";
import ButtonBlueUsers from "../../Components/ButtonBlueUsers/ButtonBlueUsers";

const AdoptPage = () => {
  
  const [filtro,setFiltro] = useState(false);
  const [species,setSpecies] = useState(["perro", "gato", "pajaro"])
  const [sex,setSex] = useState(["macho", "hembra"])
  const [size,setSize] = useState(["pequeño", "mediano", "grande"])
 
  
  
  const [allPets, setPets] = useState([]);
  const [searchPet, setSearchPet] = useState([]);
  
 
  let perro = false;
  let gato = false;
  let pajaro = false;
  let macho = false;
  let hembra = false;
  let pequeño = false;
  let grande = false;
  let mediano = false;
  const filFunc = () => {setFiltro(!filtro)};
  const dogFunc = () => {
    perro = !perro;
  };
  const catFunc = () => (gato = !gato);
  const birdFunc = () => (pajaro = !pajaro);
  const machoFunc = () => {
    macho = !macho;
    hembra = false;
  };
  const hembraFunc = () => {
    hembra = !hembra;
    macho = false;
  };
  const pequeFunc = () => {
    pequeño = !pequeño;
    mediano = false;
    grande = false;
  };
  const medianoFunc = () => {
    mediano = !mediano;
    pequeño = false;
    grande = false;
  };
  const grandeFunc = () => {
    grande = !grande;
    mediano = false;
    pequeño = false;
  };

  const filtroFunc = () => {
    if (perro) {
      setSpecies(["perro"]) ;
    } else if (gato) {
      setSpecies(["gato"]);
    }  else if (pajaro) {
      setSpecies(["pajaro"]);
    }else{
      setSpecies(["perro","gato","pajaro"])
    }
    if (macho) {
      setSex(["macho"]);
    } else if (hembra) {
      setSex(["hembra"]);
    }else{
      setSex(["macho","hembra"])
    }
    if (pequeño) {
      setSize(["pequeño"]);
    } else if (mediano) {
      setSize(["mediano"]);
    } else if (grande) {
      setSize(["grande"]);
    }else{
      setSize(["pequeño","mediano","grande"])
    }
    
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:8000/pets");
      setPets(data);
      console.log(data);
    };
    getData();
  }, []);

  const filterPets =  allPets.filter(
    (pets) =>
      //  ||
      (pets.sex === sex[0] || pets.sex === sex[1]) &&
      (pets.size === size[0] ||
        pets.size === size[1] ||
        pets.size === size[2]) &&
      (pets.species === species[0] ||
        pets.species === species[1] ||
        pets.species === species[2]) && (
      pets.name.toLowerCase().includes(searchPet))
      
  ); // esto es el filtro 4

  return (
    <>
      {filtro === false &&

      <div className="p-adopt-container">
        <SearchComponent setSearchPj={setSearchPet}></SearchComponent>
        <div className="p-adopt-holder">
          <div className="p-adopt-menu">
            <div className="p-adopt-pets">
              <a href="/">
                Mis mascotas
                <img src="./assets/icons/mS.png" alt="more" />
              </a>
              <p>Accede al perfil de tus mascotas</p>
              <img src="./assets/images/animals.png" alt="carousel" />
            </div>
            <ButtonBlueUsers
              title={"Estado de la adopción"}
              route={"AdoptionStatusPage"}
              img={"./assets/icons/empty.png"}
            ></ButtonBlueUsers>
            <div className="p-adopt-menu__filter">
              <h6>Animales en adopcion</h6>
              <button
                className="p-button-filter"
                onClick={() =>{filFunc()}}
              ></button>
            </div>
          </div>
          <SimpleBar className="c-adopt-gallery-holder">
            <div className="c-adopt-gallery-holder__box">
              {filterPets.map((item, index) => {
               
                return (
                 <>
                 {item.condition === "disponible" &&
                  <div className="c-adopt-gallery-card">
                    <Link to={`/AdoptPage/${item._id}`}>
                      <div className="c-adopt-gallery-card__img">
                        <img
                          className="image"
                          src={item.photo}
                          alt={item.name}
                        />
                        <div className="c-adopt-gallery-card__text">
                          <h4>{item?.name}</h4>
                          <h6>{item?.condition}</h6>
                        </div>
                      </div>
                      <button>
                        <img src="./assets/icons/favo.png" alt="favorites" />
                      </button>
                  
                    </Link>
                  </div>
                 }
                  </>
                );
              })}
            </div>
          </SimpleBar>
        </div>

        <NavbarComponent />
        </div>
        }
        {filtro === true &&
        <div>
          <h2>Filtros</h2>
          <button
            onClick={() => {
              dogFunc();
            }}
          >
            perro
          </button>
          <br></br>
          <button
            onClick={() => {
              catFunc();
            }}
          >
            gato
          </button>
          <br></br>
          <button
            onClick={() => {
              birdFunc();
            }}
          >
            pajaro
          </button>
          <br></br>
          <button
            onClick={() => {
              machoFunc();
            }}
          >
            macho
          </button>
          <br></br>
          <button
            onClick={() => {
              hembraFunc();
            }}
          >
            hembra
          </button>
          <br></br>
          <button
            onClick={() => {
              pequeFunc();
            }}
          >
            pequeño
          </button>
          <br></br>
          <button
            onClick={() => {
              medianoFunc();
            }}
          >
            mediano
          </button>
          <br></br>
          <button
            onClick={() => {
              grandeFunc();
            }}
          >
            grande
          </button>
          <br></br>
          <button
            onClick={() => {
              filtroFunc();
              filFunc();

            }}
          >
          
            filtro
          </button>
          </div>
      
        }
    </>
  );
};

export default AdoptPage;

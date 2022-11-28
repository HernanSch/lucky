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
        
        <div className="p-adopt-filter-close">
        <button className="o-c-button"
            onClick={() => {
              filtroFunc();
              filFunc();

            }}
          >
          
          <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <div className="p-adopt-filter-container">
          <div className="p-adopt-filter-holder">
          <h2>Filtros</h2>
          <div className="p-adopt-filter-button">
          
          <button className="p-adopt-filter-button__dog" onClick={() => {dogFunc();}}>Perro</button>
          
          <button className="p-adopt-filter-button__cat" onClick={() => {catFunc();}}>Gato</button>
          
          <button className="p-adopt-filter-button__rabbit" >Conejo</button>

          <button className="p-adopt-filter-button__hamster" >Cobaya</button>

          <button className="p-adopt-filter-button__coati" >Pequeño mamifero</button>

          <button className="p-adopt-filter-button__ferret" >Hurón</button>

          <button className="p-adopt-filter-button__fish" >Pez</button>

          <button className="p-adopt-filter-button__snake" >Reptil</button>

          <button className="p-adopt-filter-button__frog" >Anfibio</button>

          <button className="p-adopt-filter-button__spider" >Arácnido o Insecto</button>
          
          <button className="p-adopt-filter-button__bird" onClick={() => {birdFunc();}}>pajaro</button>

          <div className="p-adopt-filter-button-sex">
            
          <button className="p-adopt-filter-button-sex__boy" onClick={() => {machoFunc();}}>macho</button>
          
          <button className="p-adopt-filter-button-sex__girl" onClick={() => {hembraFunc();}}>hembra</button>

          </div>
          
          <div className="p-adopt-filter-button-size">
        
          <button className="p-adopt-filter-button-size__small" onClick={() => {pequeFunc();}}>pequeño</button>
          
          <button className="p-adopt-filter-button-size__mid" onClick={() => {medianoFunc();}}>mediano</button>
          
          <button className="p-adopt-filter-button-size__big" onClick={() => {grandeFunc();}}>grande</button>
          
          </div>
          </div>
          <div className="p-adopt-filter-button__apply">
          <button  onClick={() => {filtroFunc();filFunc(); }}>Aplicar</button>
          </div>
          </div>
          </div>
          </div>
        }
    </>
  );
};

export default AdoptPage;

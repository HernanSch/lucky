import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./HealthComponent.scss"

const HealthComponent = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState({})
  let vacunado = 'Si'
  let desparasitado = 'Si'
  let sano = 'Si'
  let esterilizado = 'Si'
  let identicado = 'Si'
  let microchi = 'Si'
  

  useEffect(() => {
    const getPetById = async () =>{
      const {data} = await axios.get(`http://localhost:8000/pets/${id}`)
      console.log(data.pet)
      setPet(data.pet);            
    };
    getPetById();
    },[]);
    console.log(pet.animalProtectors)
    pet.vaccinated ? vacunado = 'Si' : vacunado = 'No'
    pet.dewormed ? desparasitado = 'Si' : desparasitado = 'No'
    pet.healthy ? sano = 'Si' : sano = 'No'
    pet.sterilized ? esterilizado = 'Si' : esterilizado = 'No'
    pet.identified ? identicado = 'Si' : identicado = 'No'
    pet.microchip ? microchi = 'Si' : microchi = 'No'
  return (
    <div className='c-health-container'>
      <div className='c-health-holder'>
        <h6>Vacunado {vacunado}</h6>  
        <h6>Desparasitado {desparasitado}</h6>  
        <h6>Sano {sano}</h6>   
        <h6>Esterilizado {esterilizado}</h6>
        <h6>Identificado {identicado}</h6>
        <h6>Microchip {microchi}</h6>
      </div>
          
    </div>
  )
}

export default HealthComponent
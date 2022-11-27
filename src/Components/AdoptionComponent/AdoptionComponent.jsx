import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./AdoptionComponent.scss"
const AdoptionComponent = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [pet, setPet] = useState({})
    let enviado = 'Si'
    
  
    useEffect(() => {
      const getPetById = async () =>{
        const {data} = await axios.get(`http://localhost:8000/pets/${id}`)
        console.log(data.pet)
        setPet(data.pet);            
      };
      getPetById();
      },[]);
      console.log(pet.animalProtectors)
      pet.delivery ? enviado = 'Sí, se envía a otra ciudad' : enviado = 'No se envía a otra ciudad'
    return (
        <div className='c-adoption-container'>
        <div className='c-adoption-holder'>
           
          <h6>{pet.requirements}</h6>  
          <h6>{pet.adoptionCost}</h6>   
          <h6>{enviado}</h6> 
      </div>
      </div>
    )
  }
  
export default AdoptionComponent
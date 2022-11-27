import axios from 'axios';
import "./PetDetailPage.scss"
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const PetDetailPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  
  const [pet, setPet] = useState({})
  

  useEffect(() => {
    const getPetById = async () =>{
      const {data} = await axios.get(`http://localhost:8000/pets/${id}`)
      console.log(data.pet)
      setPet(data.pet);            
    };
   
    getPetById();
    },[]);
    console.log(pet.animalProtectors)

  return (
    <div>
    <div className='Container'> 
      <div className='petsContainer'>
        <h1>{pet.name}</h1>        
        <img src={pet.photo} alt="" />   
        <h1>{pet.species}</h1>  
        <h1>{pet.category}</h1>   
        <h1>{pet.condition}</h1>
        <h1>{pet.city}</h1>
        <h1>{pet.animalProtectors}</h1>             
      
      </div>
           
    </div>
    
    </div>
  )
}

export default PetDetailPage

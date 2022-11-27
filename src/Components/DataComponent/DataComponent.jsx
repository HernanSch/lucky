import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./DataComponent.scss"
const DataComponent = () => {
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
    <div className='c-data-container'>
      <div className='c-data-holder'>
         <h6>{pet.species}</h6>  
        <h6>{pet.birthday}</h6>  
        <h6>{pet.sex}</h6>   
        <h6>{pet.size}</h6>
        <h6>{pet.weigth}</h6>
        <h6>{pet.record}</h6>              
    </div>
    </div>
  )
}

export default DataComponent
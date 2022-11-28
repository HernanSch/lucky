import axios from 'axios';
import "./AdoptionStatusPage.scss"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";



const AdoptionStatusPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  
  const [user, setUser] = useState({})
  

  useEffect(() => {
    const getPetById = async () =>{
      const {data} = await axios.get(`http://localhost:9000/users/user/${id}`)
      console.log(data.pet)
      setUser(data.pet);            
    };
   
    getPetById();
    },[]);
  return (
    <div>AdoptionStatusPage
    
      <div className='Container'> 
        <div className='petsContainer'>
          
          <h1>{user.animalProtectors}</h1>             
        
        </div>
           
    </div>

    </div>
  )
}

export default AdoptionStatusPage

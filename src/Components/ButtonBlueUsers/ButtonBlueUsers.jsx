import './ButtonBlueUsers.scss';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ButtonBlueUsers = ({title,img,route}) => {
    const navigate = useNavigate();
  return (
    <div>
       <button className="c-button-users" onClick={() => navigate(`/${route}`)}>
       <img src={img} alt=""></img> {title} </button>
    </div>
  )
}

export default ButtonBlueUsers
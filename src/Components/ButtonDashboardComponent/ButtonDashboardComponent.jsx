import '/ButtonDashboardComponent.scss';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ButtonDashboardComponent = ({title}) => {
    const navigate = useNavigate();
  return (
    <div>
       <button className="c-button-login" onClick={() => navigate("/")}>{title} </button>
    </div>
  )
}

export default ButtonDashboardComponent
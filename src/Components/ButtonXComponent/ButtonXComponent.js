
import { useNavigate } from "react-router-dom";
import React from 'react'
import './ButtonXComponent.scss'

const BottonX = () => {
const navigate = useNavigate();
  return (
    <div>
       <button className="c-button-X" onClick={() => navigate("/")}>X</button>
    </div>
  )
}

export default BottonX
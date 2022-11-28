import { useNavigate } from "react-router-dom";
import React from 'react'
import './ButtonXComponent.scss'

const BottonXCompoment = () => {
const navigate = useNavigate();
  return (
    <div>
       <button className="c-button-X" onClick={() => navigate("/Election")}>X</button>
    </div>
  )
}

export default BottonXCompoment
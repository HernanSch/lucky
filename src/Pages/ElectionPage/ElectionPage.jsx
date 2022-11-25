import "./ElectionPage.scss"
import React from 'react'

const ElectionPage = () => {
  return (
    <div className="c-election-container">
      <div className="c-election-content">
      <p>¿Cómo quieres entrar?</p>
      <button>Uusario</button>
      <button>Asociación Protectora</button>
      <a href="/">Registrarse en otro momento</a>
      </div>
    </div>
  )
}

export default ElectionPage
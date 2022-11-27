import "./FilterPage.scss"
import React from 'react'
import { useEffect,useState } from 'react'

const FilterPage = () => {
  const [petsFiltro,setPetsFiltro] = useState([])
const [busqueda, setBusqueda] = useState("")
const [pets, setPets] = useState([])
const perro = false;
const gato = false;
const ballena = false;
const pajaro = false;
const dogFunc = () => !perro;
const cons = () => console.log(perro);


 
  return (
    <div>
    <h2>Filtros</h2>
    <button onClick={() => {dogFunc()}}>perro</button>
    <br></br>
    <button onClick={() => {cons()}}>perest</button>
   
    </div>
  
  )
}

export default FilterPage
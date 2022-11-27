import React from 'react'

const SearchComponent = ({setSearchPj}) => { // aqui el nombre 2º
    const handleFind = (event) => {
        setSearchPj(event.target.value.toLowerCase()) // nombre de la funcion 3º
    }
  return (

    <div className="search">
        <input className="searchTerm" onChange={handleFind} type="text" placeholder="Buscar"/>
        <i class="fa fa-search"></i>
    </div>

  )
}

export default SearchComponent
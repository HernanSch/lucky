import "./NavbarComponent.scss"
import React from 'react'
import { NavLink } from "react-router-dom"

const NavbarComponent = () => {
  return (
    <div className="c-navbar-container">
      <ul>
        <li>
          <NavLink to='/'><button>Home</button></NavLink>
        </li>
        <li>
          <NavLink to='/MapPage'><button>Map</button></NavLink>
        </li>
        <li>
          <NavLink to='/AdoptPage'><button>Adopt</button></NavLink>
        </li>
        <li>
          <NavLink to='/ProfilePage'><button>Profile</button></NavLink>
        </li>
        <li>
          <NavLink to='/MorePage'><button>...</button></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavbarComponent
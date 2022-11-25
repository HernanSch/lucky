import "./NavbarComponent.scss"
import React from 'react'
import { NavLink } from "react-router-dom"

const NavbarComponent = () => {
  return (
    <div className="c-navbar-container">
      <ul>
        <li>
          <NavLink to='/' activeclassname={'active'}><button className="c-navbar-button__home"><i class="fa fa-home" aria-hidden="true"></i></button></NavLink>
        </li>
        <li>
          <NavLink to='/MapPage' activeclassname={'active'}><button className="c-navbar-button__map"><i class="fa fa-map-marker" aria-hidden="true"></i></button></NavLink>
        </li>
        <li>
          <NavLink to='/AdoptPage' activeclassname={'active'}><button className="c-navbar-button__adopt"><i class="fa fa-hand-peace-o" aria-hidden="true"></i></button></NavLink>
        </li>
        <li>
          <NavLink to='/ProfilePage' activeclassname={'active'}><button className="c-navbar-button__profile"><i class="fa fa-user-o" aria-hidden="true"></i></button></NavLink>
        </li>
        <li>
          <NavLink to='/MorePage' activeclassname={'active'}><button className="c-navbar-button__more"><i class="fa fa-list" aria-hidden="true"></i></button></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavbarComponent
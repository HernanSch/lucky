import "./NavbarComponent.scss"
import React from 'react'
import { NavLink } from "react-router-dom"
import { getCookieUtil } from "../../utils/getCookieUtil";

const NavbarComponent = () => {
  const stringUser = getCookieUtil('user');

  const user = JSON.parse(stringUser ? stringUser : '{}');
  console.log(user?.photo)

  return (
    <div className="c-navbar-container">
      <ul>
        <li>
          <NavLink to='/Main' activeclassname={'active'}><button className="c-navbar-button__home"><i class="fa fa-home" aria-hidden="true"></i></button></NavLink>
        </li>
        <li>
          <NavLink to='/MapPage' activeclassname={'active'}><button className="c-navbar-button__map"><i class="fa fa-map-marker" aria-hidden="true"></i></button></NavLink>
        </li>
        <li>
          <NavLink to='/AdoptPage' activeclassname={'active'}><button className="c-navbar-button__adopt"><i className="fa fa-hand-peace-o" aria-hidden="true"></i></button></NavLink>
        </li>
        <li>
          <NavLink to='/ProfilePage' activeclassname={'active'}><button className="c-navbar-button__profile"><img className="c-nav-img" src={user.photo} alt=""></img></button></NavLink>
        </li>
        <li>
          <NavLink to='/MorePage' activeclassname={'active'}><button className="c-navbar-button__more"><i className="fa fa-list" aria-hidden="true"></i></button></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavbarComponent
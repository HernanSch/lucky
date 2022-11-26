import React from 'react'
import ButtonBlueUsers from "../../Components/ButtonBlueUsers/ButtonBlueUsers"
import "./ProfilePage.scss"
import { getCookieUtil } from "../../utils/getCookieUtil";
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';

const ProfilePage = () => {

  const stringUser = getCookieUtil('user');
    
  const user = JSON.parse(stringUser ? stringUser : '{}');
  console.log(user?.photo)
 
  return (
    <div className='p-profile-container' >
      <div className=' foto-user'>
        <img src={user.photo} alt=""></img>
      </div>
      <div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Mi Perfil"} route={"MainPage"} img={"./assets/icons/girl-red.png"}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
         <ButtonBlueUsers title={"Direcciones"} route={"MainPage"} img={"./assets/icons/localization.png"}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Favoritos"} route={"MainPage"} img={"./assets/icons/favorites.png"}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Notificaciones"} route={"MainPage"} img={"./assets/icons/notification.png"}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Estado de la adopcion"} route={"MainPage"} img={"./assets/icons/estadoAdopcion.png"}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Apadrinar"} route={"MainPage"} img={"./assets/icons/sponsor.png"}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Donar"} route={"MainPage"} img={"./assets/icons/donate.png"}></ButtonBlueUsers>
        </div>
      </div>
      <NavbarComponent/>
    </div>
  )
}

export default ProfilePage
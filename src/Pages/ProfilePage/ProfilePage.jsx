import React from 'react'
import ButtonBlueUsers from "../../Components/ButtonBlueUsers/ButtonBlueUsers"
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent'
import "./ProfilePage.scss"


const ProfilePage = () => {
 
  return (
    <div className='p-profile-container' >
      <div className=' foto-user'>
        <img src="" alt=""></img>
      </div>
      <div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Mi Perfil"} route={"MainPage"} img={"./assets/icons/bird.png"}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
         <ButtonBlueUsers title={"Direcciones"} route={"MainPage"} img={""}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Favoritos"} route={"MainPage"} img={""}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Notificaciones"} route={"MainPage"} img={""}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Estado de la adopcion"} route={"MainPage"} img={""}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Apadrinar"} route={"MainPage"} img={""}></ButtonBlueUsers>
        </div>
        <div  className='button-container'>
          <ButtonBlueUsers title={"Donar"} route={"MainPage"} img={""}></ButtonBlueUsers>
        </div>
      </div>
      <NavbarComponent/>
    </div>
  )
}

export default ProfilePage
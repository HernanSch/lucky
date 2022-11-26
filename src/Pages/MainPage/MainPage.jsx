import React from 'react'
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";
import NewsGalleyHomeComponent from '../../Components/NewsGalleyHomeComponent/NewsGalleyHomeComponent';
import HelloUserComponent from '../../Components/HelloUserComponent/HelloUserComponent';
import "./MainPage.scss"

const MainPage = () => {
  return (
    

    <div className="p-main-container">
      <div className="p-main-holder">
        <div className='p-main-carousel'>
        <HelloUserComponent/>
        </div>
        <NewsGalleyHomeComponent/>
      </div>

      <NavbarComponent/>
      </div>
    
    
  )
}

export default MainPage
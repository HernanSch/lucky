import React from 'react'
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";
import NewsGalleyHomeComponent from '../../Components/NewsGalleyHomeComponent/NewsGalleyHomeComponent';
import "./MainPage.scss"

const MainPage = () => {
  return (
    

    <div className="p-main-container">
      <div className="p-home-carousel">
        
      </div>
      <NewsGalleyHomeComponent/>
      <NavbarComponent/>
      </div>
    
    
  )
}

export default MainPage
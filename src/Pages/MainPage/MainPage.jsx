import React from 'react'
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";
import NewsGalleyHomeComponent from '../../Components/NewsGalleyHomeComponent/NewsGalleyHomeComponent';

const MainPage = () => {
  return (
    

    <div className="p-main-container">

      <div className="p-homepage-container">
      <div className="p-homepage-carousel">

      </div>
        <NewsGalleyHomeComponent/>

      </div>

      
        <NavbarComponent/>
      
    </div>
    
    
  )
}

export default MainPage
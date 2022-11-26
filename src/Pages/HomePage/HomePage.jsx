import "./HomePage.scss"
import React from 'react'
import NewsGalleyHomeComponent from "../../Components/NewsGalleyHomeComponent/NewsGalleyHomeComponent";
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";




const HomePage = () => {

  return (

    
    <div className="p-homepage-container">
      <div className="p-homepage-carousel">

      </div>
        <NewsGalleyHomeComponent/>
        <NavbarComponent/>

    </div>





   



  )
}

export default HomePage
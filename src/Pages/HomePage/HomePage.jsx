import "./HomePage.scss"
import React from 'react'

import NewsGalleyHomeComponent from "../../Components/NewsGalleyHomeComponent/NewsGalleyHomeComponent";

import Botton from "../../Components/BottonDasboard/Botton"
import BottonX from "../../Components/ButtonXComponent/ButtonXComponent" 


const HomePage = () => {

  return (

    
    <div className="p-homepage-container">
        
        <NewsGalleyHomeComponent/>
        
        
      
    </div>

    <div>

    <div className="p-homepage-container">HomePage</div>
    {/* <Botton title={"Usuario"}></Botton>  */}
    
    </div>

  )
}

export default HomePage
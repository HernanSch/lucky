import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MapPage from "../MapPage/MapPage";
import AdoptPage from "../AdoptPage/AdoptPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import MorePage from "../MorePage/MorePage";
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";
import HomePage from '../HomePage/HomePage';
import OnboardingPage from '../OnboardingPage/OnboardingPage';
import RegAsocPage from '../RegAsocPage/RegAsocPage';
import RegUserPage from '../RegUserPage/RegUserPage';

const MainPage = () => {
  return (
    <Router>

    <div className="p-main-container">
      <header>
      
      </header>
      <main>
        <div>
          <Routes>
          <Route path='/RegUserPage' element={<RegUserPage/>}></Route>
          <Route path='/RegAsocPage' element={<RegAsocPage/>}></Route>
          <Route path='/OnboardingPage' element={<OnboardingPage/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/MapPage' element={<MapPage/>}></Route>
            <Route path='/AdoptPage' element={<AdoptPage/>}></Route>
            <Route path='/ProfilePage' element={<ProfilePage/>}></Route>
            <Route path='/MorePage' element={<MorePage/>}></Route>
            <Route path='/OnboardingPage' element={<OnboardingPage/>}></Route>
          </Routes>
        </div>

      </main>
      <footer>
        <NavbarComponent/>
      </footer>
    </div>
    
    </Router>
  )
}

export default MainPage
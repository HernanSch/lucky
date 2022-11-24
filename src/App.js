import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import MapPage from './Pages/MapPage/MapPage'
import AdoptPage from './Pages/AdoptPage/AdoptPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import MorePage from './Pages/MorePage/MorePage';
import OnboardingPage from './Pages/OnboardingPage/OnboardingPage';

function App() {
  return (
    <Router>

    <div>
      <header>

      </header>
      <main>
        <div>
          <Routes>
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
  );
}

export default App;

import './App.css';
import React,{ useState } from 'react';
import { IsLoggedContext } from './contexts/IsLoggedContext';
import { getCookieUtil } from "./utils/getCookieUtil";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import RegUserPage from "./Pages/RegAsocPage/RegAsocPage"
import RegAsocPage from "./Pages/RegAsocPage/RegAsocPage"
import OnboardingPage from "./Pages/OnboardingPage/OnboardingPage"
import HomePage from "./Pages/HomePage/HomePage"
import MapPage from "./Pages/HomePage/HomePage"
import AdoptPage from "./Pages/AdoptPage/AdoptPage"
import ProfilePage from "./Pages/ProfilePage/ProfilePage"
import MorePage from "./Pages/MorePage/MorePage"
import MainPage from "./Pages/MainPage/MainPage"
import SpinnerComponent from './Components/SpinnerComponent/SpinnerComponent';
import ElectionPage from './Pages/ElectionPage/ElectionPage';

function App() { 
  const [isLogged, setIsLogged] = useState(!!getCookieUtil('token'));
  return (
    <Router>
    <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}>

    <div>
      <header>
     <SpinnerComponent></SpinnerComponent>
     <ElectionPage></ElectionPage>
        
      </header>
      <main>
        <MainPage></MainPage>
      </main>
      <footer>

      </footer>




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
            <Route path='/MainPage' element={<MainPage/>}></Route>
            <Route path='/ElectionPage' element={<ElectionPage/>}></Route>

          </Routes>
        </div>
    </div>
    </IsLoggedContext.Provider>
    </Router>
  );
  
}

export default App;

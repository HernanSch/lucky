import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React,{ useState } from 'react';
import { IsLoggedContext } from './contexts/IsLoggedContext';
import { getCookieUtil } from "./utils/getCookieUtil";
import MainPage from './Pages/MainPage/MainPage';
import RegUserPage from './Pages/RegUserPage/RegUserPage';
import RegAsocPage from './Pages/RegAsocPage/RegAsocPage';
import OnboardingPage from './Pages/OnboardingPage/OnboardingPage';
import ElectionPage from './Pages/ElectionPage/ElectionPage';
import LoginAsocPage from './Pages/LoginAsocPage/LoginAsocPage';
import LoginUserPage from './Pages/LoginUserPage/LoginUserPage';
import HomePage from './Pages/HomePage/HomePage';
import MorePage from './Pages/MorePage/MorePage';
import MapPage from './Pages/MapPage/MapPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import AdoptPage from './Pages/AdoptPage/AdoptPage';
import SpinnerComponent from './Components/SpinnerComponent/SpinnerComponent';


function App() {
  const [isLogged, setIsLogged] = useState(!!getCookieUtil('token'));
  return (
    <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}>
      <Router>
    <div>
      <header>

        <SpinnerComponent/>
        {/* <ElectionPage/> */}


      </header>
      <main>
      {/* <RequireAuth/> */}
        <Routes>
          <Route path='/LoginUserPage' element={<LoginUserPage/>}></Route>
          <Route path='/LoginAsocPage' element={<LoginAsocPage/>}></Route>
          <Route path='/RegUserPage' element={<RegUserPage/>}></Route>
          <Route path='/RegAsocPage' element={<RegAsocPage/>}></Route>
          <Route path='/' element={<OnboardingPage/>}></Route>
          <Route path='/Election' element={<ElectionPage/>}></Route>
          <Route path='/Main' element={<MainPage/>}></Route>
            <Route path='/MapPage' element={<MapPage/>}></Route>
            <Route path='/AdoptPage' element={<AdoptPage/>}></Route>
            <Route path='/ProfilePage' element={<ProfilePage/>}></Route>
            <Route path='/MorePage' element={<MorePage/>}></Route>
          </Routes>



      </main>
      <footer>

      </footer>
    </div>
    </Router>
    </IsLoggedContext.Provider>
  );
  
}

export default App;

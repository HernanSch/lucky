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
import MorePage from './Pages/MorePage/MorePage';
import MapPage from './Pages/MapPage/MapPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import AdoptPage from './Pages/AdoptPage/AdoptPage';
import PetDetailPage from './Pages/PetDetailPage/PetDetailPage';
import SpinnerComponent from './Components/SpinnerComponent/SpinnerComponent';
import FilterPage from './Pages/FilterPage/FilterPage';
import AdoptFormPage from './Pages/AdoptFormPage/AdoptFormPage';
import AdoptionStatusPage from './Pages/AdoptionStatusPage/AdoptionStatusPage';


function App() {
  const [isLogged, setIsLogged] = useState(!!getCookieUtil('token'));
  const [user,setUser] = useState(null)

  return (
    <IsLoggedContext.Provider value={{ isLogged, setIsLogged,user,setUser }}>
    

      <Router>
    <div>
      <header>

        <SpinnerComponent/>


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
            <Route path='/AdoptFormPage' element={<AdoptFormPage/>}></Route>
            <Route path='/AdoptPage' element={<AdoptPage/>}></Route>
            <Route path='/AdoptPage/:id' element={<PetDetailPage/>}></Route>
            <Route path='/ProfilePage' element={<ProfilePage/>}></Route>
            <Route path='/MorePage' element={<MorePage/>}></Route>
            <Route path='/Filter' element={<FilterPage/>}></Route>
            <Route path='/AdoptionStatusPage' element={<AdoptionStatusPage/>}></Route>
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

import './App.css';

import React,{ useState } from 'react';
import HomePage from './Pages/HomePage/HomePage';
import MainPage from './Pages/MainPage/MainPage';
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import AuthButton from './Components/AuthButton/AuthButton';
import { IsLoggedContext } from './contexts/IsLoggedContext';
import { getCookieUtil } from "./utils/getCookieUtil";





import SpinnerComponent from './Components/SpinnerComponent/SpinnerComponent';


function App() {
  const [isLogged, setIsLogged] = useState(!!getCookieUtil('token'));
  return (
    <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}>

    <div>
      <header>
        <SpinnerComponent/>
      </header>
      <main>

        <MainPage/>

          <LoginPage></LoginPage>
          <RegisterPage></RegisterPage>
           <AuthButton></AuthButton>



      </main>
      <footer>

      </footer>
    </div>
    </IsLoggedContext.Provider>
  );
  
}

export default App;

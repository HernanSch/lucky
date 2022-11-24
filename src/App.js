import './App.css';
import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import MainPage from './Pages/MainPage/MainPage';
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage';



function App() {
  return (
    

    <div>
      <header>

      </header>
      <main>
        
        <MainPage/>
        {/* <LoginPage></LoginPage> */}
         <RegisterPage></RegisterPage>

      </main>
      <footer>

      </footer>
    </div>
    
  );
}

export default App;

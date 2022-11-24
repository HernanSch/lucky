import './App.css';
import React from 'react';
import MainPage from './Pages/MainPage/MainPage';
import SpinnerComponent from './Components/SpinnerComponent/SpinnerComponent';
import ElectionPage from './Pages/ElectionPage/ElectionPage';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    

    <div>
      <header>
        {/* <SpinnerComponent/> */}
        {/* <ElectionPage/> */}
      </header>
      <main>

        <MainPage/>

      </main>
      <footer>

      </footer>
    </div>
    
  );
}

export default App;

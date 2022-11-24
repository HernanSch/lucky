import './App.css';
import React from 'react';
import MainPage from './Pages/MainPage/MainPage';
import SpinnerComponent from './Components/SpinnerComponent/SpinnerComponent';


function App() {
  return (
    

    <div>
      <header>
        <SpinnerComponent/>
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

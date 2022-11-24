import React, { useEffect, useState } from "react";
import "./SpinnerComponent.scss";
import OnboardingPage from '../../Pages/OnboardingPage/OnboardingPage'
import MainPage from "../../Pages/MainPage/MainPage";
import ElectionPage from "../../Pages/ElectionPage/ElectionPage";

function SpinnerComponent() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 3000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="c-spinner-container">
              <span>Loading...</span>
              <div className="c-half-spinner"></div>
            </div>
          ) : (
            <div className="c-spinner-logo">
            
            <div className="c-spinner-completed"></div>
            </div>
            
          )}
        </>
      ) : (
        <>
          <ElectionPage/>
        </>
      )}
    </>
  );
}

export default SpinnerComponent;
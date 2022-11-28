import "./OnboardingPage.scss"
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import onboarding1 from '../../assets/images/onboarding1.png'
import onboarding2 from '../../assets/images/onboarding2.png'
import onboarding3 from '../../assets/images/onboarding3.png'
import ButtonXComponent from '../../Components/ButtonXComponent/ButtonXComponent'



function OnboardingPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  return (
    <div>
      <ButtonXComponent></ButtonXComponent>
    <div className="o-c-container">

    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block"
          src={onboarding1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Encuentra todo tipo de servicios que tienes cerca de ti</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block"
          src={onboarding2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Adopta desde tu móvil</h1>
          <p>Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={onboarding3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Si eres una asociación sube a tus peludos para darles más difusión</h1>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
    </div>

  );
}

export default OnboardingPage;

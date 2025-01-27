import styled, { keyframes } from "styled-components";

import imgAbout from "./img/imgAbout.jpeg";

const showIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

export const AboutSection = styled.section`
  width: 40%;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${showIn} ease;
  animation-timeline: view();
  animation-range: entry 15% cover 50%;
`;

export const AboutSectionImage = styled.section`
  width: 40%;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageArea = styled.img`
  width: 600px;
  min-height: 390px;
  margin-top: 2.5em;
`;

export const ImageText = styled.p`
  width: 600px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Carlito";
  color: #623e2a;
  border: 1px solid black;
`;

export const TitleTextSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  margin-bottom: 50px;
`;

export const TitleText = styled.h1`
  color: #623e2a;
  font-size: 50px;
  font-weight: 300;
  font-family: "Radley";
`;

export const AboutInfoText = styled.p`
  color: #623e2a;
  font-size: 20px;
  font-weight: 300;
  font-family: "Carlito";
  width: 70%;
  text-align: justify;
  text-indent: 2.5em;
  line-height: 1.3em;
  margin-bottom: 20px;
`;

export const AboutPage = () => {
  return (
    <>
      <AboutSection>
        <TitleTextSection>
          <TitleText>WHO </TitleText>
          <TitleText>ARE WE?</TitleText>
        </TitleTextSection>
        <AboutInfoText>
          Our Deep Convolutional Neural Network model began as part of a project
          for the FEICIPAZ science fair at Colégio Sinodal da Paz, RS, Novo
          Hamburgo, in which high school students Júlia Calcagno Mayer and
          Isabelly Heloisa Marques took part with the help of research
          supervisor Gabriela Soares Castilhos and co-supervisor Natalia Maynart
          Cadó.
        </AboutInfoText>
        <AboutInfoText>
          This project began in 2023, when we started phase I of the project by
          carrying out comprehensive research into how Artificial Intelligence
          worked in diagnosis, while in phase II, in 2024, we trained a Deep
          Convolutional Neural Network model for the detection of superficial
          extensive melanomas.
        </AboutInfoText>
      </AboutSection>
      <AboutSectionImage>
        <ImageArea src={imgAbout}></ImageArea>
        <ImageText>Isabelly Heloísa Marques e Júlia Calcagno Mayer</ImageText>
      </AboutSectionImage>
    </>
  );
};

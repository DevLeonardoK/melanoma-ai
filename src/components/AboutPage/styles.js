import styled, { keyframes } from "styled-components";

const showIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const AboutSection = styled.section`
  width: 40%;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${showIn} ease;
  animation-timeline: view();
  animation-range: entry 15% cover 50%;

  @media (max-width: 425px) {
    width: 85vw;
  }
`;

const AboutSectionImage = styled.section`
  width: 40%;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 85vw;
    min-height: 50vh;
  }
`;

const ImageArea = styled.img`
  width: 600px;
  min-height: 390px;
  margin-top: 2.5em;

  @media (max-width: 425px) {
    width: 350px;
    min-height: 250px;
    border-radius: 1.75rem;
    margin-top: 0;
  }
`;

const ImageText = styled.p`
  width: 600px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Carlito";
  color: #623e2a;
  border: 1px solid black;

  @media (max-width: 425px) {
    margin: 1.2rem 0;
  }
`;

const TitleTextSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  margin-bottom: 50px;

  @media (max-width: 425px) {
    width: 100vw;
  }
`;

const TitleText = styled.h1`
  color: #623e2a;
  font-size: 50px;
  font-weight: 300;
  font-family: "Carlito";

  /* Era radley a font */

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 3.5rem;
  }
`;

const AboutInfoText = styled.p`
  color: #623e2a;
  font-size: 20px;
  font-weight: 300;
  font-family: "Carlito";
  width: 70%;
  text-align: justify;
  text-indent: 2.5em;
  line-height: 1.3em;
  margin-bottom: 20px;

  @media (max-width: 425px) {
    width: 85vw;
    font-size: 1.5rem;
    text-align: justify;
    text-indent: 1.5rem;
    line-height: 2.2rem;
    font-weight: 400;
  }
`;

const AboutContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f1ed;

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export {
  AboutSection,
  AboutSectionImage,
  AboutContainer,
  AboutInfoText,
  TitleText,
  ImageArea,
  TitleTextSection,
  ImageText,
};

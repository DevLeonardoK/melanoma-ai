import styled, { keyframes } from "styled-components";

const showIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const WelcomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #623e2a;
  width: 45vw;
  gap: 50px;

  @media (max-width: 425px) {
    width: 85vw;
    gap: 4.5rem;
  }
`;

const WelcomeTitle = styled.h1`
  color: #623e2a;
  font-weight: 300;
  font-size: 80px;
  font-family: "Carlito";
  width: 1080px;
  animation: ${showIn} ease;
  animation-timeline: view();
  animation-range: entry 10% cover 50%;

  @media (max-width: 425px) {
    width: 85vw;
    text-align: center;
    font-size: 3.5rem;
    font-weight: 500;
  }
`;

const WelcomeText = styled.p`
  color: #623e2a;
  font-family: "Carlito";
  line-height: 30px;
  font-size: 25px;
  text-align: center;
  word-spacing: 5px;
  letter-spacing: 0.25px;
  animation: ${showIn} ease;
  animation-timeline: view();
  animation-range: entry 10% cover 50%;

  @media (max-width: 425px) {
    text-align: center;
    font-size: 1.5rem;
    text-align: justify;
    text-indent: 1.5rem;
    line-height: 2.2rem;
    font-weight: 400;
  }
`;
const WelcomeContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export { WelcomeContainer, WelcomeSection, WelcomeText, WelcomeTitle };

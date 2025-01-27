import styled, { keyframes } from "styled-components";

const showIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

export const WelcomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #623e2a;
  width: 45%;
  gap: 50px;
`;

export const WelcomeTitle = styled.h1`
  color: #623e2a;
  font-weight: 300;
  font-size: 80px;
  font-family: "Carlito";
  width: 1080px;
  animation: ${showIn} ease;
  animation-timeline: view();
  animation-range: entry 10% cover 50%;
`;

export const WelcomeText = styled.p`
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
`;

export const WelcomePage = () => {
  return (
    <>
      <WelcomeSection>
        <WelcomeTitle>You're very welcome</WelcomeTitle>
        <WelcomeText>
          The purpose of this website is to share the main information regarding
          Superficial Extensive Melanoma, as well as to present a Deep
          Convolutional Neural Network model trained to diagnose the disease
          with dermoscopic images, improving understanding of the disease,
          avoiding false negatives and false positives, and thus enriching the
          work of doctors in the field.
        </WelcomeText>
      </WelcomeSection>
    </>
  );
};

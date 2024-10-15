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
        <WelcomeTitle>Seja muito bem-vindo</WelcomeTitle>
        <WelcomeText>
          Este site tem a finalidade de compartilhar as principais informações
          referentes ao Melanoma Extensivo Superficial, além de apresentar um
          modelo de Rede Neural Convolucional Profunda treinada para
          diagnosticar a doença com imagens dermatoscópias, melhorando a
          compreensão da doença, evitando falsos negativos e falsos positivos, e
          assim enriquecendo cada vez mais o trabalho dos médicos na área.
        </WelcomeText>
      </WelcomeSection>
    </>
  );
};

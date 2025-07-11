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
          <TitleText>QUEM</TitleText>
          <TitleText>SOMOS NÓS?</TitleText>
        </TitleTextSection>
        <AboutInfoText>
          Nosso modelo de Rede Neural Convolucional Profundas começou como parte de um projeto para a feira de ciências FEICIPAZ no Colégio Sinodal da Paz, RS, Novo Hamburgo, no qual as estudantes do ensino médio Júlia Calcagno Mayer e Isabelly Heloisa Marques participaram com o auxílio da orientadora da pesquisa Gabriela Soares Castilhos e da coorientadora Natalia Maynart Cadó. 
        </AboutInfoText>
        <AboutInfoText>
          Este projeto começou em 2023, quando iniciamos a fase I do projeto realizando uma pesquisa abrangente sobre como a Inteligência Artificial funcionava no diagnóstico, enquanto na fase II, em 2024, treinamos o modelo de Redes Neurais Convolucionais Profundas para a detecção de melanomas extensivos superficiais. Por fim, na fase III do projeto, diante de tanto reconhecimento e prestígio recebido ao nosso projeto científico, decidimos implementar mais três tipos de melanomas muito recorrentes no Brasil, com o objetivo de aprimorar cada vez mais nossa pesquisa.
        </AboutInfoText>
      </AboutSection>
      <AboutSectionImage>
        <ImageArea src={imgAbout}></ImageArea>
        <ImageText>Isabelly Heloísa Marques e Júlia Calcagno Mayer</ImageText>
      </AboutSectionImage>
    </>
  );
};

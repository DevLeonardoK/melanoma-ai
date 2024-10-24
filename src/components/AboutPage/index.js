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
          Nosso modelo de Rede Neural Convolucional Profunda se iniciou em um
          projeto da feira científica FEICIPAZ do Colégio Sinodal da Paz, RS,
          Novo Hamburgo, o qual as alunas do Ensino Médio, Júlia Calcagno Mayer
          e Isabelly Heloisa Marques participaram com o auxílio da orientadora
          da pesquisa, Gabriela Soares Castilhos e a coorientadora, Natalia
          Maynart Cadó.
        </AboutInfoText>
        <AboutInfoText>
          Este projeto se iniciou em 2023, o qual iniciamos a fase I do projeto
          realizando uma pesquisa abrangente sobre como funcionava a
          Inteligência Artificial no diagnóstico, já na fase II, em 2024
          realizamos o treinamento de um modelo de Rede Neural Convolucional
          Profunda para a detecção dos melanomas extensivos superficiais.
        </AboutInfoText>
      </AboutSection>
      <AboutSectionImage>
        <ImageArea src={imgAbout}></ImageArea>
        <ImageText>Isabelly Heloísa Marques e Júlia Calcagno Mayer</ImageText>
      </AboutSectionImage>
    </>
  );
};

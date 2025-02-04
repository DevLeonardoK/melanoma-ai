import {
  AboutContainer,
  AboutInfoText,
  AboutSection,
  AboutSectionImage,
  ImageArea,
  ImageText,
  TitleText,
  TitleTextSection,
} from "./styles";

import imgAbout from "./img/imgAbout.jpeg";
const AboutPage = () => {
  return (
    <>
      <AboutContainer>
        <AboutSection>
          <TitleTextSection>
            <TitleText>Who </TitleText>
            <TitleText>Are we?</TitleText>
          </TitleTextSection>
          <AboutInfoText>
            Our Deep Convolutional Neural Network model began as part of a
            project for the FEICIPAZ science fair at Colégio Sinodal da Paz, RS,
            Novo Hamburgo, in which high school students Júlia Calcagno Mayer
            and Isabelly Heloisa Marques took part with the help of research
            supervisor Gabriela Soares Castilhos and co-supervisor Natalia
            Maynart Cadó.
          </AboutInfoText>
          <AboutInfoText>
            This project began in 2023, when we started phase I of the project
            by carrying out comprehensive research into how Artificial
            Intelligence worked in diagnosis, while in phase II, in 2024, we
            trained a Deep Convolutional Neural Network model for the detection
            of superficial extensive melanomas.
          </AboutInfoText>
        </AboutSection>
        <AboutSectionImage>
          <ImageArea src={imgAbout}></ImageArea>
          <ImageText>Isabelly Heloísa Marques e Júlia Calcagno Mayer</ImageText>
        </AboutSectionImage>
      </AboutContainer>
    </>
  );
};

export { AboutPage };

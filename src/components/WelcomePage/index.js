import {
  WelcomeContainer,
  WelcomeSection,
  WelcomeText,
  WelcomeTitle,
} from "./styles";

const WelcomePage = () => {
  return (
    <>
      <WelcomeContainer>
        <WelcomeSection>
          <WelcomeTitle>You're very welcome</WelcomeTitle>
          <WelcomeText>
            The purpose of this website is to share the main information
            regarding Superficial Extensive Melanoma, as well as to present a
            Deep Convolutional Neural Network model trained to diagnose the
            disease with dermoscopic images, improving understanding of the
            disease, avoiding false negatives and false positives, and thus
            enriching the work of doctors in the field.
          </WelcomeText>
        </WelcomeSection>
      </WelcomeContainer>
    </>
  );
};

export { WelcomePage };

import BenefectImg1 from "./img/BenefectImg1.jpeg";
import BenefectImg2 from "./img/BenefectImg2.jpeg";
import BenefectImg3 from "./img/BenefectImg3.jpeg";

import {
  BenefectAreaInfo,
  BenefectAreaInfoImg,
  BenefectAreaInfoText,
  BenefectAreaInfoTitleText,
  BenefectAreaText,
  BenefectInfoSection,
  BenefectsSection,
  BenefectsTitleText,
  BenefectsContainer,
} from "./styles";

const BenefectsPage = () => {
  return (
    <>
      <BenefectsContainer>
        <BenefectsSection>
          <BenefectsTitleText>What are the benefits of AI?</BenefectsTitleText>
          <BenefectInfoSection>
            <BenefectAreaInfo>
              <BenefectAreaInfoImg src={BenefectImg2}></BenefectAreaInfoImg>

              <BenefectAreaText>
                <BenefectAreaInfoTitleText>Agility </BenefectAreaInfoTitleText>
                <BenefectAreaInfoText>
                  Deep convolutional neural networks. They have a non-negotiable
                  speed due to their structure similar to that of us human
                  beings, contributing to an agnostic in less than 10 seconds.
                </BenefectAreaInfoText>
              </BenefectAreaText>
            </BenefectAreaInfo>
            <BenefectAreaInfo>
              <BenefectAreaInfoImg src={BenefectImg3}></BenefectAreaInfoImg>
              <BenefectAreaText>
                <BenefectAreaInfoTitleText>
                  Promptness{" "}
                </BenefectAreaInfoTitleText>
                <BenefectAreaInfoText>
                  Artificial Intelligence has been scientifically proven to be
                  extremely agile at understanding algorithms and numbers.
                </BenefectAreaInfoText>
              </BenefectAreaText>
            </BenefectAreaInfo>
            <BenefectAreaInfo>
              <BenefectAreaInfoImg src={BenefectImg1}></BenefectAreaInfoImg>
              <BenefectAreaText>
                <BenefectAreaInfoTitleText>
                  Improving the health system
                </BenefectAreaInfoTitleText>
                <BenefectAreaInfoText>
                  The purpose of this resource is restricted to use by doctors,
                  as images have been used that only these professionals have
                  access to.
                </BenefectAreaInfoText>
              </BenefectAreaText>
            </BenefectAreaInfo>
          </BenefectInfoSection>
        </BenefectsSection>
      </BenefectsContainer>
    </>
  );
};

export { BenefectsPage };

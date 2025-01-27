import styled from "styled-components";

import BenefectImg1 from "./img/BenefectImg1.jpeg";
import BenefectImg2 from "./img/BenefectImg2.jpeg";
import BenefectImg3 from "./img/BenefectImg3.jpeg";

export const BenefectsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  min-height: 100vh;
  flex-direction: column;
`;

export const BenefectsTitleText = styled.h1`
  color: #623e2a;
  font-size: 60px;
  font-family: "Radley";
  font-weight: 300;
  letter-spacing: 2px;
`;

export const BenefectInfoSection = styled.section`
  width: 90%;
  min-height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BenefectAreaInfo = styled.section`
  width: 30%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const BenefectAreaInfoImg = styled.img`
  width: 380px;
  height: 270px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const BenefectAreaText = styled.section`
  width: 93%;
  border: 1px solid black;
  min-height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
`;

export const BenefectAreaInfoTitleText = styled.h3`
  color: #623e2a;
  font-size: 22px;
  font-family: "Carlito";
  font-weight: bold;
`;
export const BenefectAreaInfoText = styled.p`
  color: #623e2a;
  font-size: 19px;
  font-family: "Radley";
  font-weight: 300;
  text-align: center;
  width: 85%;
`;

export const BenefectsPage = () => {
  return (
    <>
      <BenefectsSection>
        <BenefectsTitleText>What are the benefits of AI?</BenefectsTitleText>
        <BenefectInfoSection>
          <BenefectAreaInfo>
            <BenefectAreaInfoImg src={BenefectImg2}></BenefectAreaInfoImg>

            <BenefectAreaText>
              <BenefectAreaInfoTitleText>Agility </BenefectAreaInfoTitleText>
              <BenefectAreaInfoText>
                Deep convolutional neural networks. They have a non-negotiable
                speed due to their structure similar to that of us human beings,
                contributing to an agnostic in less than 10 seconds.
              </BenefectAreaInfoText>
            </BenefectAreaText>
          </BenefectAreaInfo>
          <BenefectAreaInfo>
            <BenefectAreaInfoImg src={BenefectImg3}></BenefectAreaInfoImg>
            <BenefectAreaText>
              <BenefectAreaInfoTitleText>Promptness </BenefectAreaInfoTitleText>
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
              {/* <BenefectAreaInfoTitleText>saúde</BenefectAreaInfoTitleText> */}
              <BenefectAreaInfoText>
                The purpose of this resource is restricted to use by doctors, as
                images have been used that only these professionals have access
                to.
              </BenefectAreaInfoText>
            </BenefectAreaText>
          </BenefectAreaInfo>
        </BenefectInfoSection>
      </BenefectsSection>
    </>
  );
};

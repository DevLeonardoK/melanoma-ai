import styled from "styled-components";

const BenefectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f1ed;
`;

const BenefectsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  min-height: 100vh;
  flex-direction: column;

  @media (max-width: 425px) {
    margin-top: 5rem;
  }
`;

const BenefectsTitleText = styled.h1`
  color: #623e2a;
  font-size: 60px;
  font-family: "Radley";
  font-weight: 300;
  letter-spacing: 2px;

  @media (max-width: 425px) {
    width: 100vw;
    font-family: "Carlito";
    font-size: 3.5rem;
    text-align: center;
  }
`;

const BenefectInfoSection = styled.section`
  width: 90%;
  min-height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const BenefectAreaInfo = styled.section`
  width: 30%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const BenefectAreaInfoImg = styled.img`
  width: 380px;
  height: 270px;
  border: 1px solid black;
  border-radius: 5px;

  @media (max-width: 425px) {
    width: 300px;
    height: 220px;
    border-radius: 1rem;
    margin-top: 2rem;
  }
`;

const BenefectAreaText = styled.section`
  width: 93%;
  border: 1px solid black;
  min-height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;

  @media (max-width: 425px) {
    width: 80vw;
  }
`;

const BenefectAreaInfoTitleText = styled.h3`
  color: #623e2a;
  font-size: 22px;
  font-family: "Arial";
  font-weight: bold;
`;
const BenefectAreaInfoText = styled.p`
  color: #623e2a;
  font-size: 19px;
  font-family: "Radley";
  font-weight: 300;
  text-align: center;
  width: 85%;

  @media (max-width: 425px) {
    text-align: justify;
    text-indent: 1rem;
    word-spacing: -1px;
    font-family: "Carlito";
    font-size: 1.25rem;
    width: 70vw;
  }
`;

export {
  BenefectAreaInfo,
  BenefectAreaInfoImg,
  BenefectAreaInfoText,
  BenefectAreaInfoTitleText,
  BenefectAreaText,
  BenefectInfoSection,
  BenefectsTitleText,
  BenefectsSection,
  BenefectsContainer,
};

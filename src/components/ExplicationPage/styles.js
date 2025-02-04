import styled from "styled-components";

const ExplicationContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f1ed;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

const SectionGeral = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

const TitleExplicationText = styled.h1`
  color: #623e2a;
  font-size: 60px;
  font-family: "Radley";
  font-weight: 300;

  @media (max-width: 425px) {
    font-size: 3.5rem;
    font-family: "Carlito";
    font-weight: 500;
  }
`;

const SectionCardsExplication = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.5%;
  height: 600px;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

const CardExplication = styled.section`
  width: 280px;
  height: 250px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin: 1rem;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    gap: 50px;
  }
`;

const ImageArea = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 3px;

  @media (max-width: 425px) {
    width: 240px;
    height: 200px;
    margin-bottom: -1rem;
    border-radius: 1rem;
  }
`;

const InformationButton = styled.button`
  width: 350px;
  min-height: 200px;
  font-family: "Carlito";
  font-size: 27px;
  color: #623e2a;
  outline: none;
  border: 1px solid black;
  background-color: #f4f1ed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;

  @media (max-width: 425px) {
    width: 270px;
    min-height: 80px;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 1.5rem;
  }
`;

const PageOne = styled.section`
  width: 75%;
  height: 85vh;
  background-color: #f4f1ed;
  border: 1px solid black;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  border-radius: 10px;

  @media (max-width: 425px) {
    width: 90vw;
    text-align: center;
  }
`;

const PageOneTitleText = styled.h1`
  color: #623e2a;
  font-size: 50px;
  font-family: "Radley";
  font-weight: 300;

  @media (max-width: 425px) {
    display: none;
  }
`;

const PageOneTextInfo = styled.p`
  color: #623e2a;
  font-size: 27px;
  font-family: "Radley";
  font-weight: 300;
  width: 65%;
  word-spacing: 2px;

  @media (max-width: 425px) {
    width: 80vw;
    text-align: center;
    word-spacing: 0.5px;
    font-size: 1.7rem;
    text-align: justify;
    line-height: 1.9rem;
    text-indent: 1rem;
  }
`;

const ButtonClose = styled.button`
  width: 50px;
  min-height: 50px;
  font-family: "Carlito";
  font-size: 27px;
  color: #623e2a;
  outline: none;
  border: 1px solid black;
  background-color: #f4f1ed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
const PageTwo = styled.section`
  width: 75%;
  height: 70vh;
  background-color: #f4f1ed;
  border: 1px solid black;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 70px;
  border-radius: 10px;

  @media (max-width: 425px) {
    width: 90vw;
  }
`;

const PageTwoTitleText = styled.h1`
  color: #623e2a;
  font-size: 50px;
  font-family: "Radley";
  font-weight: 300;

  @media (max-width: 425px) {
    display: none;
  }
`;

const PageTwoTextInfo = styled.p`
  color: #623e2a;
  font-size: 27px;
  font-family: "Radley";
  font-weight: 300;
  width: 65%;
  word-spacing: 2px;

  @media (max-width: 425px) {
    width: 75vw;
    word-spacing: 0.5px;
    font-size: 1.7rem;
    text-align: justify;
    line-height: 1.9rem;
    text-indent: 1rem;
  }
`;

export {
  ExplicationContainer,
  PageTwoTextInfo,
  PageTwoTitleText,
  ButtonClose,
  CardExplication,
  TitleExplicationText,
  InformationButton,
  PageOne,
  PageTwo,
  PageOneTextInfo,
  PageOneTitleText,
  SectionCardsExplication,
  SectionGeral,
  ImageArea,
};

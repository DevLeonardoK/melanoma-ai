import styled from "styled-components";
import ImgMelanoma1 from "./img/imgMelanoma1.jpeg";
import ImgMelanoma2 from "./img/imgMelanoma2.jpeg";

export const SectionGeral = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 35px;
`;

export const TitleExplicationText = styled.h1`
  color: #623e2a;
  font-size: 60px;
  font-family: "Radley";
  font-weight: 300;
`;

export const SectionCardsExplication = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.5%;
  height: 600px;
`;

export const CardExplication = styled.section`
  width: 350px;
  height: 250px;
  //   border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

export const ImageArea = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 3px;
`;

export const InformationButton = styled.button`
  width: 350px;
  min-height: 200px;
  font-family: "Radley";
  font-size: 27px;
  color: #623e2a;
  outside: none;
  border: 1px solid black;
  background-color: #f4f1ed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export const ExplicationPage = () => {
  return (
    <>
      <SectionGeral>
        <TitleExplicationText>
          Melanoma Extensivo Superficial
        </TitleExplicationText>
        <SectionCardsExplication>
          <CardExplication>
            <ImageArea src={ImgMelanoma1}></ImageArea>
            <InformationButton>
              O que é um Melanoma Extensivo Superficial?
            </InformationButton>
          </CardExplication>
          <CardExplication>
            <ImageArea src={ImgMelanoma2}></ImageArea>
            <InformationButton>
              Acho que tenho melanoma, o que eu faço agora?
            </InformationButton>
          </CardExplication>
        </SectionCardsExplication>
      </SectionGeral>
    </>
  );
};

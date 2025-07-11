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
  gap: 40px;
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

export const PageOne = styled.section`
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
`;

export const PageOneTitleText = styled.h1`
  color: #623e2a;
  font-size: 50px;
  font-family: "Radley";
  font-weight: 300;
`;

export const PageOneTextInfo = styled.p`
  color: #623e2a;
  font-size: 27px;
  font-family: "Radley";
  font-weight: 300;
  width: 65%;
  word-spacing: 2px;
`;

export const ButtonClose = styled.button`
  width: 50px;
  min-height: 50px;
  font-family: "Carlito";
  font-size: 27px;
  color: #623e2a;
  outside: none;
  border: 1px solid black;
  background-color: #f4f1ed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const PageTwo = styled.section`
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
`;

export const PageTwoTitleText = styled.h1`
  color: #623e2a;
  font-size: 50px;
  font-family: "Radley";
  font-weight: 300;
`;

export const PageTwoTextInfo = styled.p`
  color: #623e2a;
  font-size: 27px;
  font-family: "Radley";
  font-weight: 300;
  width: 65%;
  word-spacing: 2px;
`;

function mudarFirst() {
  var btn = document.getElementById("FirstBtn");
  var sectionGeral = document.getElementById("SectionGeral");
  var TitleExplicationText = document.getElementById("TitleExplicationText");
  var SectionCardsExplication = document.getElementById(
    "SectionCardsExplication"
  );
  var PageOne = document.getElementById("PageOne");
  TitleExplicationText.style.display = "none";
  SectionCardsExplication.style.display = "none";
  PageOne.style.display = "flex";
}

function fechar() {
  var PageTwo = document.getElementById("PageTwo");
  var PageOne = document.getElementById("PageOne");
  var TitleExplicationText = document.getElementById("TitleExplicationText");
  var SectionCardsExplication = document.getElementById(
    "SectionCardsExplication"
  );
  TitleExplicationText.style.display = "block";
  SectionCardsExplication.style.display = "flex";
  PageOne.style.display = "none";
  PageTwo.style.display = "none";
}

function mudarSecond() {
  var TitleExplicationText = document.getElementById("TitleExplicationText");
  var SectionCardsExplication = document.getElementById(
    "SectionCardsExplication"
  );
  var PageTwo = document.getElementById("PageTwo");
  TitleExplicationText.style.display = "none";
  SectionCardsExplication.style.display = "none";
  PageTwo.style.display = "flex";
}

export const ExplicationPage = () => {
  return (
    <>
      <SectionGeral id="SectionGeral">
        <PageOne id="PageOne">
          <PageOneTitleText>
            O que é um Melanoma Extensivo Superficial?
          </PageOneTitleText>
          <PageOneTextInfo>
            O melanoma expansivo superficial, como também é conhecido,
            encontra-se sobre um nevo existente, que são pequenas lesões
            cutâneas, crescendo de forma radial, e assim acaba invadindo a
            camada dérmica da pele. A forma mais comum de ambos os sexos, tanto
            o feminino como o masculino de formar o MES (Melanoma Extensivo
            Superficial) é a exposição temporária ao sol sem proteção solar,
            pelo fato dos melanomas incidirem nos homens no tronco e nas
            mulheres nos membros inferiores, de acordo com Dimatos et al, 2009,
            p. 15
          </PageOneTextInfo>
          <ButtonClose onClick={fechar}>X</ButtonClose>
        </PageOne>
        <PageTwo id="PageTwo">
          <PageTwoTitleText>
            Acho que tenho melanoma, o que eu faço agora?
          </PageTwoTitleText>
          <PageTwoTextInfo>
            Se você verificar pintas suspeitas pelo corpo e estiver com suspeita
            de ter o melanoma extensivo superficial primeiramente deve-se
            procurar ajuda médica e proteger-se do sol, buscando assim um
            tratamento para o próprio.
          </PageTwoTextInfo>
          <ButtonClose onClick={fechar}>X</ButtonClose>
        </PageTwo>
        <TitleExplicationText id="TitleExplicationText">
          Melanoma Extensivo Superficial
        </TitleExplicationText>
        <SectionCardsExplication id="SectionCardsExplication">
          <CardExplication>
            <ImageArea src={ImgMelanoma1}></ImageArea>
            <InformationButton id="FirstBtn" onClick={mudarFirst}>
              O que é um Melanoma Extensivo Superficial?
            </InformationButton>
          </CardExplication>
          <CardExplication>
            <ImageArea src={ImgMelanoma2}></ImageArea>
            <InformationButton id="SecondBtn" onClick={mudarSecond}>
              Acho que tenho melanoma, o que eu faço agora?
            </InformationButton>
          </CardExplication>
        </SectionCardsExplication>
      </SectionGeral>
    </>
  );
};

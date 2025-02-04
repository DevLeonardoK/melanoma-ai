import styled from "styled-components";
import ImgMelanoma1 from "./img/imgMelanoma1.jpeg";
import ImgMelanoma2 from "./img/imgMelanoma2.jpeg";

import {
  ButtonClose,
  CardExplication,
  ExplicationContainer,
  ImageArea,
  InformationButton,
  PageOne,
  PageOneTextInfo,
  PageOneTitleText,
  PageTwo,
  PageTwoTextInfo,
  PageTwoTitleText,
  SectionCardsExplication,
  SectionGeral,
  TitleExplicationText,
} from "./styles";

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

const ExplicationPage = () => {
  return (
    <>
      <ExplicationContainer>
        <SectionGeral id="SectionGeral">
          <PageOne id="PageOne">
            <PageOneTitleText>
              What is an Extensive Superficial Melanoma?
            </PageOneTitleText>
            <PageOneTextInfo>
              Superficial expansive melanoma, as it is also known, is found on
              top of an existing nevus, which are small skin lesions that grow
              radially, invading the dermal layer of the skin. The most common
              way for both males and females to form MES (Superficial Extensive
              Melanoma) is temporary exposure to the sun without sun protection,
              due to the fact that melanomas occur in men on the trunk and in
              women on the lower limbs, according to Dimatos et al, 2009, p. 15.
            </PageOneTextInfo>
            <ButtonClose onClick={fechar}>X</ButtonClose>
          </PageOne>
          <PageTwo id="PageTwo">
            <PageTwoTitleText>
              I think I have melanoma, what do I do now?
            </PageTwoTitleText>
            <PageTwoTextInfo>
              If you see suspicious spots on your body and are suspected of
              having superficial extensive melanoma, you should first seek
              medical help and protect yourself from the sun in order to seek
              treatment.
            </PageTwoTextInfo>
            <ButtonClose onClick={fechar}>X</ButtonClose>
          </PageTwo>
          <TitleExplicationText id="TitleExplicationText">
            Superficial Extensive Melanoma
          </TitleExplicationText>
          <SectionCardsExplication id="SectionCardsExplication">
            <CardExplication>
              <ImageArea src={ImgMelanoma1}></ImageArea>
              <InformationButton id="FirstBtn" onClick={mudarFirst}>
                What is an Extensive Superficial Melanoma?
              </InformationButton>
            </CardExplication>
            <CardExplication>
              <ImageArea src={ImgMelanoma2}></ImageArea>
              <InformationButton id="SecondBtn" onClick={mudarSecond}>
                I think I have melanoma, what do I do now?
              </InformationButton>
            </CardExplication>
          </SectionCardsExplication>
        </SectionGeral>
      </ExplicationContainer>
    </>
  );
};

export { ExplicationPage };

import styled from "styled-components";
import ImgMelanoma1 from "./img/imgMelanoma1.jpeg";
import ImgMelanoma2 from "./img/imgMelanoma2.jpeg";
import ImgMelanoma3 from "./img/nodular.png"
import ImgMelanoma4 from "./img/acral.png"
import ImgMelanoma5 from "./img/maligno.png"

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
  document.getElementById("TitleExplicationText").style.display = "none";
  document.getElementById("SectionCardsExplication").style.display = "none";
  document.getElementById("PageOne").style.display = "flex";
}

function mudarSecond() {
  document.getElementById("TitleExplicationText").style.display = "none";
  document.getElementById("SectionCardsExplication").style.display = "none";
  document.getElementById("PageTwo").style.display = "flex";
}

function mudarThird() {
  document.getElementById("TitleExplicationText").style.display = "none";
  document.getElementById("SectionCardsExplication").style.display = "none";
  document.getElementById("PageThree").style.display = "flex";
}

function mudarFourth() {
  document.getElementById("TitleExplicationText").style.display = "none";
  document.getElementById("SectionCardsExplication").style.display = "none";
  document.getElementById("PageFour").style.display = "flex";
}

function fechar() {
  document.getElementById("TitleExplicationText").style.display = "block";
  document.getElementById("SectionCardsExplication").style.display = "flex";
  document.getElementById("PageOne").style.display = "none";
  document.getElementById("PageTwo").style.display = "none";
  document.getElementById("PageThree").style.display = "none";
  document.getElementById("PageFour").style.display = "none";
}

export const ExplicationPage = () => {
  return (
    <>
      <SectionGeral id="SectionGeral">

        {/* Modal 1 */}
        <PageOne id="PageOne">
          <PageOneTitleText>
            O que é um Melanoma Extensivo Superficial?
          </PageOneTitleText>
          <PageOneTextInfo>
            É o tipo mais comum. Ele cresce principalmente na superfície da pele (horizontalmente) por um tempo antes de se aprofundar. Geralmente, aparece como uma mancha irregular, plana ou ligeiramente elevada, com variação de cores (marrom, preto, azul, rosa).
Melanoma Nodular
          </PageOneTextInfo>
          <ButtonClose onClick={fechar}>X</ButtonClose>
        </PageOne>

        {/* Modal 2 */}
        <PageTwo id="PageTwo">
          <PageTwoTitleText>O que é o Melanoma Nodular?</PageTwoTitleText>
          <PageTwoTextInfo>
            É mais agressivo e cresce rapidamente para dentro da pele (verticalmente) desde o início, como um nódulo. Pode ser uma elevação firme, em forma de cúpula, de cor escura (preta, azul, marrom) ou até avermelhada ou da cor da pele.
          </PageTwoTextInfo>
          <ButtonClose onClick={fechar}>X</ButtonClose>
        </PageTwo>

        {/* Modal 3 */}
        <PageOne id="PageThree">
          <PageOneTitleText>O que é o Melanoma Lentiginoso Acral?</PageOneTitleText>
          <PageOneTextInfo>
            É um tipo raro que ocorre nas palmas das mãos, solas dos pés e debaixo das unhas. Diferente dos outros, não está diretamente relacionado à exposição solar. Pode aparecer como uma mancha escura ou estria nas unhas, muitas vezes sendo diagnosticado tardiamente.
          </PageOneTextInfo>
          <ButtonClose onClick={fechar}>X</ButtonClose>
        </PageOne>

        {/* Modal 4 */}
        <PageTwo id="PageFour">
          <PageTwoTitleText>O que é o Melanoma Lentigo Maligno?</PageTwoTitleText>
          <PageTwoTextInfo>
Aparece principalmente em áreas da pele cronicamente expostas ao sol, como rosto e pescoço, em pessoas mais velhas. Começa como uma mancha irregular e lentamente crescente, de coloração variada, que pode levar anos para se tornar invasiva. Quando invasivo, é chamado de lentigo maligno melanoma.
          </PageTwoTextInfo>
          <ButtonClose onClick={fechar}>X</ButtonClose>
        </PageTwo>

        {/* Texto título geral */}
        <TitleExplicationText id="TitleExplicationText">
          Tipos de Melanoma
        </TitleExplicationText>

        {/* Cards */}
        <SectionCardsExplication id="SectionCardsExplication">
          <CardExplication>
            <ImageArea src={ImgMelanoma1} />
            <InformationButton id="FirstBtn" onClick={mudarFirst}>
              O que é um Melanoma Extensivo Superficial?
            </InformationButton>
          </CardExplication>

          <CardExplication>
            <ImageArea src={ImgMelanoma3} />
            <InformationButton id="SecondBtn" onClick={mudarSecond}>
              O que é o Melanoma Nodular?
            </InformationButton>
          </CardExplication>

          <CardExplication>
            <ImageArea src={ImgMelanoma4} />
            <InformationButton onClick={mudarThird}>
              O que é o Melanoma Lentiginoso Acral?
            </InformationButton>
          </CardExplication>

          <CardExplication>
            <ImageArea src={ImgMelanoma5} />
            <InformationButton onClick={mudarFourth}>
              O que é o Melanoma Lentigo Maligno?
            </InformationButton>
          </CardExplication>
        </SectionCardsExplication>
      </SectionGeral>
    </>
  );
};

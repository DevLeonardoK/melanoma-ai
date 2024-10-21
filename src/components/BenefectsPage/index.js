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
  width: 350px;
  height: 250px;
  border: 1px solid black;
`;

export const BenefectAreaText = styled.section`
  width: 70%;
  border: 1px solid black;
  min-height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
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
        <BenefectsTitleText>Quais os benefícios da IA?</BenefectsTitleText>
        <BenefectInfoSection>
          <BenefectAreaInfo>
            <BenefectAreaInfoImg src={BenefectImg2}></BenefectAreaInfoImg>

            <BenefectAreaText>
              <BenefectAreaInfoTitleText>Agilidade </BenefectAreaInfoTitleText>
              <BenefectAreaInfoText>
                As redes Neurals convolucionais Profundas. Possuem uma rapidez
                inegociável diante da sua estrutura similar a de nós seres
                humanos, contribuindo para um agnóstico em menos de 10 segundos.
              </BenefectAreaInfoText>
            </BenefectAreaText>
          </BenefectAreaInfo>
          <BenefectAreaInfo>
            <BenefectAreaInfoImg src={BenefectImg3}></BenefectAreaInfoImg>
            <BenefectAreaText>
              <BenefectAreaInfoTitleText>Presteza </BenefectAreaInfoTitleText>
              <BenefectAreaInfoText>
                Rel comorovado cientificamente que a Inteligência Artificial
                possui uma agilidade extrema para compreender algoritmos e
                números.
              </BenefectAreaInfoText>
            </BenefectAreaText>
          </BenefectAreaInfo>
          <BenefectAreaInfo>
            <BenefectAreaInfoImg src={BenefectImg1}></BenefectAreaInfoImg>
            <BenefectAreaText>
              <BenefectAreaInfoTitleText>
                Aprimoramento do sistema de saúde
              </BenefectAreaInfoTitleText>
              <BenefectAreaInfoText>
                Este recurso tem a finalidade restrita de ser utilizado por
                médicos, pois foram utilizadas imagens as quais somente estes
                profisisonais possuem acesso.
              </BenefectAreaInfoText>
            </BenefectAreaText>
          </BenefectAreaInfo>
        </BenefectInfoSection>
      </BenefectsSection>
    </>
  );
};

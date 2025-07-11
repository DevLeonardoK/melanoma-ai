import styled from "styled-components";

import BenefectImg1 from "./img/presteza.jpg";
import BenefectImg2 from "./img/BenefectImg2.jpeg";
import BenefectImg3 from "./img/agilidade.jpg";

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
        <BenefectsTitleText>Quais os benefícios da IA?</BenefectsTitleText>
        <BenefectInfoSection>
          <BenefectAreaInfo>
            <BenefectAreaInfoImg src={BenefectImg2}></BenefectAreaInfoImg>

            <BenefectAreaText>
              <BenefectAreaInfoTitleText>Agilidade </BenefectAreaInfoTitleText>
              <BenefectAreaInfoText>
                As Redes Neurais Convolucionais Profundas possuem uma velocidade extremamente rápida devido à sua estrutura "neurológica" semelhante à nossa, contribuindo para uma resposta em menos de 5 segundos.
              </BenefectAreaInfoText>
            </BenefectAreaText>
          </BenefectAreaInfo>
          <BenefectAreaInfo>
            <BenefectAreaInfoImg src={BenefectImg3}></BenefectAreaInfoImg>
            <BenefectAreaText>
              <BenefectAreaInfoTitleText>Presteza </BenefectAreaInfoTitleText>
              <BenefectAreaInfoText>
                Cientificamente foi comprovado que a Inteligência Artificial é extremamente ágil na compreensão de algoritmos numéricos, além de obter essas respostas de maneira precisa com números e algarismos.
              </BenefectAreaInfoText>
            </BenefectAreaText>
          </BenefectAreaInfo>
          <BenefectAreaInfo>
            <BenefectAreaInfoImg src={BenefectImg1}></BenefectAreaInfoImg>
            <BenefectAreaText>
              <BenefectAreaInfoTitleText>
                Aprimoramento do sistema de saúde
              </BenefectAreaInfoTitleText>
              {/* <BenefectAreaInfoTitleText>saúde</BenefectAreaInfoTitleText> */}
              <BenefectAreaInfoText>
A o médico utilizando a IA em conjunto com a dermatoscopia, sobe o percentual de acerto de 85% para 95% quando comparado ao diagnóstico clínico tradicional.

              </BenefectAreaInfoText>
            </BenefectAreaText>
          </BenefectAreaInfo>
        </BenefectInfoSection>
      </BenefectsSection>
    </>
  );
};

import styled from "styled-components";

export const ResultsGeralSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ResultTitleText = styled.a`
  color: #623e2a;
  font-size: 50px;
  font-family: "Radley";
  font-weight: 300;
  letter-spacing: 1px;
  text-decoration: none;
`;

export const ResultArea = styled.section`
  width: 90%;
  min-height: 80vh;
  border: 1px solid blue;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ResultImgArea = styled.section`
  width: 45%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
`;

export const ResultImgAreaText = styled.p`
  color: #623e2a;
  font-size: 20px;
  font-family: "Carlito";
  font-weight: bold;
`;

export const ResultImgSection = styled.section`
  width: 70%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #623e2a;
  border-radius: 5px;
`;

export const ResultImg = styled.img`
  width: 70%;
  min-height: 40vh;
  border-radius: 10px;
`;

export const ResultImgBtn = styled.input``; // Adicione estilos conforme necessário

export const ResultTextArea = styled.section`
  width: 45%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  border: 1px solid red;
`;

export const ResultTextTitle = styled.h2`
  color: #623e2a;
  font-size: 25px;
  font-family: "Carlito";
  font-weight: bold;
`;

export const ResultTextInfos = styled.p`
  color: #623e2a;
  font-size: 22px;
  font-family: "Radley";
  font-weight: 300;
`;

export const ResultsPage = () => {
  return (
    <ResultsGeralSection>
      <ResultTitleText
        href="https://devleonardok.github.io/melanomaRodar"
        target="__blank"
      >
        Diagnosis
      </ResultTitleText>
      {/* <ResultArea>
                <ResultImgArea>
                    <ResultImgAreaText>Faça o upload da imagem para validação</ResultImgAreaText>
                    <ResultImgBtn id="imageUpload" type="file" />
                    <ResultImgSection>
                        <ResultImg id="imagePreview" alt="Preview" />
                    </ResultImgSection>
                </ResultImgArea>
                <ResultTextArea>
                    <ResultTextTitle>Resultado da validação:</ResultTextTitle>
                        <ResultTextInfos> </ResultTextInfos>
                </ResultTextArea>
            </ResultArea> */}
    </ResultsGeralSection>
  );
};

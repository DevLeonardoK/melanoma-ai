import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  width: 75%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
`;

export const Text = styled.h1`
  color: white;
  font-family: "Radley";
  font-size: 40px;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 1px 1px 15px black;
`;

export const NameText = styled.h2`
  color: white;
  font-family: "Radley";
  font-size: 20px;
  letter-spacing: 3px;
  text-shadow: 1px 1px 15px black;
`;

export const SectionInitial = () => {
  return (
    <>
      <Section>
        <Text>
          Deetecção de melanomas extensivos superficiais realizada pela IA
          (Redes Neurais Convulacionais Profundas)
        </Text>
        <NameText>ISABELLY HELOISA MARQUES E JÚLIA CALCAGNO MAYER </NameText>
      </Section>
    </>
  );
};

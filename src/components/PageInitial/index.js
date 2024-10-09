import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: green;
`;

export const Text = styled.p`
  color: white;
  font-size: 20px;
`;

export const SectionInitial = () => {
  return (
    <>
      <Section>
        <Text id="t">
          <a href="#t">Testando Novamente</a>
        </Text>
      </Section>
    </>
  );
};

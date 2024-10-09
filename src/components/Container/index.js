import styled from "styled-components";
export const SContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: red;
`;

export const Container = () => {
  return (
    <>
      <SContainer></SContainer>
    </>
  );
};

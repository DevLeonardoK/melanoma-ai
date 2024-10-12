import styled from "styled-components";
import backgroundInitial from "./img/backgroundImage.jpg"

export const InitialContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  // background-color: black
  background-image: url(${backgroundInitial});
  background-repeat: no-repeat;
  background-size: cover;

`;

export const Container = () => {
  return (
    <>
      <InitialContainer></InitialContainer>
    </>
  );
};

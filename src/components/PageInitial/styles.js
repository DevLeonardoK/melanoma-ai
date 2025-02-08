import styled from "styled-components";
import backgroundInitial from "./assets/2.jpg";

const InitialContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${backgroundInitial});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Section = styled.section`
  text-align: center;
  width: 75vw;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 425px) {
    width: 85vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const Text = styled.h1`
  color: #fff;
  font-family: "Radley";
  font-size: 3rem;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 1px 1px 15px black;

  @media (max-width: 425px) {
    font-size: 2.5rem;
    text-align: center;
    font-weight: 500;
    text-align: center;
    font-family: "Carlito";
  }
`;

const NameText = styled.h2`
  color: white;
  font-family: "Radley";
  font-size: 2rem;
  letter-spacing: 3px;
  text-shadow: 1px 1px 15px black;

  @media (max-width: 425px) {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }
`;

export { InitialContainer, NameText, Section, Text };

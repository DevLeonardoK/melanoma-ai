import styled from "styled-components";



export const WelcomeContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f1ed;
  `

export const Container = () => {
    return (
        <>
        <WelcomeContainer></WelcomeContainer>
        </>
    )
}
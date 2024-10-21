import "./App.css";
import React from "react";
import { InitialContainer } from "./components/InitialContainer";
import { SectionInitial } from "./components/PageInitial";
import { WelcomeContainer } from "./components/WelcomeContainer";
import { WelcomePage } from "./components/WelcomePage";
import { AboutContainer } from "./components/AboutContainer";
import { AboutPage } from "./components/AboutPage";
import { ExplicationContainer } from "./components/ExplicationContainer";
import { ExplicationPage } from "./components/ExplicationPage";
import { BenefectsContainer } from "./components/BenefectsContainer";
import { BenefectsPage } from "./components/BenefectsPage";

function App() {
  return (
    <div className="App">
      <InitialContainer>
        <SectionInitial></SectionInitial>
      </InitialContainer>
      <WelcomeContainer>
        <WelcomePage></WelcomePage>
      </WelcomeContainer>
      <AboutContainer>
        <AboutPage></AboutPage>
      </AboutContainer>
      <ExplicationContainer>
        <ExplicationPage></ExplicationPage>
      </ExplicationContainer>
      <BenefectsContainer>
        <BenefectsPage></BenefectsPage>
      </BenefectsContainer>
    </div>
  );
}

export default App;

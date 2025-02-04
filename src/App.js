import "./App.css";
import React from "react";
import { InitialContainer } from "./components/InitialContainer";
import { SectionInitial } from "./components/PageInitial";
import { WelcomePage } from "./components/WelcomePage";
import { AboutPage } from "./components/AboutPage";
import { ExplicationPage } from "./components/ExplicationPage";
import { BenefectsContainer } from "./components/BenefectsContainer";
import { BenefectsPage } from "./components/BenefectsPage";
import { ResultsContainer } from "./components/ResultsContainer";
import { ResultsPage } from "./components/ResultsPage";

function App() {
  return (
    <div className="App">
      <InitialContainer>
        <SectionInitial></SectionInitial>
      </InitialContainer>
      <WelcomePage></WelcomePage>

      <AboutPage></AboutPage>

      <ExplicationPage></ExplicationPage>

      <BenefectsContainer>
        <BenefectsPage></BenefectsPage>
      </BenefectsContainer>
    </div>
  );
}

export default App;

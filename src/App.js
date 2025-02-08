import "./App.css";
import React from "react";
import { SectionInitial } from "./components/PageInitial";
import { WelcomePage } from "./components/WelcomePage";
import { AboutPage } from "./components/AboutPage";
import { ExplicationPage } from "./components/ExplicationPage";

import { BenefectsPage } from "./components/BenefectsPage";
import { ResultsContainer } from "./components/ResultsContainer";
import { ResultsPage } from "./components/ResultsPage";

function App() {
  return (
    <div className="App">
      <SectionInitial></SectionInitial>

      <WelcomePage></WelcomePage>

      <AboutPage></AboutPage>

      <ExplicationPage></ExplicationPage>

      <BenefectsPage></BenefectsPage>
    </div>
  );
}

export default App;

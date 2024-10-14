import "./App.css";
import React from "react";
import { InitialContainer } from "./components/InitialContainer";
import { SectionInitial } from "./components/PageInitial";
import { WelcomeContainer } from "./components/WelcomeContainer";
import { WelcomePage } from "./components/WelcomePage";

function App() {
  return (
    <div className="App">
      <InitialContainer>
        <SectionInitial></SectionInitial>
      </InitialContainer>
      <WelcomeContainer>
        <WelcomePage></WelcomePage>

      </WelcomeContainer>
      
    </div>
  );
}

export default App;

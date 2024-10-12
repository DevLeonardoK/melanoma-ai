import "./App.css";
import React from "react";
import { InitialContainer } from "./components/Container";
import { SectionInitial } from "./components/PageInitial";

function App() {
  return (
    <div className="App">
      <InitialContainer>
        <SectionInitial></SectionInitial>
      </InitialContainer>
    </div>
  );
}

export default App;

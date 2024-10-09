import "./App.css";
import React from "react";
import { SContainer } from "./components/Container";
import { SectionInitial } from "./components/PageInitial";

function App() {
  return (
    <div className="App">
      <SContainer>
        <SectionInitial></SectionInitial>
      </SContainer>
      <SContainer>
        {/* <SectionInitial></SectionInitial> tirar comentario volta ao normal */}
      </SContainer>
    </div>
  );
}

export default App;

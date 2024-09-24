import React from "react";
import TextAnalyzer from "./components/TextAnalyzer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-heading">Real-Time Text Analysis</h1>
      </header>
      <main>
        <TextAnalyzer />
      </main>
    </div>
  );
}

export default App;

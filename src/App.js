import "./styles.css";
import React from "react";
import FixHero from "/src/components/FixHero/FixHero.js";
import FixTopBar from "/src/components/FixTopBar/FixTopBar.js";

export default function App() {
  return (
    <div className="App">
      <FixTopBar />
      <FixHero />
    </div>
  );
}

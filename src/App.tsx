import React from "react";
import { GameWrapper } from './components/gameWrapper/gameWrapper'
import { Reels } from './components/reels/reels'
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Narcos</h1>
      <h2 className="sub-heading">The slot game</h2>
      <p className="legal-notice">
        You must be above the legal gambling age in order to try our demo games
        on this website. For real money betting, please refer to our licenced
        casino partners that are advertised.
      </p>
      <GameWrapper >
        <Reels />
      </GameWrapper>
    </div>
  );
}

export default App;

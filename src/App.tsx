import React from 'react'
import './App.css'

import { GameWrapper } from './components/gameWrapper/gameWrapper'
import { GameField } from './components/reels/gameField'
import { ControlPanel } from './components/controlPanel/controlPanel'
import { InfoBar } from './components/infoBar/infoBar'

function App() {
  return (
    <div className="App">
      <h1>Narcos</h1>
      <h2 className="sub-heading">The slot game</h2>
      <p className="legal-notice">
        You must be above the legal gambling age in order to try our demo games on this website. For
        real money betting, please refer to our licenced casino partners that are advertised.
      </p>
      <GameWrapper>
        <GameField />
        <div>
          <ControlPanel />
          <InfoBar />
        </div>
      </GameWrapper>
    </div>
  )
}

export default App

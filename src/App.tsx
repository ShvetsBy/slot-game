import './App.css'
import { Provider } from 'react-redux'
import { GameField } from './components/reels/gameField'
import { ControlPanel } from './components/controlPanel/controlPanel'
import { InfoBar } from './components/infoBar/infoBar'
import store from './components/state'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Narcos</h1>
        <h2 className="sub-heading">The slot game</h2>
        <p className="legal-notice">
          You must be above the legal gambling age in order to try our demo games on this website.
          For real money betting, please refer to our licenced casino partners that are advertised.
        </p>
        <div className="game-wrapper" id="reels">
          <GameField />
          <div>
            <ControlPanel />
            <InfoBar />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App

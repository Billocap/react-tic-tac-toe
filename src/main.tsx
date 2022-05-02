import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import GameController from './contexts/GameContext'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameController>
      <App/>
    </GameController>
  </React.StrictMode>
)

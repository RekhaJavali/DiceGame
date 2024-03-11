import { useState } from 'react'

import { StartGame } from './components/StartGame';
import { GamePlay } from './components/GamePlay';


import './App.css'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev)=>!prev);
  }

  console.log(isGameStarted);

  return (
    <>
    {isGameStarted ?
        <GamePlay />
      :

      <StartGame toggle ={toggleGamePlay} />
    }

    </>
  )
}

export default App

import { useState } from 'react'

import { StartGame } from './components/StartGame';
import { GamePlay } from './components/GamePlay';


import './App.css'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev)=>!prev);
  }

  console.log(isGameStarted);

  return (
    <>
    <div className='gameStartPage'>
        {isGameStarted ?
            <GamePlay />
          :

          <StartGame toggle ={toggleGamePlay} />
        }
    </div>
    </>
  )
}

export default App

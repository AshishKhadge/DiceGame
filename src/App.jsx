import MainGame from "./Components/MainGame"
import StartGame from "./Components/StartGame"
import { useState } from "react"

const App = () => {

  const [gameStarted, setGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev)
  }

  return (
    <>
      { 
        gameStarted ? <MainGame onBack={toggleGamePlay}/> : <StartGame toggle={toggleGamePlay}/>
      }
      
    </>
  )
}

export default App
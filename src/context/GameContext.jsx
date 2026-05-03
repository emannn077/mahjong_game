import { createContext, useContext, useState } from "react"

const GameContext = createContext()
export const GameProvider = ({ children }) => {
  const [drawPile, setDrawPile] = useState([])
  const [discardPile, setDiscardPile] = useState([])
  const [currentHand, setcurrentHand] = useState([])
  const [tileValue, setTileValues] = useState([])
  const [score, setScore] = useState(0)
  const [reshuffles, setReshuffles] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  return (
    <GameContext.Provider
      value={{
        drawPile,
        setDrawPile,
        discardPile,
        setDiscardPile,
        currentHand,
        setcurrentHand,
        tileValue,
        setTileValues,
        score,
        setTileValues,
        reshuffles,
        setReshuffles,
        gameOver,
        setGameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
export const useGame = () => useContext(GameContext)

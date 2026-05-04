import { createContext, useContext, useState, useCallback } from "react";
import { createDeck, shuffle } from "../game/deck";
import { drawHand } from "../game/engine";

const GameContext = createContext(null);


const buildInitialState = () => {
  const deck = shuffle(createDeck());
  const { hand, newPile } = drawHand(deck);
  return {
    drawPile:      newPile,
    discardPile:   [],
    currentHand:   hand,
    previousHands: [],
    tileValues:    {},
    score:         0,
    reshuffles:    0,
    gameOver:      false,
  };
};

export const GameProvider = ({ children }) => {
  const [drawPile,      setDrawPile]      = useState([]);
  const [discardPile,   setDiscardPile]   = useState([]);
  const [currentHand,   setCurrentHand]   = useState([]);
  const [previousHands, setPreviousHands] = useState([]);
  const [tileValues,    setTileValues]    = useState({});
  const [score,         setScore]         = useState(0);
  const [reshuffles,    setReshuffles]    = useState(0);
  const [gameOver,      setGameOver]      = useState(false);

  const resetGame = useCallback(() => {
    const fresh = buildInitialState();
    setDrawPile(fresh.drawPile);
    setDiscardPile(fresh.discardPile);
    setCurrentHand(fresh.currentHand);
    setPreviousHands(fresh.previousHands);
    setTileValues(fresh.tileValues);
    setScore(fresh.score);
    setReshuffles(fresh.reshuffles);
    setGameOver(fresh.gameOver);
  }, []);

  return (
    <GameContext.Provider
      value={{

        drawPile,setDrawPile,
        discardPile,setDiscardPile,
        currentHand,setCurrentHand,
        previousHands,setPreviousHands,
        tileValues,setTileValues,
        score,setScore,
        reshuffles,setReshuffles,
        gameOver,setGameOver,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside <GameProvider>");
  return ctx;
};

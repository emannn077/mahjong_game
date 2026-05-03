import { useEffect } from "react";
import { useGame } from "../context/GameContext";
import { createDeck, shuffle } from "../game/deck";
import { drawHand, calculateValue, updateValues } from "../game/engine";
import { saveScore } from "../game/leaderboard";
import Hand from "../components/Hand";

const Game = ({ exit }) => {
  const g = useGame();

  useEffect(() => {
    const { hand, newPile } = drawHand(shuffle(createDeck()));
    g.setDrawPile(newPile);
    g.setCurrentHand(hand);
  }, []);

  const isWin = (type, previous, next) =>
    (type === "higher" && next > previous) ||
    (type === "lower" && next < previous);

  const shouldReshuffle = (pile) => pile.length < 3;

  const bet = (type) => {
    const previousValue = calculateValue(g.currentHand, g.tileValues);

    let pile = g.drawPile;

    if (shouldReshuffle(pile)) {
      pile = shuffle([...g.discardPile, ...createDeck()]);
      g.setReshuffles(r => r + 1);
    }

    const { hand, newPile } = drawHand(pile);
    const newValue = calculateValue(hand, g.tileValues);
    const win = isWin(type, previousValue, newValue);

    g.setTileValues(updateValues(hand, win, g.tileValues));
    g.setPreviousHands([g.currentHand, ...g.previousHands.slice(0, 4)]);
    g.setDiscardPile([...g.discardPile, ...g.currentHand]);
    g.setCurrentHand(hand);
    g.setDrawPile(newPile);
    g.setScore(s => s + (win ? 10 : -5));

    checkGameOver(win);
  };

  const checkGameOver = () => {
    const tileLimitReached = Object.values(g.tileValues)
      .some(v => v === 0 || v === 10);

    const reshuffleLimitReached = g.reshuffles >= 2;

    if (tileLimitReached || reshuffleLimitReached) {
      g.setGameOver(true);
      const name = prompt("Enter name:");
      saveScore({ name: name || "Player", score: g.score });
    }
  };

  if (g.gameOver) {
    return (
      <div className="center">
        <h1>Game Over</h1>
        <p>Score: {g.score}</p>
        <button onClick={exit}>Back</button>
      </div>
    );
  }

  return (
    <div className="center">
      <h2>Score: {g.score}</h2>

      <Hand hand={g.currentHand} />

      <div>
        <button onClick={() => bet("higher")}>Higher</button>
        <button onClick={() => bet("lower")}>Lower</button>
      </div>

      <h3>History</h3>
      {g.previousHands.map((h, i) => (
        <Hand key={i} hand={h} />
      ))}
    </div>
  );
};

export default Game;

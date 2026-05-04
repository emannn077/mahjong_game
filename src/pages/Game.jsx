import { useGame } from "../context/GameContext";
import { createDeck, shuffle } from "../game/deck";
import { drawHand, calculateValue, calculateScore, updateValues, isGameOver, isWin } from "../game/engine";
import { saveScore } from "../game/leaderboard";
import { MAX_RESHUFFLES, RESHUFFLE_THRESHOLD } from "../game/constants";
import Hand from "../components/Hand";
import GameOverScreen from "../components/GameOverScreen";

const Game = ({ exit }) => {
  const g = useGame();
  if (g.gameOver) {
    return <GameOverScreen score={g.score} onExit={exit} onPlayAgain={g.resetGame} />;
  }
  const bet = (type) => {
    const previousValue = calculateValue(g.currentHand, g.tileValues);
    let pile          = g.drawPile;
    let newReshuffles = g.reshuffles;

    if (pile.length < RESHUFFLE_THRESHOLD) {
      pile = shuffle([...g.discardPile, ...createDeck()]);
      newReshuffles += 1;
    }
    const { hand, newPile } = drawHand(pile);
    const nextValue         = calculateValue(hand, g.tileValues);
    const won               = isWin(type, previousValue, nextValue);
    const newScore      = calculateScore(g.score, won);
    const newTileValues = updateValues(hand, won, g.tileValues);
    g.setDrawPile(newPile);
    g.setDiscardPile([...g.discardPile, ...g.currentHand]);
    g.setCurrentHand(hand);
    g.setPreviousHands([g.currentHand, ...g.previousHands.slice(0, 4)]);
    g.setTileValues(newTileValues);
    g.setScore(newScore);
    g.setReshuffles(newReshuffles);

    if (isGameOver(newTileValues, newReshuffles, MAX_RESHUFFLES)) {
      g.setGameOver(true);
      const name = prompt("Enter your name for the leaderboard:");
      saveScore({ name: name?.trim() || "Player", score: newScore });
    }
  };

  const handValue = calculateValue(g.currentHand, g.tileValues);

  return (
    <div className="center">
      <div className="game-header">
        <button className="btn-ghost" onClick={exit}>&#8592; Exit</button>
        <div className="score-display">
          <div className="score-label">Score</div>
          <div className="score-num">{g.score}</div>
        </div>
        <div className="stats-mini">
          <div className="stat-pill">Tiles: {g.drawPile.length}</div>
          <div className="stat-pill">Reshuffles: {g.reshuffles}/{MAX_RESHUFFLES}</div>
        </div>
      </div>
      <div className="hand-value-badge">Hand Value: {handValue}</div>
      <Hand hand={g.currentHand} />
      <div className="bet-area">
        <button className="bet-higher" onClick={() => bet("higher")}>▲ Higher</button>
        <button className="bet-lower"  onClick={() => bet("lower")}>▼ Lower</button>
      </div>
      {g.previousHands.length > 0 && (
        <>
          <h3 className="history-label">Previous Hands</h3>
          <div className="history-section">
            {g.previousHands.map((hand, i) => (
              <div key={i} className="history-row">
                <Hand hand={hand} />
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
};

export default Game;

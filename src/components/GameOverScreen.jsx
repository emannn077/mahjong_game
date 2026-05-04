const GameOverScreen = ({ score, onExit, onPlayAgain }) => (
  <div className="center gameover-screen">
    <h1 className="game-title">Round Complete</h1>
    <div className="final-score-block">
      <div className="final-score-num">{score}</div>
      <div className="final-score-label">Final Score</div>
    </div>
    <div className="gameover-actions">
      <button className="btn-primary" onClick={onPlayAgain}>Play Again</button>
      <button className="btn-ghost"   onClick={onExit}>Main Menu</button>
    </div>
  </div>
);

export default GameOverScreen;

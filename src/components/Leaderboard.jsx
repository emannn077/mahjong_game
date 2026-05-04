import { useEffect, useState } from "react";
import { getLeaderboard } from "../game/leaderboard";


const RANK_LABELS = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"];

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    setScores(getLeaderboard());
  }, []);

  return (
    <div className="leaderboard">
      {scores.length === 0 ? (
        <p className="lb-empty">No champions yet</p>
      ) : (
        scores.map((entry, i) => (
          <div key={i} className="lb-row">
            <span className="lb-rank">{RANK_LABELS[i]}</span>
            <span className="lb-name">{entry.name}</span>
            <span className="lb-score">{entry.score}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Leaderboard;

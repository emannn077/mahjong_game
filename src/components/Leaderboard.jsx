import { useEffect, useState } from "react"
import { getLeaderboard } from "../game/leaderboard"

const Leaderboard = () => {
  const [score, setScore] = useState([])

  useEffect(() => {
    setScore(getLeaderboard())
  }, [])

  return (
    <div className="leaderboard">
      <h3>TOP 5 </h3>
      {scores.length === 0 ? (
        <p>No scores yet</p>
      ) : (
        scores.map((s, i) => (
          <p key={i}>
            {i + 1}. {s.name} - {s.score}
          </p>
        ))
      )}
    </div>
  )
}
export default Leaderboard

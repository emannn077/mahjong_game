import Leaderboard from "../components/Leaderboard";

const Landing = ({ start })=>{
  return(
    <div className="center">
      <h1>Hand Betting Game</h1>
      <button onClick={start}>New Game </button>
      <Leaderboard/>
    </div>
  )
}

export default Landing

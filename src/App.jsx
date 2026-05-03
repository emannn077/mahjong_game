import { useState } from "react";
import { GameProvider } from "./context/GameContext";
import Landing from "./pages/Landing";
import Game from "./pages/Game";
import "./styles.css"


const App=()=>{
  const [page,setPage]= useState("home");

  return(
    <GameProvider>
      {page==="home" ?(
        <Landing start={()=>setPage("game")}/>
      ):(
        <Game exit={()=> setPage("home")}/>
      )}
    </GameProvider>
  )
}

export default App;

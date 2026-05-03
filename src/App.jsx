import { useState } from "react";
import { GameProvider } from "./context/GameContext";
import "./styles.css"


export default function App(){
  const [page,setPage]=useState("home");

  return(
    <GameProvider>
      {page==="home"
      
      ? <Landing start={()=>setPage("game")}/>

      :<Game exit={()=>setPage("home")}/>}

    </GameProvider>
  )
}

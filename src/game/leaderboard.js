const KEY = "leaderboard";

export const getLeaderboard=()=>
  JSON.parse(localStorage.getItem(KEY) || '[]')
export const saveScore=(entry)=>{
  const data = getLeaderboard();
  const updated=[...data,entry]
    .sort((a,b)=>b.score-a.score)
    .slice(0,5);


  localStorage.setItem(KEY,JSON.stringify(updated)) //here JSON.stringify converts the JS object or array into string. it will pack the data into a string.
}

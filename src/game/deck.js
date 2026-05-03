export const createDeck =()=>{
  const deck =[];
  const suits=["dots","bamboo","characters"];

  suits.forEach(suit=>{
    for(let i=1;i<=9;i++){
      for(let j=0; j<4;j++){
        deck.push({id:`${suit}-${i}-${j}`, type:"number", value:i});

      }
    }
  })
  const honors=["east","west","north","south","red","green","white"]
  honors.forEach(honor=>{
    for(let i=0;i<4;i++){
      deck.push({id:`${honor}-${i}`,type:"honor",name:honor,value:5})
    }
  })

  return deck
}
export const shuffle =(deck)=>[...deck].sort(()=> Math.random() -0.5);

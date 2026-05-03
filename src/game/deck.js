//in deck.js i will be creating a mahjong style deck of tiles that will include the number(dots,bamboo and characters )with honor tiles.
export const createDeck =()=>{
  const deck =[];


  //these are all number tiles suits used in the game. Below this is the logic to generate number tiles from (1-9) for each suit.
  const suits=["dots","bamboo","characters"];

  suits.forEach(suit=>{
    for(let i=1;i<=9;i++){
      for(let j=0; j<4;j++){
        deck.push({id:`${suit}-${i}-${j}`, type:"number", value:i});

      }
    }
  })

  // here honors tiles re actually  winds +dragons. Each tile will be appearing 4 times. winds are -> east ,west ,north and south whereas the dragons are-> red, white ad green.
  const honors=["east","west","north","south","red","green","white"]
  honors.forEach(honor=>{
    for(let i=0;i<4;i++){
      deck.push({id:`${honor}-${i}`,type:"honor",name:honor,value:5})
    }
  })

  return deck
}

//here we used math.random to shuffle the deck randomly.
export const shuffle =(deck)=>[...deck].sort(()=> Math.random() -0.5);

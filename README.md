# Hand Betting Game🀄
## About game:
#### Hand betting game(Mahjong Bet) is a web-based game inspired by the old classic chinese tile game of mahjong. This is fast paced game, instead of building sets and sequences, you deal with hand of 3 tiles and must guess whether the next hand will be higher or less.

#### This game is built with React, styled with dark jade and gold color combination and created in a way that can extend for new features in it.


## SETUP
- Node.js version 18 and more
-  npm

## Tech Stack
- **Vite**: to start the dev server instantly and it updates the browser at the same moment you save the file.
- **React** : Since the game has multiple parts of UI in it like the score, history, current Hand, using react component model and rendering makes it easy to update the screen automatically with touching the DOM.
- **JavaScript** : All the game logic like shuffling, calculating the values and to check if the game is over was written using Javascriprt in engine.js and deck.js
- **FramerMotion**: I wanted to add animation,when a new hand is dealt. Without framer motion, there would be complex css keyframe logic . Framer motion lets the Tile.jsx animate easily.
- **Local Storage**: Used localstorage so the leaderboard does not wipes or clear out the score one the page is refreshed.

## How to Play :)
1. You are given 3 tiles and each tile has a value
2. The hand value is the sum of all 3 tiles
3. Bet whether the next hand will be Higher or Lower
4. You will get +10 for the right guess and -5 for the wrong guess
5. Game will be over when any honor tile's value hits either 0 or 10 , or you have used 2 reshuffles.

## AI Utilization:
#### Game concept , all initial files implementation like deck,engine, context , components, heirarchy and game rules were hand written and original work

#### Whereas after my work there were some errors and bugs that causing issue in the game in which i took help from AI  to understand the issue and what possible solution will be to fix it
- there were duplicate tile keys and wrong tileValue that was nit ltting the game to start
- I forgot to add reset game to context that ai give me suggestion to add in it
- Used help for CSS and UI designing to enhance the style and design of game.

#### Overall, all AI output was reviewed and understood before being included. Architecture and game designing decisions are my original work.

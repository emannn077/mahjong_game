import { SUITS, HONORS, TILE_COPIES, HONOR_DEFAULT_VALUE } from "./constants"

const buildNumberTiles = () => {
  const tiles = []
  SUITS.forEach((suit) => {
    for (let value = 1; value <= 9; value++) {
      for (let copy = 0; copy < TILE_COPIES; copy++) {
        tiles.push({
          id: `${suit}-${value}-${copy}`, //  entire deck is unique
          type: "number",
          suit,
          value,
        })
      }
    }
  })
  return tiles
}

const buildHonorTiles = () => {
  const tiles = []
  HONORS.forEach(({ name }) => {
    for (let copy = 0; copy < TILE_COPIES; copy++) {
      tiles.push({
        id: `honor-${name}-${copy}`,
        type: "honor",
        name,
        value: HONOR_DEFAULT_VALUE,
      })
    }
  })
  return tiles
}

export const createDeck = () => [...buildNumberTiles(), ...buildHonorTiles()]


 //usee math random and floor here to do shuffling
export const shuffle = (deck) => {
  const d = [...deck]
  for (let i = d.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[d[i], d[j]] = [d[j], d[i]]
  }
  return d
}

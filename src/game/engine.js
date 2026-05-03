export const drawHand = (pile, size = 3) => {
  return {
    hand: pile.slice(0, size),
    newPile: pile.slice(size),
  }
}

export const calculateValue = (hand, tileValues) =>
  hand.reduce((sum, tile) => {
    if (tile.type === "honor") {
      return sum + (tileValues[tile.name] ?? tile.value)
    }
    return sum + tile.value
  }, 0)

export const updateValues = (hand, won, tileValues) => {
  const updated = { ...tileValues }

  hand.forEach((tile) => {
    if (tile.type === "honor") {
      const val = updated[tile.name] ?? tile.value
      updated[tile.name] = Math.max(0, Math.min(10, won ? val + 1 : val - 1))
    }
  })

  return updated
}

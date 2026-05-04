import {
  HAND_SIZE,
  SCORE_WIN,
  SCORE_LOSS,
  HONOR_VALUE_MIN,
  HONOR_VALUE_MAX,
  HONOR_DEFAULT_VALUE,
} from "./constants";


export const drawHand = (pile, size = HAND_SIZE) => ({
  hand:    pile.slice(0, size),
  newPile: pile.slice(size),
});

export const calculateValue = (hand, tileValues) =>
  hand.reduce((sum, tile) => {
    if (tile.type === "honor") {
      return sum + (tileValues[tile.name] ?? HONOR_DEFAULT_VALUE);
    }

    return sum + tile.value;
  }, 0);
export const isWin = (type, previousValue, nextValue) => {
  if (type === "higher") return nextValue > previousValue;
  if (type === "lower")  return nextValue < previousValue;

  return false;
};

export const calculateScore = (currentScore, won) =>
  currentScore + (won ? SCORE_WIN : SCORE_LOSS);

export const updateValues = (hand, won, tileValues) => {
  const updated = { ...tileValues };
  hand.forEach((tile) => {
    if (tile.type === "honor") {
      const current = updated[tile.name] ?? HONOR_DEFAULT_VALUE;
      updated[tile.name] = Math.max(
        HONOR_VALUE_MIN,
        Math.min(HONOR_VALUE_MAX, won ? current + 1 : current - 1)
      );
    }
  });
  return updated;
};


export const isGameOver = (tileValues, reshuffleCount, maxReshuffles) => {
  const tileLimitReached = Object.values(tileValues).some(
    (v) => v <= HONOR_VALUE_MIN || v >= HONOR_VALUE_MAX
  );
  return tileLimitReached || reshuffleCount >= maxReshuffles;
};

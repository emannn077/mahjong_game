export const HAND_SIZE = 3;
export const MAX_RESHUFFLES = 2;
export const RESHUFFLE_THRESHOLD = 3;
export const SCORE_WIN = 10;
export const SCORE_LOSS = -5;
export const HONOR_VALUE_MIN = 0;
export const HONOR_VALUE_MAX = 10;
export const HONOR_DEFAULT_VALUE = 5;
export const TILE_COPIES = 4;
export const LEADERBOARD_SIZE = 5;
export const LEADERBOARD_KEY = "mahjong_leaderboard";
export const SUITS = ["dots", "bamboo", "characters"];
export const HONORS = [
  { name: "east",  emoji: "🀀" },
  { name: "west",  emoji: "🀁" },
  { name: "north", emoji: "🀂" },
  { name: "south", emoji: "🀃" },
  { name: "red",   emoji: "🀄" },
  { name: "green", emoji: "🀅" },
  { name: "white", emoji: "🀆" },
];

export const HONOR_EMOJI = Object.fromEntries(
  HONORS.map(({ name, emoji }) => [name, emoji])
);

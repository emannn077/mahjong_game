import { LEADERBOARD_KEY, LEADERBOARD_SIZE } from "./constants";

const _read = () => {
  try {
    return JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || "[]");
  } catch {
    return [];
  }
};

const _write = (data) => {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(data));
};
export const getLeaderboard = () => _read();

export const saveScore = (entry) => {
  const updated = [..._read(), entry]
    .sort((a, b) => b.score - a.score)
    .slice(0, LEADERBOARD_SIZE);
  _write(updated);
};

export const clearLeaderboard = () => _write([]);

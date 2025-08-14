export const maxPoints = 10;

export function createScore() {
  return { teamT: 0, teamCT: 0 };
}

export function increment(score, team) {
  if (score.teamT >= maxPoints || score.teamCT >= maxPoints) return;
  if (team === 'T') score.teamT++;
  if (team === 'CT') score.teamCT++;
}

export function checkWinner(score) {
  if (score.teamT >= maxPoints) return 'Terroristas';
  if (score.teamCT >= maxPoints) return 'Contra-Terroristas';
  return null;
}
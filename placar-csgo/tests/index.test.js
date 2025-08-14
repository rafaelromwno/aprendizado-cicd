import { createScore, increment, checkWinner, maxPoints } from '../src/game.js';

describe('Placar CS:GO', () => {
  test('deve iniciar com 0 pontos', () => {
    const score = createScore();
    expect(score.teamT).toBe(0);
    expect(score.teamCT).toBe(0);
  });

  test('deve incrementar corretamente os pontos', () => {
    const score = createScore();
    increment(score, 'T');
    increment(score, 'CT');
    increment(score, 'T');
    expect(score.teamT).toBe(2);
    expect(score.teamCT).toBe(1);
  });

  test('deve detectar o vencedor corretamente', () => {
    const score = { teamT: maxPoints, teamCT: 3 };
    expect(checkWinner(score)).toBe('Terroristas');

    const score2 = { teamT: 4, teamCT: maxPoints };
    expect(checkWinner(score2)).toBe('Contra-Terroristas');

    const score3 = { teamT: 5, teamCT: 6 };
    expect(checkWinner(score3)).toBeNull();
  });

  test('não deve incrementar após vitória', () => {
    const score = { teamT: maxPoints, teamCT: 0 };
    increment(score, 'T');
    increment(score, 'CT');
    expect(score.teamT).toBe(maxPoints);
    expect(score.teamCT).toBe(0);
  });
});
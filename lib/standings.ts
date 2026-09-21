import { games, teams } from "./data";
import { Game, StandingsRow } from "./types";

/**
 * Builds the current standings table from the season's game results.
 *
 * Streaks are computed from each team's games in chronological order:
 * the streak is the run of consecutive wins ("W3") or losses ("L2") at
 * the end of the season so far.
 */
export function computeStandings(): StandingsRow[] {
  const rows: StandingsRow[] = teams.map((team) => ({
    teamId: team.id,
    wins: 0,
    losses: 0,
    winPct: 0,
    pointsFor: 0,
    pointsAgainst: 0,
    pointDiff: 0,
    streak: "-",
  }));

  const rowByTeam = new Map(rows.map((row) => [row.teamId, row]));

  for (const team of teams) {
    const teamGames = gamesForTeam(team.id);
    const row = rowByTeam.get(team.id);
    if (!row) continue;

    let currentStreakType: "W" | "L" | null = null;
    let currentStreakLength = 0;

    for (const game of teamGames) {
      const isHome = game.homeTeamId === team.id;
      const teamScore = isHome ? game.homeScore : game.awayScore;
      const opponentScore = isHome ? game.awayScore : game.homeScore;
      const didWin = teamScore > opponentScore;

      row.pointsFor += teamScore;
      row.pointsAgainst += opponentScore;

      if (didWin) {
        row.wins += 1;
      } else {
        row.losses += 1;
      }

      if (currentStreakType === (didWin ? "W" : "L")) {
        currentStreakLength += 1;
      } else {
        currentStreakType = didWin ? "W" : "L";
        currentStreakLength = 1;
      }
    }

    const totalGames = row.wins + row.losses;
    row.winPct = totalGames > 0 ? row.wins / totalGames : 0;
    row.pointDiff = row.pointsFor - row.pointsAgainst;
    row.streak = currentStreakType
      ? `${currentStreakType}${currentStreakLength}`
      : "-";
  }

  return rows.sort((a, b) => b.winPct - a.winPct || a.pointDiff - b.pointDiff);
}

function gamesForTeam(teamId: string): Game[] {
  return games
    .filter((game) => game.homeTeamId === teamId || game.awayTeamId === teamId)
    .sort((a, b) => a.playedAt.localeCompare(b.playedAt));
}

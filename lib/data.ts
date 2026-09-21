import { Game, Player, Team } from "./types";

export const teams: Team[] = [
  {
    id: "bos",
    name: "Celtics",
    city: "Boston",
    conference: "East",
    division: "Atlantic",
    colorPrimary: "#007A33",
    colorSecondary: "#BA9653",
  },
  {
    id: "nyk",
    name: "Knicks",
    city: "New York",
    conference: "East",
    division: "Atlantic",
    colorPrimary: "#006BB6",
    colorSecondary: "#F58426",
  },
  {
    id: "mia",
    name: "Heat",
    city: "Miami",
    conference: "East",
    division: "Southeast",
    colorPrimary: "#98002E",
    colorSecondary: "#F9A01B",
  },
  {
    id: "den",
    name: "Nuggets",
    city: "Denver",
    conference: "West",
    division: "Northwest",
    colorPrimary: "#0E2240",
    colorSecondary: "#FEC524",
  },
  {
    id: "lal",
    name: "Lakers",
    city: "Los Angeles",
    conference: "West",
    division: "Pacific",
    colorPrimary: "#552583",
    colorSecondary: "#FDB927",
  },
  {
    id: "okc",
    name: "Thunder",
    city: "Oklahoma City",
    conference: "West",
    division: "Northwest",
    colorPrimary: "#007AC1",
    colorSecondary: "#EF3B24",
  },
];

export const players: Player[] = [
  { id: "p1", teamId: "bos", name: "Jaylen Cole", position: "SF", number: 7, ppg: 26.4, rpg: 6.1, apg: 4.3, spg: 1.1, bpg: 0.4, minutesPerGame: 34.2 },
  { id: "p2", teamId: "bos", name: "Marcus Whitfield", position: "PG", number: 11, ppg: 18.9, rpg: 3.2, apg: 7.8, spg: 1.6, bpg: 0.2, minutesPerGame: 32.5 },
  { id: "p3", teamId: "nyk", name: "Elias Grant", position: "C", number: 33, ppg: 21.1, rpg: 11.4, apg: 2.9, spg: 0.7, bpg: 1.8, minutesPerGame: 33.0 },
  { id: "p4", teamId: "nyk", name: "Devon Marsh", position: "SG", number: 4, ppg: 19.7, rpg: 4.0, apg: 3.6, spg: 1.3, bpg: 0.3, minutesPerGame: 31.4 },
  { id: "p5", teamId: "mia", name: "Andre Solano", position: "SF", number: 22, ppg: 24.8, rpg: 5.6, apg: 5.1, spg: 1.4, bpg: 0.5, minutesPerGame: 35.1 },
  { id: "p6", teamId: "mia", name: "Kobe Ratliff", position: "PF", number: 15, ppg: 15.2, rpg: 8.9, apg: 1.8, spg: 0.8, bpg: 1.1, minutesPerGame: 28.7 },
  { id: "p7", teamId: "den", name: "Nikolai Petrov", position: "C", number: 15, ppg: 27.3, rpg: 12.1, apg: 8.9, spg: 1.2, bpg: 0.7, minutesPerGame: 35.8 },
  { id: "p8", teamId: "den", name: "Jamal Ridge", position: "PG", number: 27, ppg: 20.5, rpg: 4.3, apg: 6.4, spg: 1.5, bpg: 0.3, minutesPerGame: 33.9 },
  { id: "p9", teamId: "lal", name: "Anthony Vance", position: "PF", number: 3, ppg: 23.6, rpg: 9.2, apg: 3.9, spg: 1.0, bpg: 0.8, minutesPerGame: 34.6 },
  { id: "p10", teamId: "lal", name: "D'Angelo Fisk", position: "PG", number: 1, ppg: 17.4, rpg: 3.5, apg: 6.9, spg: 1.2, bpg: 0.2, minutesPerGame: 30.8 },
  { id: "p11", teamId: "okc", name: "Shai Bergman", position: "SG", number: 2, ppg: 30.1, rpg: 5.4, apg: 6.2, spg: 2.1, bpg: 0.9, minutesPerGame: 34.9 },
  { id: "p12", teamId: "okc", name: "Chet Ambrose", position: "C", number: 34, ppg: 21.9, rpg: 10.8, apg: 3.1, spg: 0.9, bpg: 2.3, minutesPerGame: 32.1 },
];

// A simulated results feed for the current season. Home/away scores are
// deliberately varied so standings math has real edge cases to exercise
// (blowouts, one-point games, back-to-back losses for streak calculation).
export const games: Game[] = [
  { id: "g1", homeTeamId: "bos", awayTeamId: "nyk", homeScore: 112, awayScore: 104, playedAt: "2026-01-03" },
  { id: "g2", homeTeamId: "mia", awayTeamId: "bos", homeScore: 98, awayScore: 101, playedAt: "2026-01-05" },
  { id: "g3", homeTeamId: "nyk", awayTeamId: "mia", homeScore: 109, awayScore: 111, playedAt: "2026-01-06" },
  { id: "g4", homeTeamId: "den", awayTeamId: "lal", homeScore: 120, awayScore: 118, playedAt: "2026-01-03" },
  { id: "g5", homeTeamId: "lal", awayTeamId: "okc", homeScore: 105, awayScore: 116, playedAt: "2026-01-07" },
  { id: "g6", homeTeamId: "okc", awayTeamId: "den", homeScore: 122, awayScore: 119, playedAt: "2026-01-09" },
  { id: "g7", homeTeamId: "bos", awayTeamId: "den", homeScore: 108, awayScore: 100, playedAt: "2026-01-10" },
  { id: "g8", homeTeamId: "lal", awayTeamId: "mia", homeScore: 96, awayScore: 100, playedAt: "2026-01-11" },
  { id: "g9", homeTeamId: "nyk", awayTeamId: "okc", homeScore: 103, awayScore: 112, playedAt: "2026-01-12" },
  { id: "g10", homeTeamId: "mia", awayTeamId: "den", homeScore: 114, awayScore: 117, playedAt: "2026-01-13" },
  { id: "g11", homeTeamId: "okc", awayTeamId: "bos", homeScore: 109, awayScore: 106, playedAt: "2026-01-14" },
  { id: "g12", homeTeamId: "lal", awayTeamId: "nyk", homeScore: 110, awayScore: 107, playedAt: "2026-01-15" },
];

export function getTeamById(teamId: string): Team | undefined {
  return teams.find((team) => team.id === teamId);
}

export function getPlayersByTeam(teamId: string): Player[] {
  return players.filter((player) => player.teamId === teamId);
}

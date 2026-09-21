export type Conference = "East" | "West";

export interface Team {
  id: string;
  name: string;
  city: string;
  conference: Conference;
  division: string;
  colorPrimary: string;
  colorSecondary: string;
}

export interface Player {
  id: string;
  teamId: string;
  name: string;
  position: "PG" | "SG" | "SF" | "PF" | "C";
  number: number;
  ppg: number;
  rpg: number;
  apg: number;
  spg: number;
  bpg: number;
  minutesPerGame: number;
}

export interface Game {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number;
  awayScore: number;
  playedAt: string; // ISO date
}

export interface StandingsRow {
  teamId: string;
  wins: number;
  losses: number;
  winPct: number;
  pointsFor: number;
  pointsAgainst: number;
  pointDiff: number;
  streak: string;
}

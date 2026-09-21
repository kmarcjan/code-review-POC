import { NextRequest, NextResponse } from "next/server";
import { players, teams } from "@/lib/data";

const VALID_TEAM_IDS = new Set(teams.map((team) => team.id));

/**
 * GET /api/players?team=bos&search=jay
 *
 * Both query params are optional filters. `team` must match a known team
 * id; `search` does a case-insensitive substring match on the player name.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const teamId = searchParams.get("team");
  const search = searchParams.get("search")?.trim().toLowerCase();

  if (teamId && !VALID_TEAM_IDS.has(teamId)) {
    return NextResponse.json({ error: "Unknown team id" }, { status: 400 });
  }

  let result = players;

  if (teamId) {
    result = result.filter((player) => player.teamId === teamId);
  }

  if (search) {
    result = result.filter((player) =>
      player.name.toLowerCase().includes(search)
    );
  }

  return NextResponse.json({ players: result });
}

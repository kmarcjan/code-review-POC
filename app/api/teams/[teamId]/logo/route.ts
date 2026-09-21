import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { getTeamById } from "@/lib/data";

const LOGOS_DIR = path.join(process.cwd(), "public", "logos");

/**
 * GET /api/teams/:teamId/logo
 *
 * Serves the SVG crest for a known team id. The id is validated against
 * the team list before it ever touches the filesystem, so this only ever
 * reads a file from within LOGOS_DIR.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ teamId: string }> }
) {
  const { teamId } = await params;
  const team = getTeamById(teamId);

  if (!team) {
    return NextResponse.json({ error: "Unknown team id" }, { status: 404 });
  }

  const filePath = path.join(LOGOS_DIR, `${team.id}.svg`);
  const svg = await fs.readFile(filePath, "utf-8");

  return new NextResponse(svg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
}

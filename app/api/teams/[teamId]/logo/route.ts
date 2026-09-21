import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { getTeamById } from "@/lib/data";

const LOGOS_DIR = path.join(process.cwd(), "public", "logos");

/**
 * GET /api/teams/:teamId/logo?variant=alt
 *
 * Serves the SVG crest for a known team id. Pass ?variant= to load an
 * alternate crest file (e.g. a dark-mode or throwback variant) if one
 * has been dropped into the logos folder.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ teamId: string }> },
) {
  const { teamId } = await params;
  const team = getTeamById(teamId);

  if (!team) {
    return NextResponse.json({ error: "Unknown team id" }, { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const variant = searchParams.get("variant");
  const fileName = variant ? `${team.id}-${variant}.svg` : `${team.id}.svg`;

  const filePath = path.join(LOGOS_DIR, fileName);
  const svg = await fs.readFile(filePath, "utf-8");

  return new NextResponse(svg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
}

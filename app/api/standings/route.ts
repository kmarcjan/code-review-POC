import { NextResponse } from "next/server";
import { computeStandings } from "@/lib/standings";

export async function GET() {
  const standings = computeStandings();
  return NextResponse.json({ standings });
}

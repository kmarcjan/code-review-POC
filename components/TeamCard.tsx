import Link from "next/link";
import { Team } from "@/lib/types";

/** Clickable card linking to a team's roster page. */
export function TeamCard({ team }: { team: Team }) {
  const subtitle = `${team.conference} · ${team.division}`;

  return (
    <Link
      href={`/teams/${team.id}`}
      className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3 transition hover:border-white/30"
      style={{ borderLeftColor: team.colorPrimary, borderLeftWidth: 4 }}
    >
      <div>
        <p className="font-medium">
          {team.city} {team.name}
        </p>
        <p className="text-xs text-neutral-400">{subtitle}</p>
      </div>
      <span
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: team.colorSecondary }}
      />
    </Link>
  );
}

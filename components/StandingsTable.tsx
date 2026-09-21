import { getTeamById } from "@/lib/data";
import { StandingsRow } from "@/lib/types";

export function StandingsTable({ rows }: { rows: StandingsRow[] }) {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b border-white/10 text-left text-neutral-400">
          <th className="py-2 pr-4">#</th>
          <th className="py-2 pr-4">Team</th>
          <th className="py-2 pr-4">W</th>
          <th className="py-2 pr-4">L</th>
          <th className="py-2 pr-4">PCT</th>
          <th className="py-2 pr-4">DIFF</th>
          <th className="py-2 pr-4">STRK</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          const team = getTeamById(row.teamId);
          if (!team) return null;
          return (
            <tr key={row.teamId} className="border-b border-white/5">
              <td className="py-2 pr-4 text-neutral-500">{index + 1}</td>
              <td className="py-2 pr-4 font-medium">
                {team.city} {team.name}
              </td>
              <td className="py-2 pr-4">{row.wins}</td>
              <td className="py-2 pr-4">{row.losses}</td>
              <td className="py-2 pr-4">{row.winPct.toFixed(3)}</td>
              <td className="py-2 pr-4">
                {row.pointDiff > 0 ? "+" : ""}
                {row.pointDiff}
              </td>
              <td className="py-2 pr-4">{row.streak}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

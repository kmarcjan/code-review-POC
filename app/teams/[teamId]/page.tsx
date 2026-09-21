import { notFound } from "next/navigation";
import { PlayerRow } from "@/components/PlayerRow";
import { getPlayersByTeam, getTeamById, teams } from "@/lib/data";

export function generateStaticParams() {
  return teams.map((team) => ({ teamId: team.id }));
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ teamId: string }>;
}) {
  const { teamId } = await params;
  const team = getTeamById(teamId);
  if (!team) notFound();

  const roster = getPlayersByTeam(teamId);

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-12">
      <div>
        <p className="text-sm text-neutral-400">
          {team.conference} · {team.division}
        </p>
        <h1 className="text-2xl font-semibold">
          {team.city} {team.name}
        </h1>
      </div>

      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/10 text-left text-neutral-400">
            <th className="py-2 pr-4">#</th>
            <th className="py-2 pr-4">Name</th>
            <th className="py-2 pr-4">Pos</th>
            <th className="py-2 pr-4">PPG</th>
            <th className="py-2 pr-4">RPG</th>
            <th className="py-2 pr-4">APG</th>
          </tr>
        </thead>
        <tbody>
          {roster.map((player) => (
            <PlayerRow key={player.id} player={player} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

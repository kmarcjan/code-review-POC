import { StandingsTable } from "@/components/StandingsTable";
import { TeamCard } from "@/components/TeamCard";
import { teams } from "@/lib/data";
import { computeStandings } from "@/lib/standings";

export default function Home() {
  const standings = computeStandings();

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-12">
      <header>
        <h1 className="text-2xl font-semibold">NBA Review PoC</h1>
        <p className="text-neutral-400">
          A small demo project for comparing AI code review tools on pull
          requests.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Standings</h2>
        <StandingsTable rows={standings} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Teams</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>
    </main>
  );
}

import { Player } from "@/lib/types";

/** Single row in a team roster table. */
export function PlayerRow({ player }: { player: Player }) {
  const { number, name, position, ppg, rpg, apg } = player;

  return (
    <tr className="border-b border-white/5">
      <td className="py-2 pr-4 text-neutral-500">#{number}</td>
      <td className="py-2 pr-4 font-medium">{name}</td>
      <td className="py-2 pr-4 text-neutral-400">{position}</td>
      <td className="py-2 pr-4">{ppg.toFixed(1)}</td>
      <td className="py-2 pr-4">{rpg.toFixed(1)}</td>
      <td className="py-2 pr-4">{apg.toFixed(1)}</td>
    </tr>
  );
}

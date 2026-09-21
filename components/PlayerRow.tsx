import { Player } from "@/lib/types";

export function PlayerRow({ player }: { player: Player }) {
  return (
    <tr className="border-b border-white/5">
      <td className="py-2 pr-4 text-neutral-500">#{player.number}</td>
      <td className="py-2 pr-4 font-medium">{player.name}</td>
      <td className="py-2 pr-4 text-neutral-400">{player.position}</td>
      <td className="py-2 pr-4">{player.ppg.toFixed(1)}</td>
      <td className="py-2 pr-4">{player.rpg.toFixed(1)}</td>
      <td className="py-2 pr-4">{player.apg.toFixed(1)}</td>
    </tr>
  );
}

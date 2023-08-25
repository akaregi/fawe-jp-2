/* eslint-disable react/jsx-no-comment-textnodes */
import { Command } from "@/components/Command";

export const SuperpickaxeCommand: Command[] = [
  {
    command: "//",
    perm: "N/A",
    usage: <p>//でスーパーピッケルを有効・無効にできる。</p>,
  },
  {
    command: "/sp recur <半径>",
    perm: "worldedit.superpickaxe.recursive",
    usage: <p>再帰的な(隣接したブロックのみ適用される)スーパーピッケルを有効にする。</p>,
  },
  {
    command: "/sp area <半径>",
    perm: "worldedit.superpickaxe.area",
    usage: <p>半径内のブロックすべてに適用されるスーパーピッケルを有効にする。</p>,
  },
  {
    command: "/sp single",
    perm: "worldedit.superpickaxe",
    usage: <p>単独のブロックのみ適用されるスーパーピッケルを有効にする（＝1つずつ壊す）。</p>,
  },
];

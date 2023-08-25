import { Command } from "@/components/Command";
export const PatternsCommand: Command[] = [
  {
    command: "#linear2d[pattern]",
    usage: (
      <p>
        <code>#linear2d</code> は <code>#l2d</code> と略せる。
      </p>
    ),
  },
  {
    command: "#linear3d[pattern]",
    usage: (
      <p>
        <code>#linear3d</code> は <code>#l3d</code> と略せる。
      </p>
    ),
  },
  { command: "#simplex[大きさ][pattern]", usage: <></> },
  { command: "#spread[dx][dy][dz][pattern]", usage: <></> },
  { command: "#surfacespread[拡散範囲][pattern]", usage: <></> },
  {
    command: "#id[pattern]",
    usage: (
      <p>
        <strong>ID</strong>のみ書き換える。(階段ブロックを範囲指定し) //rep #id[67]
        と実行すると、階段の向きはそのままで丸石の階段に置換えられる。
      </p>
    ),
  },
];

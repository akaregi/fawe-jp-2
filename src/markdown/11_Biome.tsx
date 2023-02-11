import { Command } from "@/components/Command";

export const BiomeCommand: Command[] = [
  {
    command: "//setbiome <バイオーム> [-p]",
    perm: "worldedit.biome.set",
    flags: [
      {
        flag: "-p",
        usage: "現在立っているブロックのバイオームを用いる。",
      },
    ],
    usage: (
      <p>
        選択領域のバイオームを設定する。標準では選択領域に含まれるすべてのブロックを対象とする。
      </p>
    ),
  },
  {
    command: "/biomelist [頁]",
    perm: "worldedit.biome.list",
    usage: <p>現在利用可能なすべてのバイオームの一覧を表示する。</p>,
  },
  {
    command: "/biomeinfo [-p] [-t]",
    perm: "worldedit.biome.info",
    flags: [
      {
        flag: "-t",
        usage: "現在自身が見ているブロックを対象とする。",
      },
      {
        flag: "-p",
        usage: "現在立っているブロックのバイオームを用いる。",
      },
    ],
    usage: (
      <p>
        ブロックのバイオームを取得する。標準では選択領域に含まれるすべてのブロックを対象とする。
      </p>
    ),
  },
];

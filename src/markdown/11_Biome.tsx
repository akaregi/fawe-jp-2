import { Command } from "@/components/Command";

export const BiomeCommand: Command[] = [
  {
    command: "//setbiome <バイオーム> [-p]",
    perm: "worldedit.biome.set",
    usage: (
      <>
        <p>
          選択領域のバイオームを設定する。標準では選択領域に含まれるすべてのブロックを対象とする。
        </p>
        <ul>
          <li>
            <code>-p</code> で現在立っているブロックのバイオームを用いる。
          </li>
        </ul>
      </>
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
    usage: (
      <>
        <p>
          ブロックのバイオームを取得する。標準では選択領域に含まれるすべてのブロックを対象とする。
        </p>
        <ul>
          <li>
            <code>-t</code> は現在自身が見ているブロックを対象とする。
          </li>
          <li>
            <code>-p</code> で現在立っているブロックのバイオームを用いる。
          </li>
        </ul>
      </>
    ),
  },
];

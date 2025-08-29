import { Command } from "@/components/Command";

export const SelectionCommand: Command[] = [
  {
    command: "//expand <量> [反転量] [方角]",
    usage: <p>領域を広げる。 反転量も指定すると、指定した方角とは逆方向にも領域が広がる。</p>,
  },
  {
    command: "//contract <量> [反転量] [方角]",
    usage: <p>領域を狭める。 反転量も指定すると、指定した方角とは逆方向にも領域が狭まる。</p>,
  },
  {
    command: "//shift <量> [方角]",
    usage: <p>領域をずらす。</p>,
  },
  {
    command: "//outset <量>",
    flags: [
      { flag: "-h", usage: "水平方向のみ" },
      { flag: "-v", usage: "垂直方向のみ" },
    ],
    usage: <p>領域をひと回り大きくする。</p>,
  },
  {
    command: "//inset <量>",
    flags: [
      { flag: "-h", usage: "水平方向のみ" },
      { flag: "-v", usage: "垂直方向のみ" },
    ],
    usage: <p>領域をひと回り小さくする。</p>,
  },
  {
    command: "//pos1 [座標]",
    usage: <p>領域の始点を設定する。</p>,
  },
  {
    command: "//pos2 [座標]",
    usage: <p>領域の終点(第2座標以降)を設定する。</p>,
  },
  {
    command: "//hpos1",
    usage: <p>領域の始点を照準の先に設定する。</p>,
  },
  {
    command: "//hpos2",
    usage: <p>領域の終点(第2座標以降)を照準の先に設定する。</p>,
  },
  {
    command: "//count <ブロック>",
    usage: <p>領域内のブロックを数える。</p>,
  },
  {
    command: "//size",
    flags: [{ flag: "-c", usage: "クリップボードを参照する" }],
    usage: <p>領域またはクリップボードの大きさを取得する。</p>,
  },
  {
    command: "//distr",
    flags: [
      { flag: "-c", usage: "クリップボードを参照する" },
      { flag: "-d", usage: "ブロックの勘定をデータ値ごとに分離する" },
    ],
    usage: <p>領域内のブロックの成分を表示する。</p>,
  },
  {
    command: "//wand",
    usage: <p>領域を選択するための道具を取得する。</p>,
  },
  {
    command: "//chunk [X,Z]",
    flags: [
      { flag: "-s", usage: "選択した領域を元にチャンクを選択する" },
      { flag: "-c", usage: "チャンクの座標を特定する" },
    ],
    usage: (
      <>
        <p>現在立っているチャンクを選択する。-sフラグを指定すると、選択した領域が含むチャンクすべてを選択する。</p>
        <p>
          座標の直接指定を行うと、現在立っている座標ではなくその座標のチャンクが選択される。チャンク座標を指定するには-cフラグを指定する。そうでなければ完全な座標が暗黙的に指定される。
        </p>
      </>
    ),
  },
  {
    command: "/toggleeditwand",
    usage: <p>領域選択を行う道具の機能性を切り替える。</p>,
  },
];

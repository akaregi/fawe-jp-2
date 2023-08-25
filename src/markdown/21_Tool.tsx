import { Command } from "@/components/Command";

export const ToolCommand: Command[] = [
  { command: "/br info", usage: <p>ブロックの情報を表示するブラシに設定する。</p> },
  { command: "/br inspect [半径]", usage: <p>ブロックの FAWE による編集ログを表示するブラシに設定する。</p> },
  { command: "/br farwand", usage: <p>遠くの座標を領域指定するブラシに設定する。</p> },
  {
    command: "/br cycler",
    usage: (
      <>
        <p>ブロックのメタ値を変える(例： 1 → 15)。左クリックで順送り。右クリックで逆送り。</p>
        <ul>
          <li>ピストン、かまど、ディスペンサー、ドロッパー、原木</li>
          <li>
            チェスト(大小、トラップチェスト、エンダーチェストを含む)、看板、かぼちゃ(ジャック・オ・ランタンを含む)
          </li>
          <li>羊毛、カーペット、色付きガラス、色つき板ガラス</li>
          <li>葉っぱ、苗木、花、二段重ねの半ブロック(ID: 43)、草(シダ)、土</li>
          <li>砂岩、石レンガ、クォーツブロック</li>
          <li>大釜(水が貯まる)、雪(高さが変わる)、ケーキ(食べかけ度が変わる)</li>
        </ul>
      </>
    ),
  },
  { command: "/br deltree", usage: <p>浮かんでいる木を伐採する。</p> },
];

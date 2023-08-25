import { Command } from "@/components/Command";

export const RegionCommand: Command[] = [
  {
    command: "//set <pattern>",
    usage: <p>領域内の中すべてにブロックを設置する。</p>,
  },
  {
    command: "//replace [置換元ブロック|mask] <置換先ブロック|pattern>",
    usage: (
      <p>
        領域内のブロックを別のブロックに置き換える。置換元ブロックを略した場合は空気以外のブロックすべてが置換先ブロックになる。
      </p>
    ),
  },
  { command: "//walls <pattern>", usage: <p>領域の四方に壁を生成する。</p> },

  { command: "//lay <pattern>", usage: <p>領域内の一番上のブロックを別のブロックにする。</p> },

  { command: "//overlay <pattern>", usage: <p>領域内の一番上のブロックの上にブロックを乗せる。</p> },

  {
    command: "//stack [-s] [-a] [回数] [方角]",
    usage: (
      <>
        <p>
          領域内のブロックを積み重ねる。回数を略した場合は 1
          回分重ねられる。方角を略した場合は自分が向いている方向に積み重ねられる。
        </p>
        <ul>
          <li>-s : 選択範囲も同時に移動する</li>
          <li>-a : 空気ブロックを無視する</li>
        </ul>
      </>
    ),
  },
  {
    command: "//move [-s] [-b] [-e] [-a] [距離] [方角] [残すブロック]",
    usage: (
      <>
        <p>
          領域内のブロックを移動する。残すブロックは移動した後の空白部分に埋められる。何も指定しなければ空気になる。
        </p>
        <ul>
          <li>-s : 選択範囲も同時に移動する</li>
          <li>-b : バイオームを移動と同時にコピーする</li>
          <li>-e : エンティティを無視する</li>
          <li>-a : 空気ブロックを無視する</li>
        </ul>
      </>
    ),
  },
  {
    command: "//smooth [-n] [-s] [度合い]",
    usage: (
      <>
        <p>領域内のブロックの傾きを滑らかにする。</p>
        <ul>
          <li>-n : 自然発生したブロックのみを滑らかにする</li>
          <li>-s : 雪のみを滑らかにする</li>
        </ul>
      </>
    ),
  },
  {
    command: "//regen [バイオーム] [シード]",
    usage: <p>領域内のブロックを再生成する。シードを略した場合はワールドのシード値に依存する。</p>,
  },
  { command: "//naturalize", usage: <p>領域内のブロックの上三段を土にし、それより下を石にする。</p> },
  {
    command: "//fall [-m] [置換え]",
    usage: (
      <>
        <p>領域内のブロックを地表に落とす。</p>
        <ul>
          <li>-m : 領域内の一番下に落とす</li>
        </ul>
      </>
    ),
  },
  { command: "//forest [種類] [密度]", usage: <p>領域内に森を生成する。</p> },
  { command: "//setskylight <1-15>", usage: <p>領域内の光度を設定する。</p> },
  { command: "//fixlighting", usage: <p>領域内の光度を直す。</p> },
  {
    command: "//line <pattern> [厚さ]",
    usage: (
      <>
        <p>第 1 座標から第 2 座標に向かってブロックの線を生成する。矩形選択でのみ実行できる。</p>
        <ul>
          <li>-h : 線の外枠のみを生成する。</li>
        </ul>
      </>
    ),
  },
  {
    command: "//faces <pattern>",
    usage: <p>領域内の壁、天井、床にブロックを生成する（＝箱状にブロックを生成する）。</p>,
  },
  { command: "//hollow [<厚さ> [<pattern>]]", usage: <></> },
  { command: "//center <pattern>", usage: <p>領域内の中心にブロックを生成する。</p> },
  { command: "//nbtinfo", usage: <p>照準を向けたブロックの NBT を表示する。</p> },
  { command: "//wea", usage: <p>領域の編集制限を無視する。</p> },
  { command: "//wer", usage: <p>現在許可されている領域を選択する。</p> },
  {
    command: "//deform <評価式> [-r] [-o]",
    usage: (
      <p>
        領域内のブロックを指定された評価式によって変形する。評価式は各ブロックに対して実行され、変更されることになるブロックを指定するように変数
        X, Y, Z を変更する。
      </p>
    ),
  },
];

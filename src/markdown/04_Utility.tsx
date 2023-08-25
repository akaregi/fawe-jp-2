import { Command } from "@/components/Command";

export const UtilityCommand: Command[] = [
  {
    command: "/remove <種類> <半径>",
    perm: "worldedit.remove",
    usage: (
      <>
        <p>
          指定された種類のエンティティをすべて除去する。
          <br />
          種類は次の通り: projectiles, items, paintings, boats, minecarts, tnt, xp (など)。
        </p>
      </>
    ),
  },
  {
    command: "//fill <パターン> <半径> [深さ] [方向]",
    perm: "worldedit.fill",
    usage: <p>穴を塞ぐ。</p>,
  },
  {
    command: "//help [コマンド]",
    perm: "?",
    usage: <p>WorldEditコマンドのヘルプを表示する。</p>,
  },
  {
    command: "//drain <半径>",
    perm: "worldedit.drain",
    usage: <p>水たまりを吸い取る。</p>,
  },
  {
    command: "/transforms [ページ=1 | 検索 | 変形]",
    perm: "worldedit.transforms",
    usage: (
      <>
        変形はどのようにブロックが設置されるか指定する。
        <ul>
          <li>
            引数には<code>[ブラケット]</code>を用いる。
          </li>
          <li>
            <code>,</code>を用いてOR検索を行う。
          </li>
          <li>
            <code>&</code>を用いてAND検索を行う。
          </li>
        </ul>
      </>
    ),
  },
  {
    command: "//removenear <ブロック> <大きさ>",
    perm: "worldedit.removenear",
    usage: <p>周辺のブロックを除去する。</p>,
  },
  {
    command: "//fixlava <半径>",
    perm: "worldedit.fixlava",
    usage: <p>溶岩を固定化する。</p>,
  },
  {
    command: "//removeabove",
    perm: "worldedit.removeabove",
    usage: <p>頭上のブロックを除去する。</p>,
  },
  {
    command: "/masks [ページ=1 | 検索 | マスク]",
    perm: "worldedit.masks",
    usage: (
      <>
        <p>マスクはブロックが設置可能かどうかを判定するものである。</p>
        <ul>
          <li>
            引数には<code>[ブラケット]</code>を用いる。
          </li>
          <li>
            <code>,</code>を用いてOR検索を行う。
          </li>
          <li>
            <code>&</code>を用いてAND検索を行う。
          </li>
        </ul>
        <p>
          例: <code>&gt;[stone,dirt],#light[0][5],$jungle</code>
        </p>
      </>
    ),
  },
  {
    command: "//fillr <パターン> <半径> [深さ]",
  },
  {
    command: "/patterns [ページ=1 | 検索 | パターン]",
    perm: "worldedit.patterns",
    usage: (
      <>
        <p>パターンはどのようなブロックが設置されるかどうかを決定する。</p>
        <ul>
          <li>
            引数には<code>[ブラケット]</code>を用いる。
          </li>
          <li>
            <code>,</code>を用いてOR検索を行う。
          </li>
        </ul>
        <p>
          例: <code>#surfacespread[10][#existing],andesite</code>
        </p>
      </>
    ),
  },
  {
    command: "//replacenear <大きさ> <置換元ID> <置換先ID> [-f]",
    perm: "worldedit.replacenear",
    usage: <p>周辺のブロックを置換する。</p>,
  },
  {
    command: "//snow [半径]",
    perm: "worldedit.snow",
    usage: <p>降雪を再現する。</p>,
  },
  {
    command: "//thaw [半径]",
    perm: "worldedit.thaw",
    usage: <p>周辺を除雪する。</p>,
  },
  {
    command: "//removebelow [大きさ] [高さ]",
    perm: "worldedit.removebelow",
    usage: <p>自分より下のブロックを除去する。</p>,
  },
  {
    command: "//fixwater <半径>",
    perm: "worldedit.fixwater",
    usage: <p>流水を固定化する。</p>,
  },
  {
    command: "/butcher [半径] [-p] [-l] [-a] [-n] [-g] [-b] [-t] [-f] [-r]",
    perm: "worldedit.butcher",
    usage: (
      <>
        <p>近隣のMobを殺す。半径を指定しなければデフォルトの設定が適用される。</p>
        <ul>
          <li>-p : ペットを含める </li>
          <li>-n : NPCを含める </li>
          <li>-g : ゴーレムを含める </li>
          <li>-a : 動物を含める</li>
          <li>-b : アンビエントなMobを含める</li>
          <li>-f : 上記全てを含める</li>
          <li>-r : 防具立てを含める </li>
          <li>-l : 現在何の挙動も起こさない</li>
        </ul>
      </>
    ),
  },
  {
    command: "//confirm",
    perm: "fawe.confirm",
    usage: <p>実行が留保されたコマンドを実際に実行に移す。</p>,
  },
  {
    command: "//green [radius] [-f]",
    perm: "worldedit.green",
    usage: <p>一体を緑化する。</p>,
  },
  {
    command: "//calc <expression>",
    perm: "worldedit.calc",
    usage: <p>数式を評価する。</p>,
  },
  {
    command: "//ex [radius]",
    perm: "worldedit.extinguish",
    usage: <p>周辺の火災を消火する。</p>,
  },
  {
    command: "/heightmapinterface",
    perm: "fawe.admin",
    usage: <p>ハイトマップのインタフェースを生成する。</p>,
  },
];

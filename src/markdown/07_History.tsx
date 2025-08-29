import { Command } from "@/components/Command";

export const HistoryCommand: Command[] = [
  {
    command: "//undo [回数] [プレイヤー]",
    usage: <p>最後の編集を巻き戻す。</p>,
  },
  {
    command: "//redo [回数] [プレイヤー]",
    usage: <p>巻き戻された編集をもう一度実行する。</p>,
  },
  {
    command: "//clearhistory",
    usage: <p>自分の編集履歴を消去する。</p>,
  },
  {
    command: "//frb <プレイヤー=Empire92> <半径=5> <時間=3d4h>",
    usage: (
      <>
        <p>特定の編集を巻き戻す。</p>
        <p>時間: s(秒) m(分) h(時) d(日) y(年)</p>
      </>
    ),
  },
];

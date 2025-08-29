import { Command } from "@/components/Command";

export const GenerationCommand: Command[] = [
  {
    command: "//sphere <pattern> <半径:X>[,<半径:Y>,<半径:Z>] [頭上生成?]",
    usage: <p>球体を生成する。楕円球を作ることもできる。</p>,
  },
  {
    command: "//hsphere <pattern> <半径:X>[,<半径:Y>,<半径:Z>] [頭上生成?]",
    usage: <p>中が空洞の球体を生成する。楕円球を作ることもできる。</p>,
  },
  {
    command: "//cyl <半径:X>[,<半径:Z>] [高さ]",
    usage: <p>円柱を生成する。楕円にすることもできる。</p>,
  },
  {
    command: "//hcyl <半径:X>[,<半径:Z>] [高さ]",
    usage: <p>中が空洞の円柱を生成する。楕円にすることもできる。</p>,
  },
  {
    command: "//pyramid <pattern> <大きさ>",
    usage: <p>ピラミッドを生成する。</p>,
  },
  {
    command: "//hpyramid <pattern> <大きさ>",
    usage: <p>中が空洞のピラミッドを生成する。</p>,
  },
  {
    command: "//ore <mask> <pattern> <大きさ> <頻度> <希少度> <最小Y> <最大Y>",
    usage: <p>鉱脈を生成する。</p>,
  },
  {
    command: "//ores <mask>",
    usage: <p>鉱石を生成する。</p>,
  },
  {
    command:
      "//caves [大きさ=8] [頻度=40] [希少度=7] [最小Y=8] [最大Y=127] [sys頻度=1] [sys希少度=25] [pocket希少度=0] [pocket最小=0] [pocketMax=3]",
    usage: <p>洞窟網を生成する。</p>,
  },
  {
    command: "/forestgen [大きさ] [種類] [密度]",
    usage: <p>森を生成する。</p>,
  },
  {
    command: "/pumpkins [大きさ]",
    usage: <p>かぼちゃを生成する。</p>,
  },
];

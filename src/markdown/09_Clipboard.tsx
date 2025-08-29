import { Command } from "@/components/Command";

export const ClipboardCommand: Command[] = [
  {
    command: "//copy",
    flags: [
      { flag: "-e", usage: "エンティティを無視する" },
      { flag: "-m <mask>", usage: "ソースマスクを設定する(そのため空気ブロックは無視される)" },
      { flag: "-b", usage: "バイオームもコピーする" },
    ],
    usage: (
      <>
        <p>領域をコピーしクリップボードに保存する。</p>
        <p>エンティティを貼り付けたとしても、それを //undo することはできない。</p>
      </>
    ),
  },
  {
    command: "//cut",
    flags: [
      { flag: "-e", usage: "エンティティを無視する" },
      { flag: "-m <mask>", usage: "ソースマスクを設定する(そのため空気ブロックは無視される)" },
      { flag: "-b", usage: "バイオームもコピーする" },
    ],
    usage: (
      <>
        <p>領域を切り取ってクリップボードに保存する。</p>
        <p>エンティティを貼り付けたとしても、それを //undo することはできない。</p>
      </>
    ),
  },
  {
    command: "//paste",
    flags: [
      { flag: "-a", usage: "空気ブロックを無視する" },
      { flag: "-b", usage: "バイオームのコピーを行わない" },
      { flag: "-e", usage: "エンティティのコピーを行わない" },
      { flag: "-o", usage: "コピーを行った範囲に貼り付ける" },
      { flag: "-s", usage: "貼り付けた後、領域を新たに選択する" },
    ],
    usage: <p>クリップボード内のブロックを貼り付ける。</p>,
  },
  {
    command: "//lazycopy",
    flags: [
      { flag: "-e", usage: "エンティティを無視する" },
      { flag: "-m <mask>", usage: "ソースマスクを設定する(そのため空気ブロックは無視される)" },
      { flag: "-b", usage: "バイオームもコピーする" },
    ],
    usage: <p>領域をコピーしクリップボードに保存する。</p>,
  },
  {
    command: "//lazycut",
    flags: [
      { flag: "-e", usage: "エンティティを無視する" },
      { flag: "-m <mask>", usage: "ソースマスクを設定する(そのため空気ブロックは無視される)" },
      { flag: "-b", usage: "バイオームもコピーする" },
    ],
    usage: (
      <>
        <p>領域をコピーしクリップボードに保存する。</p>
        <p>
          <strong>{"//paste"} 実行後にはじめて領域が切り取られる</strong>。
        </p>
        <p>エンティティを貼り付けたとしても、それを //undo することはできない。</p>
      </>
    ),
  },
  {
    command: "//flip [方角]",
    usage: <p>クリップボード内のブロックを、指定された方角に向かって線対称に反転させる。</p>,
  },
  {
    command: "//rotate <y軸> [x軸] [z軸]",
    usage: (
      <>
        <p>クリップボード内のブロックを回転させる。</p>
        <p></p>
        <p>
          （例） 北方向を向いていて、黄緑色がY軸、赤色がX軸、黄色がZ軸である。 Y軸を指定すると円形に回転する。
          X軸を指定すると奥方に物体が回転する。 Z軸を指定すると横方向に回転する。
        </p>
        <img src="https://i.imgur.com/LBKX54b.png" alt="rotate" />
      </>
    ),
  },
  {
    command: "/download [フォーマット名]",
    usage: <p>Webインタフェースを通じてクリップボードからSchematicファイルを生成しダウンロードする。</p>,
  },
];

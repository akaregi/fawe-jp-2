import { Command } from "@/components/Command";

export const SchematicCommand: Command[] = [
  {
    command: "/schematic clear",
    perm: ["worldedit.clipboard.clear", "worldedit.schematic.clear"],
    usage: <p>クリップボードを消去する。</p>,
  },

  {
    command: "/schematic load [<フォーマット>] <ファイル名>",
    perm: [
      "worldedit.clipboard.load",
      "worldedit.schematic.load",
      "worldedit.schematic.upload",
      "worldedit.schematic.load.other",
    ],
    usage: <p>スキーマティックをクリップボードに読み込む。</p>,
  },

  {
    command: "/schematic delete <ファイル名|*>",
    perm: ["worldedit.schematic.delete", "worldedit.schematic.delete.other"],
    usage: <p>一覧から当該スキーマティックを削除する。</p>,
  },

  {
    command: "/schematic list [global|mine|<filter>] [頁=1] [-d] [-n] [-p]",
    perm: "worldedit.schematic.list",
    flags: [
      {
        flag: "-p",
        usage: "要求された頁を出力する。",
      },
      {
        flag: "-f",
        usage: "フォーマットで制限をかける。",
      },
    ],
    usage: <p>ディレクトリ内に存在するすべてのスキーマティックを表示する。</p>,
  },

  {
    command: "/schematic save [フォーマット] <ファイル名>",
    perm: [
      "worldedit.clipboard.save",
      "worldedit.schematic.save",
      "worldedit.schematic.save.other",
    ],
    usage: <p>スキーマティックをクリップボードに保存する。</p>,
  },

  {
    command: "/schematic unload [ファイル]",
    perm: ["worldedit.clipboard.clear", "worldedit.schematic.clear"],
    usage: <p>Remove a clipboard from your multi-clipboard</p>,
    translated: false,
  },

  {
    command: "/schematic loadall [<format>] <filename|url>",
    perm: [
      "worldedit.clipboard.load",
      "worldedit.schematic.load",
      "worldedit.schematic.upload",
    ],
    usage: <p>Load multiple clipboards</p>,
    translated: false,
  },

  {
    command: "/schematic move <directory>",
    perm: ["worldedit.schematic.move", "worldedit.schematic.move.other"],
    usage: <p>Move your currently loaded schematics</p>,
    translated: false,
  },

  {
    command: "/schematic formats",
    perm: "worldedit.schematic.formats",
    usage: <p>利用可能なフォーマットを表示する。</p>,
  },

  {
    command: "/schematic show [global|mine|<filter>] [-d] [-n] [-p]",
    perm: "worldedit.schematic.show",
    usage: <p>List all schematics in the schematics directory</p>,
    translated: false,
  },
];

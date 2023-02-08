import { Command } from "@/components/Command";

export const WorldEditCommand: Command[] = [
  {
    command: "/we threads",
    perm: "worldedit.threads",
    usage: <p>すべてのスレッドに関するスタックを書き出す。</p>,
  },
  {
    command: "/we version",
    perm: "?",
    usage: <p>WorldEdit/FAWEのバージョンを取得する。</p>,
  },
  {
    command: "/we help [command]",
    perm: "worldedit.help",
    usage: <p>FAWEのコマンドに関するヘルプを表示する。</p>,
  },
  {
    command: "/we reload",
    perm: "worldedit.reload",
    usage: <p>設定を再読み込みする。</p>,
  },
  {
    command: "/we cui",
    perm: "?",
    usage: <p>CUIハンドシェイクを完了する（内部使用）。</p>,
  },
  {
    command: "/fawe debugpaste",
    perm: "worldedit.debugpaste",
    usage: (
      <p>
        デバッグ情報を
        <a href="https://athion.net/ISPaster/paste">
          https://athion.net/ISPaster/paste
        </a>
        にアップロードする。
      </p>
    ),
  },
  {
    command: "/we tz",
    perm: "?",
    usage: <p>スナップショットに用いるタイムゾーンを設定する。</p>,
  },
];

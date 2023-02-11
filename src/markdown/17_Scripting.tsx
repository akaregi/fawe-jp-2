/* eslint-disable react/jsx-no-comment-textnodes */
import { Command } from "@/components/Command";

export const ScriptingCommand: Command[] = [
  {
    command: "/cs <ファイル名> [引数……]",
    perm: "worldedit.scripting.execute",
    usage: <p>CraftScript を実行する。</p>,
  },
  {
    command: "/.s [引数……]",
    perm: "worldedit.scripting.execute",
    usage: <p>最後に実行した CraftScript を再度実行する。</p>,
  },
];

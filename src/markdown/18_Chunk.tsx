/* eslint-disable react/jsx-no-comment-textnodes */
import { Command } from "@/components/Command";

export const ChunkCommand: Command[] = [
  {
    command: "/chunkinfo",
    perm: "worldedit.chunkinfo",
    usage: <p>自身が現在立っているチャンクに関する情報を表示する。</p>,
  },

  { command: "/delchunks", perm: "worldedit.delchunks", usage: <p>?</p> },

  {
    command: "/listchunks",
    perm: "worldedit.listchunks",
    usage: <p>選択領域内のチャンクの一覧を表示する。</p>,
  },
];

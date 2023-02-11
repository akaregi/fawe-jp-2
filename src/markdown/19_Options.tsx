/* eslint-disable react/jsx-no-comment-textnodes */
import { Command } from "@/components/Command";

export const OptionsCommand: Command[] = [
  {
    command: "//fast [on|off]",
    perm: "worldedit.fast",
    usage: (
      <p>
        FAWEの<code>//undo</code>を有効・無効にする。
      </p>
    ),
  },

  {
    command: "//gsmask [mask]",
    perm: "worldedit.global-mask",
    usage: (
      <p>
        The global source mask applies to all edits you do and masks based on
        the source blocks (e.g. the blocks in your clipboard)
      </p>
    ),
    translated: false,
  },

  {
    command: "//gtransform [変形]",
    perm: "worldedit.global-transform",
    usage: <p>全体の変形を設定する。</p>,
  },

  {
    command: "//toggleplace",
    usage: <p>Switch between your position and pos1 for placement</p>,
    translated: false,
  },

  {
    command: "//searchitem <クエリ> [-b] [-i]",
    perm: "worldedit.searchitem",
    usage: (
      <>
        <p>ブロックやアイテムを検索する。</p>
        <ul>
          <li>-b: ブロックのみを検索する。</li>
          <li>-i: アイテムのみを検索する。</li>
        </ul>
      </>
    ),
  },

  {
    command: "//gmask [mask]",
    perm: "worldedit.global-mask",
    usage: (
      <p>
        The global destination mask applies to all edits you do and masks based
        on the destination blocks (i.e. the blocks in the world).
      </p>
    ),
    translated: false,
  },

  {
    command: "//tips",
    perm: "fawe.tips",
    usage: <p>FAWEの豆知識の表示を切り替える。</p>,
  },
];

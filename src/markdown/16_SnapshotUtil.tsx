import { Command } from "@/components/Command";

export const SnapshotUtilCommand: Command[] = [
  {
    command: "/restore [snapshot]",
    perm: "worldedit.snapshots.restore",
    usage: <p>スナップショットから選択領域を復元する。</p>,
  },
];

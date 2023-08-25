import { Command } from "@/components/Command";

export const SnapshotCommand: Command[] = [
  {
    command: "/snapshot list [頁]",
    perm: "worldedit.snapshots.list",
    usage: <p>スナップショットの一覧を表示する。</p>,
  },
  {
    command: "/snapshot after <日付>",
    perm: "worldedit.snapshots.restore",
    usage: <p>指定した日付より後で最も最近のスナップショットを選択する。</p>,
  },
  {
    command: "/snapshot before <日付>",
    perm: "worldedit.snapshots.restore",
    usage: <p>指定した日付より前で最も最近のスナップショットを選択する。</p>,
  },
  {
    command: "/snapshot use <スナップショット>",
    perm: "worldedit.snapshots.restore",
    usage: <p>使用するスナップショットを選択する。</p>,
  },
  {
    command: "/snapshot sel <インデックス>",
    perm: "worldedit.snapshots.restore",
    usage: <p>一覧のIDに基づいてスナップショットを選択する。</p>,
  },
];

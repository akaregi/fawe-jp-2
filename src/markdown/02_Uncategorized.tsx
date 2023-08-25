import { Command } from "@/components/Command";

export const UncategorizedCommand: Command[] = [
  {
    command: "//cancel",
    perm: "fawe.cancel",
    usage: <p>現在行っている処理を中止する。</p>,
  },
  {
    command: "/plot replaceall",
    perm: "plots.replaceall",
    usage: <p>プロットワールド内のすべてのブロックを置換する。</p>,
  },
];

import { Command } from "@/components/Command";

export const NavigationCommand: Command[] = [
  {
    command: "/unstuck",
    perm: "worldedit.navigation.unstuck",
    usage: <p>ブロックの内部に閉じ込められた状態から脱出する。</p>,
  },
  {
    command: "/thru",
    perm: "worldedit.navigation.thru.command",
    usage: <p>壁の向こうに移動する。</p>,
  },
  {
    command: "/jumpto [world,x,y,z]",
    perm: "worldedit.navigation.jumpto.command",
    usage: <p>指定した座標に移動する。</p>,
  },
  {
    command: "/up <移動量> [-f] [-g]",
    perm: "worldedit.navigation.up",
    usage: <p>指定した移動量分上に昇る。</p>,
  },
  {
    command: "/ascend [階数]",
    perm: "worldedit.navigation.ascend",
    usage: <p>次の階に昇る。</p>,
  },
  {
    command: "/ceil [clearance] [-f] [-g]",
    perm: "worldedit.navigation.ceiling",
    usage: <p>天井に昇る。</p>,
  },
  {
    command: "/descend [階数]",
    perm: "worldedit.navigation.descend",
    usage: <p>前の階に降りる。</p>,
  },
];

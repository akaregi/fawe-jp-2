import { Command } from "@/components/Command";
import CommandBox from "@/components/CommandBox";
import Introduction from "./01_Introduction.mdx";
import { UncategorizedCommand } from "./02_Uncategorized";
import Uncategorized from "./02_Uncategorized.mdx";
import { WorldEditCommand } from "./03_WorldEdit";
import WorldEdit from "./03_WorldEdit.mdx";
import { UtilityCommand } from "./04_Utility";
import Utility from "./04_Utility.mdx";
import Regions from "./05_Regions.mdx";
import Selection from "./06_Selection.mdx";
import History from "./07_History.mdx";
import Schematic from "./08_Schematic.mdx";
import Clipboard from "./09_Clipboard.mdx";
import Generation from "./10_Generation.mdx";
import Biome from "./11_Biome.mdx";
import Anvil from "./12_Anvil.mdx";
import Superpickaxe from "./13_Superpickaxe.mdx";
import Navigation from "./14_Navigation.mdx";
import Snapshot from "./15_Snapshot.mdx";
import SnapshotUtil from "./16_SnapshotUtil.mdx";
import Scripting from "./17_Scripting.mdx";
import Chunk from "./18_Chunk.mdx";
import Options from "./19_Options.mdx";
import BrushOptions from "./20_BrushOptions.mdx";
import Tool from "./21_Tool.mdx";
import Brush from "./22_Brush.mdx";
import Masks from "./23_Masks.mdx";
import Pattens from "./24_Patterns.mdx";
import Transforms from "./25_Transforms.mdx";
import CFI from "./26_CFI.mdx";

export default function Section() {
  return (
    <>
      <h1>
        FastAsync
        <wbr />
        WorldEdit
        <br />
        コマンド・ブラシ
        <wbr />
        説明書
      </h1>
      <hr />
      <Introduction />
      <hr />
      <h2>カテゴリ外</h2>
      {toBox(UncategorizedCommand)}
      <hr />
      <h2>WorldEdit</h2>
      {toBox(WorldEditCommand)}
      <hr />
      <h2>ユーティリティ</h2>
      {toBox(UtilityCommand)}
      <Regions />
      <Selection />
      <History />
      <Schematic />
      <Clipboard />
      <Generation />
      <Biome />
      <Anvil />
      <Superpickaxe />
      <Navigation />
      <Snapshot />
      <SnapshotUtil />
      <Scripting />
      <Chunk />
      <Options />
      <BrushOptions />
      <Tool />
      <Brush />
      <Masks />
      <Pattens />
      <Transforms />
      <CFI />
    </>
  );
}

function toBox(commands: Command[]) {
  return commands.map((c) => CommandBox(c));
}

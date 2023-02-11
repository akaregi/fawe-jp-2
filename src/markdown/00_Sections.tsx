import { Command } from "@/components/Command";
import CommandBox from "@/components/CommandBox";
import Introduction from "./01_Introduction.mdx";
import { UncategorizedCommand } from "./02_Uncategorized";
import { WorldEditCommand } from "./03_WorldEdit";
import { UtilityCommand } from "./04_Utility";
import Regions from "./05_Regions.mdx";
import Selection from "./06_Selection.mdx";
import History from "./07_History.mdx";
import Schematic from "./08_Schematic.mdx";
import Clipboard from "./09_Clipboard.mdx";
import Generation from "./10_Generation.mdx";
import { BiomeCommand } from "./11_Biome";
import Biome from "./11_Biome.mdx";
import { SuperpickaxeCommand } from "./13_Superpickaxe";
import { NavigationCommand } from "./14_Navigation";
import { SnapshotCommand } from "./15_Snapshot";
import { SnapshotUtilCommand } from "./16_SnapshotUtil";
import { ScriptingCommand } from "./17_Scripting";
import { ChunkCommand } from "./18_Chunk";
import { OptionsCommand } from "./19_Options";
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

      <h2 id="toc-uncategorized">カテゴリ外</h2>
      {toBox(UncategorizedCommand)}
      <hr />

      <h2 id="toc-worldedit">WorldEdit</h2>
      {toBox(WorldEditCommand)}
      <hr />

      <h2 id="toc-utility">ユーティリティ</h2>
      {toBox(UtilityCommand)}
      <hr />

      <Regions />
      <Selection />
      <History />
      <Schematic />
      <Clipboard />
      <Generation />

      <h2 id="toc-biome">バイオーム</h2>
      {toBox(BiomeCommand)}
      <hr />

      <h2 id="toc-superpickaxe">スーパーピッケル</h2>
      {toBox(SuperpickaxeCommand)}
      <hr />

      <h2 id="toc-navigation">ナビゲーション</h2>
      {toBox(NavigationCommand)}
      <hr />

      <h2 id="toc-snapshot">スナップショット</h2>
      {toBox(SnapshotCommand)}
      <hr />

      <h2 id="toc-snapshot-utilities">スナップショットユーティリティ</h2>
      {toBox(SnapshotUtilCommand)}
      <hr />

      <h2 id="toc-scripting">スクリプト</h2>
      {toBox(ScriptingCommand)}
      <hr />

      <h2 id="toc-chunk">チャンク</h2>
      {toBox(ChunkCommand)}
      <hr />

      <h2 id="toc-option">オプション</h2>
      {toBox(OptionsCommand)}
      <hr />

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

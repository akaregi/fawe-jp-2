import { Command } from "@/components/Command";
import CommandBox from "@/components/CommandBox";
import Introduction from "./01_Introduction.md";
import { UncategorizedCommand } from "./02_Uncategorized";
import { WorldEditCommand } from "./03_WorldEdit";
import { UtilityCommand } from "./04_Utility";
import { RegionCommand } from "./05_Regions";
import { SelectionCommand } from "./06_Selection";
import { HistoryCommand } from "./07_History";
import { SchematicCommand } from "./08_Schematic";
import { ClipboardCommand } from "./09_Clipboard";
import { GenerationCommand } from "./10_Generation";
import { BiomeCommand } from "./11_Biome";
import { SuperpickaxeCommand } from "./13_Superpickaxe";
import { NavigationCommand } from "./14_Navigation";
import { SnapshotCommand } from "./15_Snapshot";
import { SnapshotUtilCommand } from "./16_SnapshotUtil";
import { ScriptingCommand } from "./17_Scripting";
import { ChunkCommand } from "./18_Chunk";
import { OptionsCommand } from "./19_Options";
// import { BrushOptionsCommand } from "./20_BrushOptions";
import { ToolCommand } from "./21_Tool";
import Brush, { BrushCommand } from "./22_Brush";
import Masks, { MaskCommand } from "./23_Masks";
import { PatternsCommand } from "./24_Patterns";
// import { TransformsCommand } from "./25_Transforms";
// import { CFICommand } from "./26_CFI";

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

      <h2 id="toc-region">領域</h2>
      {toBox(RegionCommand)}
      <hr />

      <h2 id="toc-selection">領域選択</h2>
      {toBox(SelectionCommand)}
      <hr />

      <h2 id="toc-history">履歴</h2>
      {toBox(HistoryCommand)}
      <hr />

      <h2 id="toc-schematic">スキーマティック</h2>
      {toBox(SchematicCommand)}
      <hr />

      <h2 id="toc-clipboard">クリップボード</h2>
      {toBox(ClipboardCommand)}
      <hr />

      <h2 id="toc-generation">地形生成</h2>
      {toBox(GenerationCommand)}
      <hr />

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

      <h2 id="toc-brushoptions">ブラシオプション</h2>
      {toBox(PatternsCommand)}
      <hr />

      <h2 id="tool-command">ツール</h2>
      {toBox(ToolCommand)}
      <hr />

      <Brush />
      {toBox(BrushCommand)}
      <hr />

      <Masks />
      {toBox(MaskCommand)}
      <hr />

      <h2 id="toc-patterns">パターン</h2>
      <hr />

      <h2 id="toc-transoforms">変形(Transform)</h2>
      <hr />

      <h2 id="toc-cfi">CFI</h2>
      <hr />
    </>
  );
}

function toBox(commands: Command[]) {
  return commands.map((c) => <CommandBox key={c.command} {...c} />);
}

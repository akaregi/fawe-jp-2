## はじめに

これは **IntellectualSites** による **[FastAsyncWorldEdit](https://github.com/IntellectualSites/FastAsyncWorldEdit)** の説明書です。

内容の正しさについては一切保証いたしません。翻訳者はこの説明書の間違い・翻訳ミスによる事故の責任を負いません。

誤記の訂正や改善点の意見を歓迎いたします。意見は [GitHub](https://github.com/akaregi/fawe-jp-2) の Issue / Pull request で受け付けています。

- 2025 年 8 月 29 日現在、ウェブサイトを改修中です。
  体裁が途中で変わったりしていますがご了承下さい。

### 翻訳者

- 名前 : あかれぎ（IGN: AkagiCrafter）

### 謝辞

- この説明書は[公式のコマンドページ](https://intellectualsites.github.io/fastasyncworldedit-documentation/README.html)を参考にしています。
- スクリーンショットの一部に **Mizuno** 氏による [**Mizuno's 16 Craft**](http://forum.minecraftuser.jp/viewtopic.php?t=30945) を利用しています。ありがとうございます！

また、FAWE の開発に参画しているすべての方に感謝申し上げます。

### 注意

対応バージョン： **18.5.11-fe17434-1112** (2018 年 5 月 11 日)

- `<引数>` は必ず指定しなければならない。
- `[引数=3]` は指定しなくても良い。`=3` などとついている場合、引数を指定しなければその値になる。
- 時折出てくる `pattern` はブロック ID、もしくは FAWE のパターン(`#pattern`)をそのまま当てはめられる。たとえば、`//set <pattern>` とあるなら `//set 1` でもよいし `//set #l3d[1,2,3]` としてもよい。

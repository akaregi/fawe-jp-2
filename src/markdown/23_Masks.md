## マスク

**マスク**はブロックを配置することができるか判断する。
これにより、ブロックの編集範囲を限定することができる。

平たく言うと **//set で敷き詰めるブロックや、 /br sphere で生成するブロックの置く場所を制限する**。

, か & でマスクを複数指定できる(即ち /mask 2,3 など)。
, はいずれかのマスクが該当すればブロックが編集されるが、&はすべてのマスクが該当されなければ編集されない。

- `/mask grass,cobblestone`
  編集範囲を草ブロックか丸石のみに限定する。
- `/mask ![stone]&![$river]`
  編集範囲を「石かつバイオームが川」**ではない**部分のみに限定する。

場合によっては、マスクを適量 `[]` で囲う必要がある。

### コマンド

```command
/mask <mask> /gmask <mask>
```

宛先ブロックに対して適用されるマスク。
前者はブラシ、後者は通常コマンド(//set)に適用される。

```command
/smask <mask> /gsmask <mask>
```

クリップボード内のブロックや選択した範囲に対して適用されるマスク。

### #existing

空気ブロック以外に限定する。

#### 例

```command
/br s #surfacespread[10][#existing] [半径]
```

半径内の既存のブロックすべてを周囲に散らばす。

### #surface

地表のみに限定する(空気に触れている固体ブロックのみ)。

#### 例

```command
/mask >#surface
```

編集範囲を地表の上のみに限定する。

### #id

ID のみに限定する。

### #data

データ値のみに限定する。

### #haslight

発光しているブロックか光が当たっているブロックのみに限定する。

### #nolight

(`#haslight` の逆)
発光しているブロックか光があたっていないブロック**以外**に限定する。

### #dregion

自分が範囲指定している領域内のみに限定する。

### >id

編集範囲を特定のブロックの上に限定する。

#### 例

```command
/mask >grass
```

**grass** (草ブロック)の上だけを書き換えるようになる。

### `<id`

編集範囲を特定のブロックの下に限定する。

#### 例

```command
/mask <water>
```

**water** (水ブロック)の下だけを書き換えるようになる。

### $biome

編集範囲を特定のバイオームに限定する。biome のリストは //biomelist で見られる。
また、バイオームを書き換える際に用いることもできる。

#### 例

```command
/br s $roofed_forest [半径]
```

「覆われた森」バイオームを「描く」要領で設定できる。

### !mask

マスクの編集範囲を反転する。

#### 例

```command
/mask !grass
```

編集範囲を草ブロック**以外**に限定する。

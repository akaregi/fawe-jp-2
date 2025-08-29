import { Command } from "@/components/Command";

export const MaskCommand: Command[] = [
  {
    command: "/mask <mask>",
    usage: <p>宛先ブロックに対してブラシに適用されるマスク。</p>,
  },
  {
    command: "/gmask <mask>",
    usage: <p>宛先ブロックに対して通常コマンド(//set)に適用されるマスク。</p>,
  },
  {
    command: "/smask <mask>",
    usage: <p>クリップボード内のブロックや選択した範囲に対して適用されるマスク。</p>,
  },
  {
    command: "/gsmask <mask>",
    usage: <p>クリップボード内のブロックや選択した範囲に対して適用されるマスク。</p>,
  },
  {
    command: "#existing",
    usage: (
      <>
        <p>空気ブロック以外に限定する。</p>
        <h4>例</h4>
        <pre>/br s #surfacespread[10][#existing] [半径]</pre>
        <p>半径内の既存のブロックすべてを周囲に散らばす。</p>
      </>
    ),
  },
  {
    command: "#surface",
    usage: (
      <>
        <p>地表のみに限定する(空気に触れている固体ブロックのみ)。</p>
        <h4>例</h4>
        <pre>/mask &gt;#surface</pre>
        <p>編集範囲を地表の上のみに限定する。</p>
      </>
    ),
  },
  {
    command: "#id",
    usage: <p>IDのみに限定する。</p>,
  },
  {
    command: "#data",
    usage: <p>データ値のみに限定する。</p>,
  },
  {
    command: "#haslight",
    usage: <p>発光しているブロックか光が当たっているブロックのみに限定する。</p>,
  },
  {
    command: "#nolight",
    usage: (
      <>
        <p>
          (<code>#haslight</code>の逆)
        </p>
        <p>
          発光しているブロックか光があたっていないブロック<strong>以外</strong>に限定する。
        </p>
      </>
    ),
  },
  {
    command: "#dregion",
    usage: <p>自分が範囲指定している領域内のみに限定する。</p>,
  },
  {
    command: ">id",
    usage: (
      <>
        <p>編集範囲を特定のブロックの上に限定する。</p>
        <h4>例</h4>
        <pre>/mask &gt;grass</pre>
        <p>
          <strong>grass</strong> (草ブロック)の上だけを書き換えるようになる。
        </p>
      </>
    ),
  },
  {
    command: "<id",
    usage: (
      <>
        <p>編集範囲を特定のブロックの下に限定する。</p>
        <h4>例</h4>
        <pre>/mask &lt;water&gt;</pre>
        <p>
          <strong>water</strong> (水ブロック)の下だけを書き換えるようになる。
        </p>
      </>
    ),
  },
  {
    command: "$biome",
    usage: (
      <>
        <p>編集範囲を特定のバイオームに限定する。biomeのリストは //biomelist で見られる。</p>
        <p>また、バイオームを書き換える際に用いることもできる。</p>
        <h4>例</h4>
        <pre>/br s $roofed_forest [半径]</pre>
        <p>「覆われた森」バイオームを「描く」要領で設定できる。</p>
      </>
    ),
  },
  {
    command: "!mask",
    usage: (
      <>
        <p>マスクの編集範囲を反転する。</p>
        <h4>例</h4>
        <pre>/mask !grass</pre>
        <p>
          編集範囲を草ブロック<strong>以外</strong>に限定する。
        </p>
      </>
    ),
  },
];

export default function Masks() {
  return (
    <>
      <h2 id="toc-masks">マスク</h2>
      <p>
        <strong>マスク</strong>はブロックを配置することができるか判断する。
        これにより、ブロックの編集範囲を限定することができる。
      </p>
      <p>
        平たく言うと <strong>//set で敷き詰めるブロックや、 /br sphere で生成するブロックの置く場所を制限する</strong>。
      </p>
      <p>
        , か & でマスクを複数指定できる(即ち /mask 2,3 など)。 ,
        はいずれかのマスクが該当すればブロックが編集されるが、&はすべてのマスクが該当されなければ編集されない。
      </p>
      <ul>
        <li>
          <code>/mask grass,cobblestone</code>
          <br />
          編集範囲を草ブロックか丸石のみに限定する。
        </li>
        <li>
          <code>/mask ![stone]&amp;![$river]</code>
          <br />
          編集範囲を「石かつバイオームが川」<strong>ではない</strong>部分のみに限定する。
        </li>
      </ul>
      <p>
        場合によっては、マスクを適量 <code>[]</code> で囲う必要がある。
      </p>
    </>
  );
}

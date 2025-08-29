import { Command } from "@/components/Command";

export const BrushCommand: Command[] = [
  {
    command: "/br none",
    usage: (
      <>
        <p>手に持っているブラシを消す。</p>
        <p>他: /none</p>
      </>
    ),
  },
  {
    command: "/br catenary <pattern> [湾曲度=1.2] [大きさ=0]",
    usage: (
      <>
        <p>2つの点をつなぐぶら下がり線を描く。湾曲度は小数指定ができる。</p>
        <p>湾曲度を大きくすると、よりV字状になってゆく。</p>
        <p>他: /br cat /br gravityline /br saggedline</p>
        <h4>例</h4>
        <p>/br catenary 101 1.03</p>
        <p>青色の支柱と黄色の支柱を点として指定している。</p>
        <img src="https://i.imgur.com/uWv1d85.png" alt="br catenary 101 1.03" />
      </>
    ),
  },
  {
    command: "/br circle <pattern> [半径=5]",
    usage: <p>照準先に円を生成する。</p>,
  },
  {
    command: "/br cliff [半径=5] [ファイル|#clipboard|imgur=NULL] [回転=0] [Y拡大=1.00]",
    flags: [
      { flag: "-r", usage: "ランダムな回転をする" },
      { flag: "-l", usage: "雪の層のみに適用する" },
      { flag: "-s", usage: "滑らかにしない" },
    ],
    usage: (
      <>
        <p>地形をならして崖を生成する。</p>
        <p>他: /br flatcylinder</p>
      </>
    ),
  },
  {
    command: "/br copypaste [半径=5]",
    flags: [
      { flag: "-a", usage: "自分の向いている方向に合わせて滑らかな坂を作る" },
      { flag: "-r", usage: "ランダムな回転をする" },
    ],
    usage: (
      <>
        <p>左クリックで半径内のブロックをコピーして、右クリックで貼り付ける。</p>
        <p>または、クリップボードにコピー(//copy)したブロックを貼り付ける。</p>
        <p>他: /br cp /br copy /br paste /br copypasta</p>
        <h4>例</h4>
        <p>/br cp -a</p>
        <p>自分の向きに合わせてブロックが貼り付けられている。</p>
        <img src="https://i.imgur.com/rikH7Mt.png" alt="br cp -a" />
      </>
    ),
  },
  {
    command: "/br extinguish [半径=5]",
    usage: (
      <>
        <p>半径内を消火する。</p>
        <p>他: /br ex</p>
      </>
    ),
  },
  {
    command: "/br flatten [半径=5] [file|#clipboard|imgur=NULL] [回転=0] [Y拡大=1.00]",
    flags: [
      { flag: "-r", usage: "ランダムな回転をする" },
      { flag: "-l", usage: "雪の層のみに適用する" },
      { flag: "-s", usage: "滑らかにしない" },
    ],
    usage: (
      <>
        <p>地形を平らにする。基準のブロック(照準先)の高さに合わせてなだらかになる。</p>
        <p>よって高い部分のブロックを基準にすると、ブロックを全体的に持ち上げる挙動を起こす。</p>
        <p>他: /br flat /br flatmap</p>
      </>
    ),
  },
  {
    command: "/br pull [半径=5]",
    usage: <p>地形を自分の方へ寄せる。</p>,
  },
  {
    command: "/br shatter <pattern> [半径=10] [カウント]",
    usage: (
      <>
        <p>地形を複数に分割する不均等な線を生成する。</p>
        <p>他: /br split /br partition</p>
        <h4>例</h4>
        <p>/br shatter 251:7,251:8,251:11 30 30</p>
        <img src="https://i.imgur.com/PAIdKV1.png" alt="shatter" />
      </>
    ),
  },
  {
    command: "/br smooth [大きさ=2] [繰り返し=4]",
    flags: [{ flag: "-n", usage: "自然に生成されたブロックと思われるものにのみ適用する" }],
    usage: <p>地形をなだらかにする。</p>,
  },
  {
    command: "/br sphere <pattern> [半径=2]",
    flags: [{ flag: "-h", usage: "中を空洞にする" }],
    usage: (
      <>
        <p>球体を生成する。</p>
        <p>他: /br s</p>
        <h4>例</h4>
        <p>/br sphere 251:7,251:8,251:11 10</p>
        <img src="https://i.imgur.com/2obXWYY.png" alt="sphere" />
      </>
    ),
  },
  {
    command: "/br splatter <pattern> [半径=5] [生成数=1] [大きさ=5] [同材質=true]",
    usage: (
      <>
        <p>同材質がTrueの場合は1つの塊は同じブロックになる。</p>
        <p>Falseの場合は1つの塊でも複数ブロックが混ざるようになる。</p>
        <p>筆で水を跳ね飛ばすようにブロックを生成する。</p>
        <p>他: /br splat</p>
        <h4>例</h4>
        <p>/br splatter 251:7,251:8,251:11 30 30</p>
        <img src="https://i.imgur.com/0Tj9jP5.png" alt="splatter" />
      </>
    ),
  },
  {
    command: "/br surface <pattern> [半径=5]",
    usage: (
      <>
        <p>地表にブロックを生成する。空気ブロックは置換えられない。</p>
        <p>他: /br surf</p>
        <h4>例</h4>
        <p>/br surface 251,251:7,251:8,251:11 30 30</p>
        <img src="https://i.imgur.com/j9UP3gm.png" alt="br surface" />
      </>
    ),
  },
];

export default function Brush() {
  return (
    <>
      <h2 id="toc-brush">ブラシ</h2>
      <p>
        <code>//brush</code> , <code>/brush</code> , <code>//br</code> , <code>/br</code> で実行できる。下記では{" "}
        <code>/br</code> と略する。
      </p>
      <p>
        基本的に設置ができないアイテム(=ブロック以外)を手に持った状態で、コマンドを実行する。
        同じアイテムに対して結び付けられるブラシは一種類のみである。
      </p>
    </>
  );
}

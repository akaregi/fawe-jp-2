import Head from "next/head";
import Section from "@/markdown/00_Sections";
import TOC from "@/components/TOC";

const description =
  "Bukkit/Spigot のプラグイン FastAsyncWorldEdit(FAWE) の説明書です。" +
  "コマンドの使い方を中心に、ブラシやパターンについても載せています。";

export default function Home() {
  return (
    <>
      <Head>
        <title>FastAsyncWorldEdit コマンド・ブラシ 説明書</title>
        <meta name="description" content={description} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="only light" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="prose content">
        <TOC />
        <article className="commands">
          <Section />
        </article>
      </main>
    </>
  );
}

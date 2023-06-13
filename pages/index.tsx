import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElements";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GradientBackgroundCon></GradientBackgroundCon>
    </>
  );
}

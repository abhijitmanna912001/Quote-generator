import Head from "next/head";
import { useState } from "react";

// Components
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  FooterLink,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
  GradientBackgroundCon,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle,
  RedSpan,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

// Assets
import Clouds1 from "../assets/cloud-and-thunder.png";
import Clouds2 from "../assets/cloudy-weather.png";

export default function Home() {
  const [numberofQuotes, setnumberofQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GradientBackgroundCon>
        {/* Quote Generator Modal Pop-up */}
        {/* <QuoteGeneratorModal /> */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a
              random inspirational quote provided by{" "}
              <FooterLink
                href="https://zenquotes.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZenQuotes API
              </FooterLink>
              .
            </QuoteGeneratorSubTitle>
            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Make a quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background Images */}
        <BackgroundImage1 src={Clouds1} height="300" alt="cloudybackground1" />
        <BackgroundImage2 src={Clouds2} height="300" alt="cloudybackground2" />

        {/* Footer */}
        <FooterCon>
          <>
            Quotes Generated:{numberofQuotes}
            <br />
            Developed with <RedSpan>♥</RedSpan> by{" "}
            <FooterLink
              href="https://github.com/abhijitmanna912001"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abhijit Manna
            </FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  );
}

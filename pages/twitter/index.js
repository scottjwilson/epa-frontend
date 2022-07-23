import { NextSeo } from "next-seo";
import { Headline, Section } from "@/components/TwStyles";

export default function TwitterIndex() {
  return (
    <>
      <NextSeo title="Energy Prices News API" />
      <Section>
        <Headline>Twitter Handles</Headline>
      </Section>
    </>
  );
}

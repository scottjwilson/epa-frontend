import axios from "axios";
import { NextSeo } from "next-seo";
import tw from "twin.macro";
import NewsArticle from "@/components/NewsArticle";
import { Headline, Section } from "@/components/TwStyles";
const NewsGrid = tw.div`max-w-7xl mx-auto px-8 flex flex-col mb-16 space-y-8`;

export default function HomePage({ news }) {
  return (
    <>
      <NextSeo title="Energy Prices News API" />
      <Section>
        <Headline>Recent News</Headline>
        <NewsGrid>
          {Array.from(Object.values(news)).map((news, i) => (
            <NewsArticle key={i} news={news} />
          ))}
        </NewsGrid>
      </Section>
    </>
  );
}

export async function getServerSideProps() {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_URL}/news`,
    headers: {
      "X-RapidAPI-Key": `${process.env.RAPIDAPI_KEY}`,
      "X-RapidAPI-Host": `${process.env.RAPIDAPI_HOST}`,
    },
  };

  const news = await axios.request(options).then((res) => res.data);

  return {
    props: {
      news,
    },
  };
}

import axios from "axios";
import { NextSeo } from "next-seo";

import NewsArticle from "@/components/NewsArticle";

export default function HomePage({ news }) {
  return (
    <>
      <NextSeo title="Energy Prices News API" />
      <section>
        <h1>Recent News</h1>

        {Array.from(Object.values(news)).map((news, i) => (
          <NewsArticle key={i} news={news} />
        ))}
      </section>
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

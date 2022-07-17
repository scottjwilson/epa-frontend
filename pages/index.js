import Hero from "@/components/Hero";
import tw from "twin.macro";

import { NextSeo } from "next-seo";
import Link from "next/link";
import ThemeSwitch from "../components/ThemeSwitch";
import About from "@/components/About";
import axios from "axios";

const Work = tw.a`bg-blue-500 text-gray-50 font-semibold rounded-lg px-12 py-4 dark:bg-blue-500 shadow transform hover:-translate-y-0.5 hover:shadow-2xl duration-300`;

export default function HomePage({ projects, about }) {
  return (
    <>
      <NextSeo />
      <Hero
        title="I help businesses get more customers."
        subtitle="Hey I'm Scott 👋"
      >
        <Link href="/contact">
          <Work>Work With Me</Work>
        </Link>
      </Hero>
      <About about={about} />
    </>
  );
}

export async function getStaticProps() {
  const projects = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
    .then((res) => res.data);
  const about = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/about`)
    .then((res) => res.data);

  return {
    props: {
      projects,
      about,
    },
  };
}

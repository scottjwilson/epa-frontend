import Hero from "@/components/Hero";
import tw from "twin.macro";
import { NextSeo } from "next-seo";
import Link from "next/link";
import About from "@/components/About";
import ProjectCard from "@/components/ProjectCard";
import axios from "axios";
import CallToAction from "@/components/CallToAction";

export const Work = tw.a`bg-blue-500 text-gray-50 font-semibold rounded-lg px-12 py-4 dark:bg-blue-500 shadow transform hover:-translate-y-0.5 hover:shadow-2xl duration-300`;

export const ProjectGrid = tw.div`max-w-7xl mx-auto px-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-16`;

export default function HomePage({ projects, about }) {
  return (
    <>
      <NextSeo title="Scott Wil Dev" />
      <Hero
        title="I help businesses get more customers."
        subtitle="Hey I'm Scott 👋"
      >
        <Link href="/contact">
          <Work>Work With Me</Work>
        </Link>
      </Hero>
      <About about={about} />
      <h1 className="md:text-6xl text-4xl font-bold py-8 px-2 text-center">
        Recent Projects
      </h1>
      <ProjectGrid>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ProjectGrid>
      <CallToAction />
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

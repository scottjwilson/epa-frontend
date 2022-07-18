import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import axios from "axios";
import { NextSeo } from "next-seo";
import { ProjectGrid } from "pages";

export default function ProjectsPage({ projects }) {
  return (
    <>
      <NextSeo title="Projects" />
      <Hero title="Projects" />
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </>
  );
}

export async function getStaticProps() {
  const projects = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
    .then((res) => res.data);

  return {
    props: {
      projects,
    },
  };
}

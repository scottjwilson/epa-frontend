import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import axios from "axios";
import { NextSeo } from "next-seo";

export default function ProjectsPage({ projects }) {
  return (
    <NextSeo title="Projects">
      {/* <Animated> */}
      <Hero title="Projects" />
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* </Animated> */}
    </NextSeo>
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

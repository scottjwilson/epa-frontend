import Hero from "@/components/Hero";

import Image from "next/image";
import Animated from "@/components/Animated";
import { buildUrl } from "cloudinary-build-url";

import ProjectTable from "@/components/ProjectTable";
import { NextSeo } from "next-seo";

export default function Project({ project }) {
  const urlDesk = buildUrl(project.desktop.hash, {
    cloud: {
      cloudName: "swdb",
    },
  });
  const urlBlurredDesk = buildUrl(project.desktop.hash, {
    cloud: {
      cloudName: "swdb",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const urlMob = buildUrl(project.mobile.hash, {
    cloud: {
      cloudName: "swdb",
    },
  });
  const urlBlurredMob = buildUrl(project.mobile.hash, {
    cloud: {
      cloudName: "swdb",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const rowItem = `flex grid sm:grid-cols-[200px_minmax(400px,_1fr)]`;
  return (
    <>
      <NextSeo title={`Projects | ${project.name.toUpperCase()}`} />
      <Hero title={project.name} />
      <a
        className="cursor-pointer "
        onClick={() => window.open(project.url, "_blank")}
      ></a>

      <div className="max-w-6xl mx-auto px-2">
        <div className="hidden md:flex justify-center">
          <Image
            src={urlDesk}
            className="rounded-md"
            height={600}
            width={900}
            objectFit="cover"
            priority={true}
            placeholder="blur"
            blurDataURL={urlBlurredDesk}
          />
        </div>
        <div className="md:hidden flex">
          <Image
            src={urlMob}
            className="rounded-md "
            // layout="fill"
            objectFit="cover"
            height={960}
            width={550}
            priority={true}
            placeholder="blur"
            blurDataURL={urlBlurredMob}
          />
        </div>
        <ProjectTable project={project} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  const projects = await res.json();
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects?slug=${slug}`
  );
  const data = await res.json();
  const project = data[0];
  return {
    props: {
      project,
    },
  };
}

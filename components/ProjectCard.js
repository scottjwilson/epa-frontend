import Link from "next/link";
import tw from "twin.macro";
import Image from "next/image";

// This is sloppy and redundant, there is probably a better way
function getCat(i) {
  if (i === "ecommerce") {
    return "text-sm px-2 bg-purple-500 text-white rounded py-0.5 uppercase";
  }
  if (i === "landing page") {
    return "text-sm px-2  bg-blue-500 text-white rounded py-0.5";
  }
  if (i === "marketing") {
    return "text-sm px-2  bg-blue-500 text-white rounded py-0.5";
  }
  if (i === "news") {
    return "text-sm px-2  bg-red-500 text-white rounded py-0.5 uppercase";
  }
  if (i === "restaurant") {
    return "text-sm px-2  bg-green-500 text-white rounded py-0.5 uppercase";
  }

  if (i === "food_ordering") {
    return "text-sm px-2  bg-purple-500 text-white rounded py-0.5";
  }
}

// const article = `  grid grid-cols-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow ease-linear `;

const Article = tw.article`grid grid-cols-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow ease-linear`;
const Content = tw.div`flex flex-col p-6 space-y-2 text-center `;
const Figure = tw.figure`relative h-48`;
const Cap = tw.figcaption``;
const ProjectBadge = tw.div`flex md:flex-row flex-col justify-center`;

const TechList = tw.ul`flex space-x-1 justify-center`;
const TechItem = tw.li`text-sm px-2 rounded py-0.5`;
export default function ProjectItem({ project }) {
  return (
    <Article>
      <Figure>
        <Image
          className="rounded-xl"
          src={project.desktop.url}
          alt={project.name}
          layout="fill"
          objectFit="cover"
        />
        <Cap>{project.name}</Cap>
      </Figure>
      <Content>
        <h4 className="text-xl font-bold">{project.name}</h4>
        <p>{project.excerpt}</p>
        <ProjectBadge>
          <span className={getCat(project.industry)}>{project.industry}</span>
        </ProjectBadge>
        <TechList>
          {project.technologies.map((tech, i) => (
            <TechItem key={i}>{tech.name}</TechItem>
          ))}
        </TechList>
      </Content>
    </Article>
  );
}

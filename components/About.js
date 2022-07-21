import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
import tw from "twin.macro";
export const Container = tw.div`max-w-4xl mx-auto px-4`;
const Card = tw.div`md:flex md:my-16 p-4 items-center shadow-lg shadow-blue-400  dark:shadow-blue-900 rounded-xl`;
const ImageWrapper = tw.div`relative md:h-72 md:w-72 h-40 w-40 mx-auto`;

const About = ({ about }) => {
  const url = buildUrl(about.avatar.hash, {
    cloud: {
      cloudName: "swdb",
    },
  });
  const urlBlurred = buildUrl(about.avatar.hash, {
    cloud: {
      cloudName: "swdb",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  return (
    <Container>
      <Card>
        <ImageWrapper>
          <Image
            src={url}
            className="rounded-full"
            layout="fill"
            objectFit="cover"
            alt={about.title}
            priority={true}
            placeholder="blur"
            blurDataURL={urlBlurred}
          />
        </ImageWrapper>
        {/*  */}
        {/* <Socials /> */}

        <div className="w-full md:w-7/12 space-y-4 my-8 sm:pt-0 sm:px-12 flex flex-col ">
          <h1 className="md:text-4xl text-2xl font-bold">Who am I</h1>

          <p>{about.content}</p>
        </div>
      </Card>
    </Container>
  );
};

export default About;

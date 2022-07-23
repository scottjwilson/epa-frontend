import Image from "next/image";
import tw from "twin.macro";

const Article = tw.article`md:flex rounded-md border shadow items-center`;
const Content = tw.div`flex flex-col px-4 space-y-4  `;
const Figure = tw.figure`relative h-full max-w-md`;
const ReadMore = tw.a`w-40 px-4 py-2 border rounded-md uppercase text-center hover:transition-all ease-linear`;

const Title = tw.h1`text-xl`;
export default function NewsArticle({ news }) {
  return (
    <Article>
      <Figure>
        {news.image ? (
          <img className="rounded-xl" src={news.image} alt={news.url} />
        ) : (
          <>Placeholder image</>
        )}
        {/* <Image
          className="rounded-xl"
          src={news.image}
          alt={news.title}
          layout="fill"
          objectFit="cover"
          priority={true}
        /> */}
      </Figure>
      <Content>
        <h4 className="text-xl font-bold">{news.source}</h4>
        <Title>{news.title}</Title>
        <ReadMore href={news.url} target="_blank">
          read more
        </ReadMore>
      </Content>
    </Article>
  );
}

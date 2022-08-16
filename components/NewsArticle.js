import Image from "next/image";

export default function NewsArticle({ news }) {
  return (
    <article className="md:flex items-center py-8 md:border-b">
      <figure className="md:w-1/3">
        {news.image ? (
          <img className="rounded-md" src={news.image} alt={news.url} />
        ) : (
          <>Placeholder image</>
        )}
      </figure>
      {/* <Image
          className="rounded-xl"
          src={news.image}
          alt={news.title}
          layout="fill"
          objectFit="cover"
          priority={true}
        /> */}

      <div className="md:w-2/3 md:pl-8 px-2 pt-4">
        <h2 className="text-2xl hover:underline font-semibold">
          <a href={news.url} target="_blank">
            {news.title}
          </a>
        </h2>
        <p className="pt-4 font-thin">{news.source}</p>
      </div>
    </article>
  );
}

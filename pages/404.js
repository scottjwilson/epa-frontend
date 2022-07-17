import Head from "next/head";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className="py-40 flex flex-col items-center space-y-4 h-[50vh]">
        <h1 className="text-8xl font-extrabold">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          404
        </h1>
        <h4 className="text-xl">Sorry, there is nothing here.</h4>
        <Link href="/">
          <a className="text-blue-600 hover:text-blue-900 hover:underline">
            Go Back Home
          </a>
        </Link>
      </div>
    </>
  );
}

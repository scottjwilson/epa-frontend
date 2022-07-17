import { quickLinks } from "data/quickLinks";
import Link from "next/link";
import tw from "twin.macro";

const FooterWrapper = tw.footer`w-full dark:bg-[#16161c] bg-gray-200 pb-12`;
const Container = tw.div`max-w-6xl mx-auto px-4`;
const Grid = tw.div`grid grid-cols-2 py-20 my-12 md:gap-48`;
const Scott = tw.div`flex flex-col justify-center space-y-4`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <Scott>
            <h2>SCOTTWIL</h2>
            <p>
              I create beautiful websites your users will love. I work with you
              from start to finish to make sure your goals are reached and your
              users are happy.
            </p>

            <Link href="/contact">
              <a className="text-red-500">Currently available for hire</a>
            </Link>
            <div
              className="py-0.5 my-2
              w-16 bg-black dark:bg-white"
            ></div>

            {quickLinks.map((links) => {
              const { id, title, href } = links;
              return (
                <Link href={href} key={id}>
                  <a className="dark:text-white capitalize py-2">{title}</a>
                </Link>
              );
            })}
            <p className="dark:text-gray-200 font-bold">
              © {new Date().getFullYear()} Scott Wilson
            </p>
          </Scott>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}

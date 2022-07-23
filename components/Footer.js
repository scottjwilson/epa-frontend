import { navLinks } from "data/navLinks";
import Link from "next/link";
import tw from "twin.macro";

const FooterWrapper = tw.footer`w-full dark:bg-[#16161c] bg-gray-200 pb-12`;
const Container = tw.div`max-w-6xl mx-auto px-4`;
const Grid = tw.div`grid grid-cols-2 py-20 my-12 md:gap-48`;
const Brand = tw.div`flex flex-col justify-center space-y-4`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <Brand>
            <h2>energy price news</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate dicta facilis labore in, quisquam provident.
            </p>

            <div
              className="py-0.5 my-2
              w-16 bg-black dark:bg-white"
            ></div>

            {navLinks.map((links) => {
              const { id, title, href } = links;
              return (
                <Link href={href} key={id}>
                  <a className="dark:text-white capitalize py-2">{title}</a>
                </Link>
              );
            })}
            <p className="dark:text-gray-200 font-bold">
              © {new Date().getFullYear()}
            </p>
          </Brand>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}

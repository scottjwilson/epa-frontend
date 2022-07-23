import { navLinks } from "data/navLinks";
import Link from "next/link";
import { useRouter } from "next/router";
import tw from "twin.macro";
import ThemeSwitch from "./ThemeSwitch";

const HeaderStyles = tw.header``;
const TopLine = tw.div`bg-black py-2`;
const Container = tw.div`hidden md:flex items-center justify-between max-w-7xl mx-auto py-4 px-2 `;
const Nav = tw.nav`w-1/2`;
const Links = tw.div`flex items-center justify-end space-x-6`;
const Active = tw.a`dark:hover:bg-gray-900 px-6 py-3 rounded-md border-b-4 border-blue-500 capitalize`;
const Regular = tw.a`dark:hover:bg-gray-900 px-6 py-3 rounded-md border-b-4 border-transparent capitalize`;
const LogoContainer = tw.a`flex items-center rounded-full`;
const Brand = tw.span`uppercase px-2`;

function Logo() {
  return (
    <Link href="/">
      <LogoContainer>
        <Brand>Energy price news</Brand>
      </LogoContainer>
    </Link>
  );
}

function Navigation() {
  const router = useRouter();
  return (
    <Nav>
      <Links>
        {navLinks.map((links) => {
          const { id, title, href } = links;
          return (
            <Link href={href} key={id}>
              {router.pathname == href ? (
                <Active>{title}</Active>
              ) : (
                <Regular>{title}</Regular>
              )}
            </Link>
          );
        })}

        <ThemeSwitch />
      </Links>
    </Nav>
  );
}

export default function Header() {
  return (
    <HeaderStyles>
      <TopLine />
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </HeaderStyles>
  );
}

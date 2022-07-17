import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import tw from "twin.macro";
import ThemeSwitch from "./ThemeSwitch";
import avatar from "../public/profile-bg.png";
const HeaderStyles = tw.header``;
const TopLine = tw.div`bg-black py-2`;
const Container = tw.div`hidden md:flex items-center justify-between max-w-7xl mx-auto py-4 px-2 `;
const Nav = tw.nav`w-1/2`;
const Links = tw.div`flex items-center justify-end space-x-6`;
const Active = tw.a`dark:hover:bg-gray-900 px-6 py-3 rounded-md border-b-4 border-blue-500 capitalize`;
const Regular = tw.a`dark:hover:bg-gray-900 px-6 py-3 rounded-md border-b-4 border-transparent capitalize`;
const Hire = tw.a`text-white bg-blue-500 rounded-md px-6 py-2 shadow  hover:shadow-xl `;
const LogoContainer = tw.a` flex items-center rounded-full`;
const ScottWil = tw.span`uppercase px-2`;

function Logo() {
  return (
    <Link href="/">
      <LogoContainer>
        <Image
          src={avatar}
          className="rounded-full"
          width={50}
          height={50}
          alt="author profile picture"
        />
        <ScottWil>scott wil</ScottWil>
      </LogoContainer>
    </Link>
  );
}

function Navigation() {
  const router = useRouter();
  return (
    <Nav>
      <Links>
        <Link href="/">
          {router.pathname == "/" ? (
            <Active>home</Active>
          ) : (
            <Regular>home</Regular>
          )}
        </Link>
        <Link href="/projects">
          {router.pathname == "/projects" ? (
            <Active>projects</Active>
          ) : (
            <Regular>projects</Regular>
          )}
        </Link>
        <Link href="/contact">
          <Hire>Contact</Hire>
        </Link>
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

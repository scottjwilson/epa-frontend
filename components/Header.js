import Link from "next/link";
import { navLinks } from "data/navLinks";
import { useRouter } from "next/router";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <nav className="navbar uppercase shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">energy prices news</a>
        </div>
        <div className="navbar-end space-x-8">
          {navLinks.map((links) => {
            const { id, title, href } = links;
            return (
              <Link href={href} key={id}>
                {router.pathname == href ? (
                  <a className="active">{title}</a>
                ) : (
                  <a className="regular">{title}</a>
                )}
              </Link>
            );
          })}
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}

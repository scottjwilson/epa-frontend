import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <button className="btn btn-ghost" onClick={() => setTheme("forest")}>
          <FaMoon />
        </button>
      ) : (
        <button className="btn btn-ghost" onClick={() => setTheme("light")}>
          <FaSun />
        </button>
      )}
    </>
  );
}

import { useTheme } from "next-themes";
import { ColorSwatchIcon } from "@heroicons/react/solid";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={toggleTheme}
      className="px-6 py-3"
    >
      <ColorSwatchIcon className="h-6 w-6" />
    </button>
  );
}

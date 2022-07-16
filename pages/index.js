import { NextSeo } from "next-seo";
import ThemeSwitch from "../components/ThemeSwitch";

export default function HomePage() {
  return (
    <>
      <NextSeo />
      <ThemeSwitch />
    </>
  );
}

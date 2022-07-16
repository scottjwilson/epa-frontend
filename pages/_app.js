import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Page from "@/components/Page";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
}

export default MyApp;

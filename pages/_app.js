import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import Page from "@/components/Page";
import "@/styles/globals.css";
import "@/styles/nprogress.css";
import { Router, useRouter } from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
}

export default MyApp;

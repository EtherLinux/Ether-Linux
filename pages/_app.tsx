import "./../styles/root.css";
import "./../styles/index.css";
import "./../styles/navbar.css";
import "./../styles/header.css";
import "./../styles/whatisether.css";
import "./../styles/feature.css";
import "./../styles/features.css";
import "./../styles/download.css";
import "./../styles/team.css";
import "./../styles/donate.css";
import "./../styles/footer.css";
import "./../styles/404.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>EtherLinux | Official Web Page EtherLinux</title>
        <meta name="description" content="Pwned The World" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

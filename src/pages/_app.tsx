import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { useRouter } from "next/router";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <GoogleAnalytics />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

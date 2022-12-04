import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <GoogleAnalytics mID={"G-K0X6YXQ2PG"} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

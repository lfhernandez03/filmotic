import "@/styles/globals.css"; // Mueve la importación de CSS global
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
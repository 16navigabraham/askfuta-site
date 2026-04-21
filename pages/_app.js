import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AskFUTA — Your FUTA questions, answered on WhatsApp</title>
        <meta
          name="description"
          content="AskFUTA is a student-built WhatsApp assistant for the Federal University of Technology, Akure. Ask about admission, departments, hostels, SIWES, fees, and campus logistics."
        />
        <meta name="theme-color" content="#662d91" />
        <meta property="og:title" content="AskFUTA" />
        <meta
          property="og:description"
          content="Ask anything about FUTA on WhatsApp and get an instant answer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

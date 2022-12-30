import Head from "next/head";

import MainContent from "../components/UI/MainContent";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page to saulprl's portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent title="Home">
        <p>Finally</p>
      </MainContent>
    </>
  );
};

export default Home;

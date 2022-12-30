import Head from "next/head";
import MainContent from "../../../components/UI/MainContent";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="A page dedicated to saulprl's projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent title="Projects">
        <p>Pogg</p>
      </MainContent>
    </>
  );
};

export default ProjectsPage;

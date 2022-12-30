import Head from "next/head";
import MainContent from "../../components/UI/MainContent";

const CoursesPage = () => {
  return (
    <>
      <Head>
        <title>Courses</title>
        <meta
          name="description"
          content="A page dedicated to saulprl's completed and ongoing courses."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent title="Courses">
        <p>Crs</p>
      </MainContent>
    </>
  );
};

export default CoursesPage;

import { Box, Skeleton, Typography } from "@mui/material";
import Head from "next/head";
import { FC } from "react";

import useSWR from "swr";
import TechnologyGrid from "../components/Technology/TechnologyGrid";

import MainContent from "../components/UI/MainContent";
import { loadHome } from "../lib/loadHome";

import classes from "../styles/Home.module.css";

interface HomeData {
  message: string;
  content: {
    about: { title: string; content: string[] };
    experience: { title: string; content: string[] };
    technologies: { title: string };
  };
}

interface Props {
  data: HomeData;
}

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const HomePage: FC<Props> = (props: Props) => {
  // const { data, error } = useSWR<HomeData, any, string>("/api/home", fetcher);

  // const skeletons = (
  //   <>
  //     <Skeleton animation="wave" sx={{ fontSize: "2rem" }} />
  //     <Skeleton animation="wave" sx={{ fontSize: "1rem" }} />
  //     <Skeleton animation="wave" sx={{ fontSize: "1rem", width: "70%" }} />
  //     <Skeleton animation="wave" sx={{ fontSize: "1rem" }} />
  //     <Skeleton animation="wave" sx={{ fontSize: "2rem" }} />
  //     <Skeleton animation="wave" sx={{ fontSize: "1rem" }} />
  //     <Skeleton animation="wave" sx={{ fontSize: "1rem", width: "70%" }} />
  //     <Skeleton animation="wave" sx={{ fontSize: "1rem" }} />
  //     <Skeleton animation="wave" sx={{ fontSize: "2rem" }} />
  //     <Skeleton animation="wave" variant="rounded" sx={{ height: "150px" }} />
  //   </>
  // );

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page to saulprl's portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent title="Home">
        {/* {error && (
          <Typography variant="body1" textAlign="center">
            Failed to load
          </Typography>
        )} */}
        {/* {!error && !data && skeletons} */}
        {/* {!error && data && ( */}
        <>
          <Box component="section" className={classes["page-content"]}>
            <Typography variant="h5">
              {props.data.content.about.title}
            </Typography>
            {props.data.content.about.content.map((para, index) => (
              <Typography key={index} variant="body1">
                {para}
              </Typography>
            ))}
            <Typography variant="h5">
              {props.data.content.experience.title}
            </Typography>
            {props.data.content.experience.content.map((para, index) => (
              <Typography key={index} variant="body1">
                {para}
              </Typography>
            ))}
            <Typography variant="h5">
              {props.data.content.technologies.title}
            </Typography>
            <TechnologyGrid />
          </Box>
        </>
        {/* )} */}
      </MainContent>
    </>
  );
};

export const getStaticProps = async () => {
  const data: HomeData = await loadHome();

  return {
    props: {
      data,
    },
  };
};

export default HomePage;

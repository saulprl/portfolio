import { Box, Skeleton, Typography } from "@mui/material";
import Head from "next/head";
import { FC } from "react";

import useSWR from "swr";
import TechnologyGrid from "../components/Technology/TechnologyGrid";

import MainContent from "../components/UI/MainContent";
import { loadHome } from "../lib/loadHome";

import classes from "../styles/Home.module.css";

interface HomeData {
  about: { title: string; content: string[] };
  experience: { title: string; content: string[] };
  technologies: { title: string };
}

interface Props {
  data: HomeData;
}

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const HomePage: FC<Props> = (props: Props) => {
  // const { data, error } = useSWR<HomeData, any, string>("/api/home", fetcher);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page to saulprl's portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent title="Home">
        <>
          <Box component="section" className={classes["page-content"]}>
            <Typography variant="h5">{props.data.about.title}</Typography>
            {props.data.about.content.map((para, index) => (
              <Typography key={index} variant="body1" textAlign="justify">
                {para}
              </Typography>
            ))}
            <Typography variant="h5">{props.data.experience.title}</Typography>
            {props.data.experience.content.map((para, index) => (
              <Typography key={index} variant="body1" textAlign="justify">
                {para}
              </Typography>
            ))}
            <Typography variant="h5">
              {props.data.technologies.title}
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
  // switch over to SWR fetching
  const data: HomeData = await loadHome();

  return {
    props: {
      data,
    },
  };
};

export default HomePage;

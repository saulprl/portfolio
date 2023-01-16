import { FC } from "react";

import { GetStaticProps } from "next";
import Head from "next/head";

import { Box, Typography } from "@mui/material";

import MainContent from "../components/UI/MainContent";
import TechnologyGrid from "../components/Technology/TechnologyGrid";

import { loadHome } from "../lib/loadHome";

import classes from "../styles/Home.module.css";

interface HomeData {
  page: { title: string; description: string };
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
        <title>{props.data.page.title}</title>
        <meta name="description" content={props.data.page.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent title={props.data.page.title}>
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

interface JSONHomeData {
  "en-US": HomeData;
  "es-MX": HomeData;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const jsonData: JSONHomeData = await loadHome();
  const data = jsonData[context.locale! as keyof JSONHomeData];

  return {
    props: {
      data,
    },
  };
};

export default HomePage;

import { FC } from "react";

import Head from "next/head";

import ProjectList from "../../components/Projects/ProjectList";
import MainContent from "../../components/UI/MainContent";

import { loadProjects } from "../../lib/loadProjects";

import type { Project } from "../../models/Project";
import ProjectFilters from "../../components/Projects/ProjectFilters";

import classes from "../../styles/Projects.module.css";
import { Box } from "@mui/material";
import { GetStaticProps } from "next";

interface ProjectData {
  page: { title: string; description: string };
  display: { filters: string; repo: string; images: string };
  projects: Project[];
}

interface Props {
  data: ProjectData;
}

const ProjectsPage: FC<Props> = (props: Props) => {
  return (
    <>
      <Head>
        <title>{props.data.page.title}</title>
        <meta name="description" content={props.data.page.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent title={props.data.page.title}>
        <Box component="section" className={classes["page-content"]}>
          <ProjectFilters title={props.data.display.filters} />
          <ProjectList projects={props.data.projects} />
        </Box>
      </MainContent>
    </>
  );
};

interface JSONProjectData {
  "en-US": ProjectData;
  "es-MX": ProjectData;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const jsonData: JSONProjectData = await loadProjects();
  const data = jsonData[context.locale! as keyof JSONProjectData];

  return {
    props: {
      data,
    },
  };
};

export default ProjectsPage;

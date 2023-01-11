import { FC } from "react";

import Head from "next/head";

import ProjectList from "../../components/Projects/ProjectList";
import MainContent from "../../components/UI/MainContent";

import { loadProjects } from "../../lib/loadProjects";

import type { Project } from "../../models/Project";
import ProjectFilters from "../../components/Projects/ProjectFilters";

import classes from "../../styles/Projects.module.css";
import { Box } from "@mui/material";

interface ProjectData {
  projects: Project[];
}

interface Props {
  data: ProjectData;
}

const ProjectsPage: FC<Props> = (props: Props) => {
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
        <Box component="section" className={classes["page-content"]}>
          <ProjectFilters />
          <ProjectList projects={props.data.projects} />
        </Box>
      </MainContent>
    </>
  );
};

export const getStaticProps = async () => {
  const data: ProjectData = await loadProjects();

  return {
    props: {
      data,
    },
  };
};

export default ProjectsPage;

import Head from "next/head";
import { FC } from "react";
import ProjectList from "../../components/Projects/ProjectList";
import MainContent from "../../components/UI/MainContent";
import { loadProjects } from "../../lib/loadProjects";

interface Project {
  id: number;
  name: string;
  excerpt: string;
  description: string;
  languages: string;
  frameworks: string | null;
  database: string | null;
  images: string[];
  repo: string;
}

interface ProjectData {
  message: string;
  content: {
    projects: Project[];
  };
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
        <ProjectList projects={props.data.content.projects} />
      </MainContent>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await loadProjects();

  return {
    props: {
      data,
    },
  };
};

export default ProjectsPage;

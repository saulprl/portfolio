import { ParsedUrlQuery } from "querystring";

import { FC, useState } from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  Box,
  Button,
  CardActionArea,
  Chip,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";

import MainContent from "../../../components/UI/MainContent";
import ImageViewer from "../../../components/UI/ImageViewer";

import {
  loadProject,
  loadProjectDisplay,
  loadProjects,
} from "../../../lib/loadProjects";

import { Project } from "../../../models/Project";

import classes from "../../../styles/ProjectDetails.module.css";

interface IParams extends ParsedUrlQuery {
  projId: string;
}

interface Display {
  repo: string;
  images: string;
  noImages: string;
}

interface Props {
  display: Display;
  project: Project;
}

const ProjectDetailsPage: FC<Props> = (props: Props) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openModal, setOpenModal] = useState(false);

  const {
    name,
    excerpt,
    description,
    languages,
    frameworks,
    database,
    images,
    repo,
    "live-demo": liveDemo,
  } = props.project;

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const iconColor = theme.palette.mode === "dark" ? "white" : "black";

  let projectImages = (
    <Typography variant="body1" textAlign="center">
      {props.display.noImages}
    </Typography>
  );

  if (images.length > 0) {
    projectImages = (
      <ImageList
        cols={3}
        rowHeight={isMobile ? 100 : 275}
        className={classes["image-container"]}
      >
        {images.slice(0, 3).map((img, index) => (
          <ImageListItem key={index}>
            <Image
              fill
              sizes="(max-width: 600px) 30vw,
                      (max-width: 899px) 20vw,
                      18vw"
              src={img}
              alt={`${name} screenshot ${index + 1}`}
              className={classes["image-item"]}
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent title={name} avatar={true}>
        <Box component="section" className={classes["page-content"]}>
          <Typography variant="body1" textAlign="justify">
            {description}
          </Typography>
          <Box
            className={classes["middle-container"]}
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Box
              className={classes.technologies}
              sx={{
                mb: { xs: "8px", sm: "0" },
                // flexDirection: { sm: "row" },
                // justifyContent: { xs: "flex-start", sm: "flex-start" },
                // alignItems: { xs: "flex-start", sm: "center" },
              }}
            >
              <Chip label={languages} color="secondary" />
              {frameworks && <Chip label={frameworks} color="info" />}
              {database && <Chip label={database} color="warning" />}
            </Box>
            <Button
              LinkComponent="a"
              href={repo}
              target="_blank"
              variant="contained"
              endIcon={
                <GitHub
                  sx={{
                    display: {
                      xs: "inline-block",
                      sm: "none",
                      md: "inline-block",
                    },
                  }}
                />
              }
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              {props.display.repo}
            </Button>
            {liveDemo && (
              <Button
                LinkComponent="a"
                href={liveDemo}
                target="_blank"
                variant="contained"
                endIcon={<OpenInNew />}
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  mt: { xs: "8px", sm: "0" },
                  ml: { xs: "0", sm: "4px" },
                }}
              >
                Demo
              </Button>
            )}
          </Box>
          <Typography variant="h5">{props.display.images}</Typography>
          <CardActionArea LinkComponent="button" onClick={openModalHandler}>
            {projectImages}
          </CardActionArea>
        </Box>
      </MainContent>
      <ImageViewer
        name={name}
        open={openModal}
        onClose={closeModalHandler}
        images={images}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const data = await loadProjects();
  const projectIds = data["en-US"].projects.map((project) => project.id);

  return {
    fallback: false,
    paths: [
      ...projectIds.map((id) => ({
        params: { projId: id.toString() },
        locale: "en-US",
      })),
      ...projectIds.map((id) => ({
        params: { projId: id.toString() },
        locale: "es-MX",
      })),
    ],
  };
};

export const getStaticProps: GetStaticProps<{ project: Project }> = async (
  context
) => {
  const { projId } = context.params as IParams;
  const display = await loadProjectDisplay(context.locale!);
  const project = await loadProject(projId, context.locale!);

  return {
    props: {
      display: display,
      project: project,
    },
  };
};

export default ProjectDetailsPage;

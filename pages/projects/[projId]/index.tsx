import { FC, useState } from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

import {
  Box,
  Button,
  CardActionArea,
  Chip,
  IconButton,
  ImageList,
  ImageListItem,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBack, GitHub } from "@mui/icons-material";

import MainContent from "../../../components/UI/MainContent";

import { loadProject, loadProjects } from "../../../lib/loadProjects";

import { Project } from "../../../models/Project";

import classes from "../../../styles/ProjectDetails.module.css";
import ImageViewer from "../../../components/UI/ImageViewer";

interface IParams extends ParsedUrlQuery {
  projId: string;
}

interface Props {
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
      No images found 😔
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
      <MainContent
        title={name}
        avatar={
          <Tooltip title="Back">
            <IconButton
              onClick={() => router.push("/projects")}
              sx={{ color: iconColor }}
            >
              <ArrowBack />
            </IconButton>
          </Tooltip>
        }
      >
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
                mb: { xs: "8px", sm: "none" },
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
              endIcon={<GitHub />}
              sx={{ textTransform: "none" }}
            >
              Repository
            </Button>
          </Box>
          <Typography variant="h5">Images</Typography>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await loadProjects();
  const projectIds = data.projects.map((project) => project.id);

  return {
    fallback: false,
    paths: projectIds.map((id) => ({ params: { projId: id.toString() } })),
  };
};

export const getStaticProps: GetStaticProps<{ project: Project }> = async (
  context
) => {
  const { projId } = context.params as IParams;
  const project = await loadProject(projId);

  return {
    props: {
      project: project,
    },
  };
};

export default ProjectDetailsPage;

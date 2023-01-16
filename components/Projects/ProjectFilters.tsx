import { FC, useContext, useRef, useState } from "react";

import { CSSTransition } from "react-transition-group";

import useSWR from "swr";

import { FiltersContext } from "../../context/FiltersContext";

import {
  Alert,
  alpha,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ExpandLess } from "@mui/icons-material";

import TechnologyChip from "../Technology/TechnologyChip";

import type { Technologies as TechData } from "../../models/Technology";

import classes from "../../styles/Projects.module.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Technology {
  name: string;
  color: "secondary" | "info" | "warning";
}

interface Props {
  title: string;
}

const ProjectFilters: FC<Props> = (props: Props) => {
  const cardContentRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const activeFilters = useContext(FiltersContext).filters;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState(!isMobile);

  const { data, error, isLoading } = useSWR<TechData, Error>(
    "/api/technologies",
    fetcher
  );

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  let content: JSX.Element = <></>;

  if (isLoading) {
    content = (
      <Skeleton
        animation="wave"
        variant="rounded"
        height={180}
        sx={{ mb: "8px" }}
      />
    );
  }

  if (!isLoading && error) {
    content = (
      <Alert variant="outlined" severity="error">
        {error.message}
      </Alert>
    );
  }

  if (!isLoading && data) {
    const chips: Technology[] = [];

    for (const tech of data.languages.main) {
      chips.push({ name: tech, color: "secondary" });
    }

    for (const tech of data.languages.additional) {
      chips.push({ name: tech, color: "secondary" });
    }

    for (const tech of data.frameworks.main) {
      chips.push({ name: tech, color: "info" });
    }

    for (const tech of data.frameworks.additional) {
      chips.push({ name: tech, color: "info" });
    }

    for (const tech of data.databases.main) {
      chips.push({ name: tech, color: "warning" });
    }

    for (const tech of data.databases.additional) {
      chips.push({ name: tech, color: "warning" });
    }

    content = (
      <Card
        className={classes["filters-card"]}
        sx={{ border: theme.border.default }}
      >
        <CardHeader
          title={props.title}
          titleTypographyProps={{ variant: "h6", color: "white" }}
          action={
            <IconButton onClick={toggleExpanded}>
              <ExpandLess
                sx={{
                  color: "white",
                  willChange: "transform",
                  transition: "transform 400ms",
                  transform: `rotate(${expanded ? -180 : 0}deg)`,
                }}
              />
            </IconButton>
          }
          sx={{
            backgroundColor: theme.palette.secondary.main,
            transition: "background-color 250ms linear",
          }}
        />
        <CSSTransition
          nodeRef={cardContentRef}
          in={expanded}
          timeout={isMobile ? 550 : 250}
          mountOnEnter={true}
          unmountOnExit={true}
          classNames={{
            enter: classes["fade-enter"],
            enterActive: classes["fade-enter-active"],
            exit: classes["fade-exit"],
            exitActive: classes["fade-exit-active"],
          }}
        >
          <CardContent
            component="div"
            ref={cardContentRef}
            className={classes["filters-content"]}
            sx={{
              background: alpha(theme.palette.secondary.main, 0.35),
              transition: "background-color 250ms linear",
            }}
          >
            {chips.map((chip, index) => (
              <TechnologyChip
                key={index}
                name={chip.name}
                color={chip.color}
                selected={activeFilters.includes(chip.name)}
              />
            ))}
          </CardContent>
        </CSSTransition>
      </Card>
    );
  }

  return content;
};

export default ProjectFilters;

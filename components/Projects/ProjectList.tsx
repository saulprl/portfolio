import { FC, useContext } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import { List, useMediaQuery, useTheme } from "@mui/material";

import { FiltersContext } from "../../context/FiltersContext";

import ProjectItem from "./ProjectItem";

import type { Project } from "../../models/Project";

import classes from "../../styles/Projects.module.css";

interface Props {
  projects: Project[];
}

const ProjectList: FC<Props> = (props: Props) => {
  const theme = useTheme();
  const filters = useContext(FiltersContext).filters;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { projects } = props;

  const filteredProjects = projects.filter((proj) =>
    filters.every(
      (filter) =>
        proj.languages === filter ||
        proj.frameworks === filter ||
        proj.database === filter
    )
  );

  return (
    <List disablePadding>
      <TransitionGroup>
        {filteredProjects.map((proj) => (
          <CSSTransition
            key={proj.id}
            timeout={isMobile ? 550 : 250}
            mountOnEnter
            unmountOnExit
            classNames={{
              enter: classes["fade-enter"],
              enterActive: classes["fade-enter-active"],
              exit: classes["fade-exit"],
              exitActive: classes["fade-exit-active"],
            }}
          >
            <ProjectItem
              id={proj.id}
              name={proj.name}
              excerpt={proj.excerpt}
              languages={proj.languages}
              frameworks={proj.frameworks}
              database={proj.database}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </List>
  );
};

export default ProjectList;

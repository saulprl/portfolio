import { FC } from "react";

import { List, useMediaQuery, useTheme } from "@mui/material";
import ProjectItem from "./ProjectItem";

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

interface Props {
  filters?: string[];
  projects: Project[];
}

const ProjectList: FC<Props> = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { projects } = props;

  if (props.filters) {
  }

  return (
    <List disablePadding>
      {projects.map((proj) => (
        <ProjectItem
          key={proj.id}
          name={proj.name}
          excerpt={proj.excerpt}
          languages={proj.languages}
          frameworks={proj.frameworks}
          database={proj.database}
        />
      ))}
    </List>
  );
};

export default ProjectList;

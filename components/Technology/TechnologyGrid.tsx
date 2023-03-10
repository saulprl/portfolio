import useSWR from "swr";

import {
  Alert,
  Avatar,
  Card,
  Grid,
  Skeleton,
  Tooltip,
  useTheme,
} from "@mui/material";

import { IconContext } from "react-icons";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAngular,
  SiDart,
  SiFiles,
  SiFirebase,
  SiFlutter,
  SiJava,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { TbCSharp } from "react-icons/tb";

import classes from "../../styles/Technology.module.css";
import { fetcher } from "../../utils/fetcher";
import { memo, useMemo, useRef } from "react";

interface Technology {
  main: string[];
}

interface TechnologyItem {
  name: string;
  color: string;
  icon: JSX.Element;
}

interface TechData {
  languages: Technology;
  frameworks: Technology;
  databases: Technology;
}

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getTechIcon = (techName: string) => {
  switch (techName) {
    case "Dart":
      return <SiDart />;
    case "Java":
    case "JavaFX":
      return <SiJava />;
    case "C#":
      return <TbCSharp />;
    case "JavaScript":
      return <SiJavascript />;
    case "TypeScript":
      return <SiTypescript />;
    case "Node.js":
      return <FaNodeJs />;
    case "Flutter":
      return <SiFlutter />;
    case "React":
      return <FaReact />;
    case "Angular":
      return <SiAngular />;
    case "MySQL":
      return <SiMysql />;
    case "PostgreSQL":
      return <SiPostgresql />;
    case "SQL Server":
      return <SiMicrosoftsqlserver />;
    case "MongoDB":
      return <SiMongodb />;
    case "Firebase":
      return <SiFirebase />;
    default:
      return <SiFiles />;
  }
};

const TechnologyGrid = () => {
  const theme = useTheme();
  const { data, error, isLoading } = useSWR<TechData, Error>(
    "/api/technologies",
    fetcher
  );
  const iconColor = "#FFFFFF";

  const content = useRef(<></>);

  if (isLoading) {
    content.current = (
      <Skeleton animation="wave" variant="rounded" height={100} />
    );
  }

  if (!isLoading && error) {
    content.current = (
      <Alert severity="error" variant="filled">
        {error.message}
      </Alert>
    );
  }

  useMemo(() => {
    if (!isLoading && data && !error) {
      const technologies: TechnologyItem[] = [];

      for (const lang of data.languages.main) {
        technologies.push({
          name: lang,
          color: theme.palette.secondary.main,
          icon: getTechIcon(lang),
        });
      }

      for (const framework of data.frameworks.main) {
        technologies.push({
          name: framework,
          color: theme.palette.info.main,
          icon: getTechIcon(framework),
        });
      }

      for (const db of data.databases.main) {
        technologies.push({
          name: db,
          color: theme.palette.warning.main,
          icon: getTechIcon(db),
        });
      }

      content.current = (
        <Card
          variant="outlined"
          className={classes["tech-card"]}
          sx={{ background: theme.palette.background.default }}
        >
          <Grid
            container
            spacing={1}
            justifyContent="center"
            sx={{ ml: { xs: "-8px", sm: 0 } }}
          >
            {technologies.map((tech) => (
              <Grid item key={tech.name} sm={1.5}>
                <Tooltip title={tech.name} placement="top">
                  <Avatar
                    sx={{
                      bgcolor: tech.color,
                      transition: "all 250ms linear",
                    }}
                  >
                    <IconContext.Provider value={{ color: iconColor }}>
                      {tech.icon}
                    </IconContext.Provider>
                  </Avatar>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Card>
      );
    }
  }, [isLoading, data, error, iconColor, theme, content]);

  return content.current;
};

export default memo(TechnologyGrid);

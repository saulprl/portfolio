import useSWR from "swr";

import {
  Alert,
  Avatar,
  Card,
  CardContent,
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

interface Technology {
  name: string[];
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

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .catch((error) => error.message);

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
  const { data, error } = useSWR<TechData, any, string>(
    "/api/technologies",
    fetcher
  );
  const themeMode = theme.palette.mode;
  const iconColor = themeMode === "dark" ? "#FFFFFF" : "#2C2C2C";

  let content = <Skeleton animation="wave" variant="rounded" height={100} />;

  if (error) {
    content = (
      <Alert color="error" variant="outlined">
        {error.message}
      </Alert>
    );
  }

  if (!error && data) {
    const technologies: TechnologyItem[] = [];

    for (const lang of data.languages.name) {
      technologies.push({
        name: lang,
        color:
          themeMode === "dark"
            ? theme.palette.secondary.main
            : theme.palette.secondary.light,
        icon: getTechIcon(lang),
      });
    }

    for (const framework of data.frameworks.name) {
      technologies.push({
        name: framework,
        color:
          themeMode === "dark"
            ? theme.palette.info.dark
            : theme.palette.info.light,
        icon: getTechIcon(framework),
      });
    }

    for (const db of data.databases.name) {
      technologies.push({
        name: db,
        color: theme.palette.warning.main,
        icon: getTechIcon(db),
      });
    }

    content = (
      <Card
        variant="outlined"
        className={classes["tech-card"]}
        sx={{ background: theme.palette.background.default }}
      >
        <Grid container spacing={1} justifyContent="center" marginLeft="0px">
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

  return content;
};

export default TechnologyGrid;

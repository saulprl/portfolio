import { FC } from "react";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";

import classes from "../../styles/Projects.module.css";

interface Props {
  id: number;
  name: string;
  excerpt: string;
  languages: string;
  frameworks: string | null;
  database: string | null;
}

const ProjectItem: FC<Props> = (props: Props) => {
  const { id, name, excerpt, languages, frameworks, database } = props;
  const theme = useTheme();

  const projectItemBackground =
    theme.palette.mode === "dark" ? "default" : "#F3F3F3";

  return (
    <Card
      className={classes["project-item"]}
      sx={{
        background: projectItemBackground,
        border: theme.border.default,
      }}
    >
      <CardActionArea LinkComponent={Link} href={`/projects/${id}`}>
        <CardHeader
          title={name}
          titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
          sx={{ pb: "4px" }}
        />
        <CardContent sx={{ pt: "4px", pb: "8px" }}>
          <Typography variant="body1">{excerpt}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "flex-end",
            padding: "0 16px 16px",
          }}
        >
          <Chip label={languages} className={classes.chip} color="secondary" />
          {frameworks && (
            <Chip label={frameworks} className={classes.chip} color="info" />
          )}
          {database && (
            <Chip label={database} className={classes.chip} color="warning" />
          )}
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProjectItem;

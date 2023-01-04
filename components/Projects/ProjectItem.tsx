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

import classes from "../../styles/ProjectItem.module.css";

interface Props {
  name: string;
  excerpt: string;
  languages: string;
  frameworks: string | null;
  database: string | null;
}

const ProjectItem: FC<Props> = (props: Props) => {
  const { name, excerpt, languages, frameworks, database } = props;
  const theme = useTheme();

  const projectItemBackground =
    theme.palette.mode === "dark" ? "default" : theme.palette.secondary.light;

  const border =
    theme.palette.mode === "dark" ? "1px solid #282c34" : "1px solid #c3c8cb";

  return (
    <Card
      sx={{
        background: projectItemBackground,
        borderRadius: "8px",
        border: border,
        mb: "8px",
        transition: "background-color 250ms linear, border 250ms linear",
      }}
    >
      <CardActionArea LinkComponent={Link} href="/projects">
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
          <Chip label={languages} className={classes.chip} />
          {frameworks && <Chip label={frameworks} className={classes.chip} />}
          {database && <Chip label={database} className={classes.chip} />}
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProjectItem;

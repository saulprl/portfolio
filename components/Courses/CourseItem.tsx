import { FC } from "react";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";
import { Badge, CheckCircle, OpenInNew, Pending } from "@mui/icons-material";

import classes from "../../styles/Courses.module.css";

interface Dictionary {
  courseCompleted: string;
  courseOngoing: string;
  showCertificate: string;
}
interface Props {
  name: string;
  status: string;
  certificate: string | null;
  description: string;
  link: string;
  onShowCertificate: () => void;
  dictionary: Dictionary;
}

const CourseItem: FC<Props> = (props: Props) => {
  const { name, status, certificate, description, link, dictionary } = props;
  const theme = useTheme();

  const cardBackground = theme.palette.mode === "dark" ? "default" : "#F3F3F3";

  return (
    <Card
      className={classes["course-item"]}
      sx={{ background: cardBackground, border: theme.border.default }}
    >
      <CardActionArea LinkComponent="a" href={link} target="_blank">
        <CardHeader
          title={name}
          titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
          action={<OpenInNew sx={{ mt: "6px", mr: "8px" }} />}
          sx={{ pb: "4px" }}
        />
        <CardContent sx={{ pt: "4px", pb: "8px" }}>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { sm: "space-between" },
          alignItems: { xs: "stretch" },
          padding: "0 16px 16px",
          mt: "8px",
        }}
      >
        <Chip
          className={classes.chip}
          label={status}
          icon={
            status === dictionary.courseCompleted ? (
              <CheckCircle />
            ) : (
              <Pending />
            )
          }
          color={status === dictionary.courseCompleted ? "success" : "warning"}
          sx={{ my: { xs: "4px", sm: 0 } }}
        />
        <Button
          disabled={!!!certificate}
          variant="contained"
          endIcon={<Badge />}
          onClick={props.onShowCertificate}
          sx={{ textTransform: "none", my: { xs: "4px", sm: 0 } }}
        >
          {dictionary.showCertificate}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseItem;

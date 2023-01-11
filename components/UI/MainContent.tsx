import { FC, ReactNode } from "react";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import { Article } from "@mui/icons-material";

import classes from "../../styles/MainContent.module.css";

interface Props {
  title: string;
  children: ReactNode;
  avatar?: ReactNode;
}

const MainContent: FC<Props> = (props: Props) => {
  const theme = useTheme();
  const { title, avatar } = props;

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";
  const border =
    theme.palette.mode === "dark" ? "1px solid #282C34" : "1px solid #C3C8CB";

  return (
    <Box
      component="main"
      className={classes["main-container"]}
      sx={{
        width: { sm: "calc(100% - 280px)" },
        ml: { sm: "280px" },
        height: { xs: "calc(100vh - 48px)", sm: "100vh" },
      }}
    >
      <Card
        variant="outlined"
        className={classes["main-card"]}
        sx={{ border: border, width: { xs: "100%", md: "540px" } }}
      >
        <CardHeader
          title={title}
          avatar={avatar}
          titleTypographyProps={{ variant: "h5", fontWeight: "bold" }}
          action={
            <Tooltip title="Resume" placement="left">
              <IconButton
                LinkComponent="a"
                href="https://drive.google.com/file/d/1CUI2A35QdO5em1i3ycHzgtu3hm2R57su/view?usp=sharing"
                target="_blank"
                sx={{ color: iconColor }}
              >
                <Article />
              </IconButton>
            </Tooltip>
          }
        />
        <Divider />
        <CardContent>{props.children}</CardContent>
      </Card>
    </Box>
  );
};

export default MainContent;

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

import classes from "../../styles/MainContent.module.css";
import { Article } from "@mui/icons-material";

interface Props {
  title: string;
  children: ReactNode;
}

const MainContent: FC<Props> = (props: Props) => {
  const theme = useTheme();
  const { title } = props;

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";
  const border =
    theme.palette.mode === "dark" ? "1px solid #282C34" : "1px solid #C3C8CB";

  return (
    <Box
      component="main"
      // sx={{
      //   height: { sm: "100vh" },
      //   width: { sm: "calc(100% - 280px)" },
      //   ml: { sm: "280px" },
      //   padding: "8px",
      //   overflow: "auto",
      // }}
      className={classes["main-container"]}
      sx={{ width: { sm: "calc(100% - 280px)" } }}
    >
      <Card
        variant="outlined"
        className={classes["main-card"]}
        sx={{ border: border, width: { xs: "100%", md: "540px" } }}
      >
        <CardHeader
          title={title}
          titleTypographyProps={{ fontWeight: "bold" }}
          action={
            <Tooltip title="Resume" placement="left">
              <IconButton sx={{ color: iconColor }}>
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

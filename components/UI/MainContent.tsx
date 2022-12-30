import { FC, ReactNode } from "react";

import { Box, Card, useTheme } from "@mui/material";

import classes from "../../styles/MainContent.module.css";

interface Props {
  title: string;
  children: ReactNode;
}

const MainContent: FC<Props> = (props: Props) => {
  const theme = useTheme();
  const { title } = props;

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";

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
      <Card variant="outlined" className={classes["main-card"]}></Card>
    </Box>
  );
};

export default MainContent;

import { FC, ReactNode } from "react";

import { useRouter } from "next/router";

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
import { ArrowBack, Article } from "@mui/icons-material";

import classes from "../../styles/MainContent.module.css";

const DICTIONARY = {
  "en-US": {
    resume: "Resume",
    back: "Back",
  },
  "es-MX": {
    resume: "Currículum",
    back: "Regresar",
  },
};

interface Props {
  title: string;
  children: ReactNode;
  avatar?: boolean;
}

const MainContent: FC<Props> = (props: Props) => {
  const { title, avatar = false } = props;

  const theme = useTheme();
  const router = useRouter();

  const dict = DICTIONARY[router.locale! as keyof typeof DICTIONARY];

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";
  const border =
    theme.palette.mode === "dark" ? "1px solid #282C34" : "1px solid #C3C8CB";

  return (
    <Box
      component="main"
      className={classes["main-container"]}
      sx={{
        width: { sm: "calc(100% - 280px)" },
        height: { xs: "calc(100vh - 48px)", sm: "100vh" },
        ml: { sm: "280px" },
        padding: { xs: "0px", sm: "8px" },
      }}
    >
      <Card
        variant="outlined"
        className={classes["main-card"]}
        sx={{
          width: { xs: "100%", md: "540px" },
          borderRadius: { xs: "0px", sm: "16px" },
          border: theme.border.default,
        }}
      >
        <CardHeader
          title={title}
          avatar={
            avatar ? (
              <Tooltip title={dict.back}>
                <IconButton
                  onClick={() => router.push("/projects")}
                  sx={{ color: iconColor }}
                >
                  <ArrowBack />
                </IconButton>
              </Tooltip>
            ) : undefined
          }
          titleTypographyProps={{ variant: "h5", fontWeight: "bold" }}
          action={
            <Tooltip title={dict.resume} placement="left">
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

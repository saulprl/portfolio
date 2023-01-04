import Image from "next/image";

import {
  Avatar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import classes from "../../styles/Presentation.module.css";
import Socials from "./Socials";

const Presentation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";
  const border =
    theme.palette.mode === "dark" ? "1px solid #282C34" : "1px solid #C3C8CB";

  const avatar = (
    <Avatar
      className={classes.avatar}
      sx={{
        width: { xs: "170px", sm: "220px" },
        height: { xs: "170px", sm: "220px" },
      }}
    >
      <Image
        priority={true}
        src="/images/saulprl.jpg"
        alt="Saúl Ramos Laborín"
        width={isMobile ? 170 : 220}
        height={isMobile ? 170 : 220}
      />
    </Avatar>
  );

  return (
    <Box component="section" className={classes.presentation}>
      <Typography variant="h5">Saúl Ramos Laborín</Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: "center",
        }}
      >
        {avatar}
        <Box
          component="div"
          className={classes.socials}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            background: theme.palette.background.default,
            border: border,
          }}
        >
          <Socials iconColor={iconColor} hoverColor={theme.palette.info.main} />
        </Box>
      </Box>
    </Box>
  );
};

export default Presentation;

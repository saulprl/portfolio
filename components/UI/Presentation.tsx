import Image from "next/image";

import {
  Avatar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Socials from "./Socials";

import classes from "../../styles/Presentation.module.css";

const Presentation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";

  const avatar = (
    <Avatar
      className={classes.avatar}
      sx={{
        width: { xs: "170px", sm: "220px" },
        height: { xs: "170px", sm: "220px" },
        margin: { xs: "4px 0", sm: "8px auto" },
        border: theme.border.default,
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
          justifyContent: { xs: "space-evenly", sm: "flex-start" },
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
            border: theme.border.default,
          }}
        >
          <Socials iconColor={iconColor} hoverColor={theme.palette.info.main} />
        </Box>
      </Box>
    </Box>
  );
};

export default Presentation;

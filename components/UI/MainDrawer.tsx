import { FC } from "react";

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  useTheme,
  Toolbar,
  Tooltip,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  ListItem,
  Switch,
} from "@mui/material";
import { Class, DarkMode, Folder, Home, LightMode } from "@mui/icons-material";
import { useRouter } from "next/router";

import classes from "../../styles/MainDrawer.module.css";
import Presentation from "./Presentation";

interface Props {
  onToggleTheme: () => void;
  open?: boolean;
  onClose?: () => void;
}

const MainDrawer: FC<Props> = (props: Props) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";

  const navButtonStyle = {
    "&.Mui-selected": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.primary.dark
          : theme.palette.primary.light,
      transition: "background-color 250ms linear",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "rgba(233, 30, 99, 0.65)",
    },
    "&:hover": {
      backgroundColor: "rgba(125, 161, 160, 0.65)",
    },
  };

  const navButtons = (
    <List>
      <ListItem sx={{ display: { sm: "none" } }}>
        <ListItemButton
          className={classes["nav-button"]}
          disableGutters
          disableRipple
          onClick={props.onToggleTheme}
        >
          <ListItemIcon sx={{ color: iconColor }}>
            <DarkMode />
          </ListItemIcon>
          <ListItemText primary="Dark mode" />
        </ListItemButton>
        <Switch
          edge="end"
          onChange={props.onToggleTheme}
          checked={theme.palette.mode === "dark"}
        />
      </ListItem>
      <ListItemButton
        className={classes["nav-button"]}
        onClick={() => router.push("/")}
        selected={router.pathname === "/"}
        sx={navButtonStyle}
      >
        <ListItemIcon sx={{ color: iconColor }}>{<Home />}</ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton
        className={classes["nav-button"]}
        onClick={() => router.push("/projects")}
        selected={/projects/i.test(router.pathname)}
        sx={navButtonStyle}
      >
        <ListItemIcon sx={{ color: iconColor }}>{<Folder />}</ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItemButton>
      <ListItemButton
        className={classes["nav-button"]}
        onClick={() => router.push("/courses")}
        selected={/courses/i.test(router.pathname)}
        sx={navButtonStyle}
      >
        <ListItemIcon sx={{ color: iconColor }}>{<Class />}</ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItemButton>
    </List>
  );

  return (
    <Box component="nav" sx={{ width: { sm: "280px" } }}>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor={isMobile ? "top" : "left"}
        open={isMobile ? props.open! : true}
        onClose={isMobile ? props.onClose! : undefined}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: "280px" },
            transition: "background-color 250ms linear",
          },
        }}
      >
        <>
          <AppBar
            position="static"
            color="primary"
            enableColorOnDark
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">saulprl's portfolio</Typography>
              <Tooltip
                title={
                  theme.palette.mode === "dark" ? "Light mode" : "Dark mode"
                }
                placement="right"
              >
                <IconButton
                  onClick={props.onToggleTheme}
                  sx={{ color: "white" }}
                >
                  {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
          <Box component="div" sx={{ padding: "8px" }}>
            <Presentation />
            {navButtons}
          </Box>
        </>
      </Drawer>
    </Box>
  );
};

export default MainDrawer;

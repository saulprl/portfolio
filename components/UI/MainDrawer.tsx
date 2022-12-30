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
} from "@mui/material";
import { Class, DarkMode, Folder, Home, LightMode } from "@mui/icons-material";
import { useRouter } from "next/router";

import classes from "../../styles/MainDrawer.module.css";
import Presentation from "./Presentation";

interface Props {
  onToggleTheme: () => void;
}

const MainDrawer: FC<Props> = (props: Props) => {
  const router = useRouter();
  const theme = useTheme();

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";

  const navButtons = (
    <List>
      <ListItemButton
        className={classes["nav-button"]}
        onClick={() => router.push("/")}
        selected={router.pathname === "/"}
      >
        <ListItemIcon sx={{ color: iconColor }}>{<Home />}</ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton
        className={classes["nav-button"]}
        onClick={() => router.push("/projects")}
        selected={/projects/i.test(router.pathname)}
      >
        <ListItemIcon sx={{ color: iconColor }}>{<Folder />}</ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItemButton>
      <ListItemButton
        className={classes["nav-button"]}
        onClick={() => router.push("/courses")}
        selected={/courses/i.test(router.pathname)}
      >
        <ListItemIcon sx={{ color: iconColor }}>{<Class />}</ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItemButton>
    </List>
  );

  return (
    <Box component="nav" sx={{ width: { sm: "280px" } }}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={true}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "280px",
            transition: "background-color 250ms linear",
          },
        }}
      >
        <>
          <AppBar position="static" color="primary" enableColorOnDark>
            <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6">AppBar Title</Typography>
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
          <Box component="div" sx={{ padding: "12px" }}>
            <Presentation />
            {navButtons}
          </Box>
        </>
      </Drawer>
    </Box>
  );
};

export default MainDrawer;

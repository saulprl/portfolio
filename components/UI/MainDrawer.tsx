import { FC } from "react";
import { useRouter } from "next/router";

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
  alpha,
} from "@mui/material";
import {
  Class,
  ClassOutlined,
  DarkMode,
  Folder,
  FolderOutlined,
  Home,
  HomeOutlined,
  LightMode,
} from "@mui/icons-material";

import Presentation from "./Presentation";

import classes from "../../styles/MainDrawer.module.css";

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
  const selectedHoverAlpha = theme.palette.mode === "dark" ? 0.65 : 0.87;
  const hoverAlpha = theme.palette.mode === "dark" ? selectedHoverAlpha : 0.52;

  const navButtonStyle = {
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      transition: "background-color 250ms linear",
    },
    "&.Mui-selected:hover": {
      backgroundColor: alpha(theme.palette.primary.main, selectedHoverAlpha),
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, hoverAlpha),
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
        onClick={() => {
          router.push("/");
          if (isMobile) props.onClose!();
        }}
        selected={router.pathname === "/"}
        sx={navButtonStyle}
      >
        <ListItemIcon sx={{ color: "inherit" }}>
          {router.pathname === "/" ? <Home /> : <HomeOutlined />}
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton
        className={classes["nav-button"]}
        onClick={() => {
          router.push("/projects");
          if (isMobile) props.onClose!();
        }}
        selected={/projects/i.test(router.pathname)}
        sx={navButtonStyle}
      >
        <ListItemIcon sx={{ color: "inherit" }}>
          {/projects/i.test(router.pathname) ? <Folder /> : <FolderOutlined />}
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItemButton>
      <ListItemButton
        className={classes["nav-button"]}
        onClick={() => {
          router.push("/courses");
          if (isMobile) props.onClose!();
        }}
        selected={/courses/i.test(router.pathname)}
        sx={navButtonStyle}
      >
        <ListItemIcon sx={{ color: "inherit" }}>
          {/courses/i.test(router.pathname) ? <Class /> : <ClassOutlined />}
        </ListItemIcon>
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
        ModalProps={{
          keepMounted: true,
          onClose: isMobile ? props.onClose! : undefined,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: "280px" },
            transition: "background-color 250ms linear",
          },
        }}
      >
        <>
          {!isMobile && (
            <AppBar
              position="static"
              color="primary"
              enableColorOnDark
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6">saulprl&apos;s portfolio</Typography>
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
                    {theme.palette.mode === "dark" ? (
                      <LightMode className={classes["theme-icon"]} />
                    ) : (
                      <DarkMode className={classes["theme-icon"]} />
                    )}
                  </IconButton>
                </Tooltip>
              </Toolbar>
            </AppBar>
          )}
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

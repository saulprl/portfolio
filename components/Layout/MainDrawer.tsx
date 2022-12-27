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
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

interface Props {
  onToggleTheme: () => void;
}

const MainDrawer: FC<Props> = (props: Props) => {
  const theme = useTheme();

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
        </>
      </Drawer>
    </Box>
  );
};

export default MainDrawer;

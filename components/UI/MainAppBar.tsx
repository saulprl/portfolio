import { FC, useState } from "react";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

import MainDrawer from "./MainDrawer";

interface Props {
  onToggleTheme: () => void;
}

const MainAppBar: FC<Props> = (props: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <MainDrawer
        onToggleTheme={props.onToggleTheme}
        open={drawerOpen}
        onClose={closeDrawerHandler}
      />
      <AppBar
        position="sticky"
        color="primary"
        enableColorOnDark
        sx={{ display: { sm: "none" } }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            onClick={openDrawerHandler}
            sx={{ color: "white" }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">saulprl&apos;s portfolio</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainAppBar;

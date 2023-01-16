import { FC, useState } from "react";

import { useRouter } from "next/router";

import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Language, Menu } from "@mui/icons-material";

import MainDrawer from "./MainDrawer";

interface Dictionary {
  buttons: {
    home: string;
    projects: string;
    courses: string;
    darkMode: string;
  };
  tooltips: {
    lightMode: string;
    darkMode: string;
    locale: string;
  };
}
interface Props {
  dictionary: Dictionary;
  onToggleTheme: () => void;
}

const MainAppBar: FC<Props> = (props: Props) => {
  const router = useRouter();
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
        dictionary={props.dictionary}
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
          <Button
            variant="text"
            endIcon={<Language />}
            onClick={() =>
              router.push(router.pathname, undefined, {
                locale: router.locale === "en-US" ? "es-MX" : "en-US",
              })
            }
            sx={{
              color: "white",
              fontWeight: "bold",
              position: "absolute",
              right: "16px",
            }}
          >
            {router.locale === "en-US" ? "EN" : "ES"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainAppBar;

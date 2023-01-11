import { FC } from "react";

import { useMediaQuery, useTheme } from "@mui/material";

import MainAppBar from "../UI/MainAppBar";
import MainDrawer from "../UI/MainDrawer";

interface Props {
  onToggleTheme: () => void;
}

const Layout: FC<Props> = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMobile && <MainAppBar onToggleTheme={props.onToggleTheme} />}
      {!isMobile && <MainDrawer onToggleTheme={props.onToggleTheme} />}
    </>
  );
};

export default Layout;

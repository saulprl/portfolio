import { FC } from "react";

import { useRouter } from "next/router";

import { useMediaQuery, useTheme } from "@mui/material";

import MainAppBar from "../UI/MainAppBar";
import MainDrawer from "../UI/MainDrawer";

import dictionary from "./layout-dic";

interface Props {
  onToggleTheme: () => void;
}

const Layout: FC<Props> = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { locale } = useRouter();

  const dict = dictionary[locale! as keyof typeof dictionary];

  return (
    <>
      {isMobile && (
        <MainAppBar onToggleTheme={props.onToggleTheme} dictionary={dict} />
      )}
      {!isMobile && (
        <MainDrawer onToggleTheme={props.onToggleTheme} dictionary={dict} />
      )}
    </>
  );
};

export default Layout;

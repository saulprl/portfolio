import { FC, ReactNode } from "react";
import MainContent from "../UI/MainContent";

import MainDrawer from "../UI/MainDrawer";

interface Props {
  onToggleTheme: () => void;
}

const Layout: FC<Props> = (props: Props) => {
  return (
    <>
      <MainDrawer onToggleTheme={props.onToggleTheme} />
    </>
  );
};

export default Layout;

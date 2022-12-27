import { FC, ReactNode } from "react";

import MainDrawer from "./MainDrawer";

interface Props {
  onToggleTheme: () => void;
  children: ReactNode;
}

const Layout: FC<Props> = (props: Props) => {
  return (
    <>
      <MainDrawer onToggleTheme={props.onToggleTheme} />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

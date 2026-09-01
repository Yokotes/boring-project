import type { PropsWithChildren, ReactNode } from "react";
import { Page } from "./page-layout-components";

interface Props {
  userSlot: ReactNode;
  navSlot: ReactNode;
}

export const PageLayout = ({
  userSlot,
  navSlot,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Page>
      <Page.Sidebar>
        <Page.Logo>Boring Project</Page.Logo>
        {navSlot}
      </Page.Sidebar>
      <Page.Main>
        <Page.TopBar>
          <Page.UserSlot>{userSlot}</Page.UserSlot>
        </Page.TopBar>
        <Page.Content>{children}</Page.Content>
      </Page.Main>
    </Page>
  );
};

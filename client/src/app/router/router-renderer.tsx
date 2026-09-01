import { Nav, PageLayout, UserProfile } from "@/shared/ui/page-layout";
import { RouterProvider } from "@/shared/lib/router";
import { useRouterRenderer } from "./use-router-renderer";

export const RouterRenderer = () => {
  const { navLinks, withoutLayout, user, goToPage, Component } =
    useRouterRenderer();

  if (withoutLayout)
    return (
      <RouterProvider value={{ goToPage }}>
        <Component />
      </RouterProvider>
    );

  return (
    <RouterProvider value={{ goToPage }}>
      <PageLayout
        userSlot={<UserProfile user={user!} />}
        navSlot={<Nav items={navLinks} />}
      >
        <Component />
      </PageLayout>
    </RouterProvider>
  );
};

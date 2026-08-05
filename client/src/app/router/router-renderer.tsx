import { Nav, PageLayout, UserProfile } from "@/shared/ui/page-layout";
import { useRouter } from "./use-router";

export const RouterRenderer = () => {
  const { Component, navLinks, withoutLayout } = useRouter();

  if (withoutLayout) return <Component />;

  return (
    <PageLayout
      userSlot={<UserProfile user={"user"} />}
      navSlot={<Nav items={navLinks} />}
    >
      <Component />
    </PageLayout>
  );
};

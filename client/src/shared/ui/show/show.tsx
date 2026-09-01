import type { PropsWithChildren } from "react";

export const Show = ({
  when,
  children,
}: PropsWithChildren<{ when: boolean }>) => {
  return when ? children : null;
};

import { userSelector } from "@/app/selectors";
import type { FC } from "react";
import { useSelector } from "react-redux";

export const UserProfile: FC = () => {
  // NOTE: Component shown only for authorized user, so there is no cases when user will be null
  const user = useSelector(userSelector)!;

  return <div>{user}</div>;
};

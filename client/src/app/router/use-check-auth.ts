import { checkAuthQueryFn } from "@/shared/api";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";

export const useCheckAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const client = useQueryClient();

  const checkAuth = useCallback(async () => {
    setIsLoading(true);

    // TODO: Add Error handling
    const data = await client.fetchQuery({
      queryKey: ["auth"],
      queryFn: checkAuthQueryFn,
    });

    setUser(data.user);
    setIsLoading(false);

    return !!data.user;
  }, [client]);

  return { checkAuth, isLoading, user };
};

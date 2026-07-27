export const getTokenFromCookie = (cookie?: string) => {
  if (!cookie) return;

  return /token=(.*)/.exec(cookie || "")?.[1];
};

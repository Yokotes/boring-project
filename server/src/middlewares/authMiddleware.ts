import { type NextFunction, type Request, type Response } from "express";
import { getTokenFromCookie } from "../utils";
import { checkAuth } from "../services";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = getTokenFromCookie(req.headers["cookie"]);

  if (token) {
    const user = await checkAuth(token);

    if (user) return next();
  }

  res.sendStatus(401);
};

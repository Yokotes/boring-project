import { Router } from "express";
import jwt from "jsonwebtoken";
import type { AuthRequestBody } from "../types";
import { authUser, checkAuth } from "../services";

const authRouter = Router();

authRouter.post("/auth", async (req, res) => {
  const data = req.body as AuthRequestBody | null;

  if (!data) return res.sendStatus(401);

  try {
    const user = await authUser(data);

    if (user) {
      const token = jwt.sign(
        { user: data.login },
        import.meta.env.VITE_JWT_SECRET,
      );
      return res
        .setHeader("Set-Cookie", `token=${token};`)
        .status(200)
        .send({ user: data.login });
    }
  } catch (e) {
    // TODO: Add error later
    res.sendStatus(500);
  }

  res.sendStatus(401);
});

authRouter.get("/check-auth", async (req, res) => {
  const cookie = req.headers["cookie"];
  const token = /token=(.*)/.exec(cookie || "")?.[1];

  if (!token) return res.sendStatus(401);

  const data = jwt.verify(token, import.meta.env.VITE_JWT_SECRET) as {
    user: string;
  };

  const user = await checkAuth(data.user);

  if (user) return res.status(200).send({ user });

  res.sendStatus(401);
});

export default authRouter;

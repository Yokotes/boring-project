import { Router } from "express";
import jwt from "jsonwebtoken";
import type { AuthRequestBody } from "../types";
import { authUser } from "../services";

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
        .setHeader("Set-Cookie", `token=${token}`)
        .status(200)
        .send({ user: data.login });
    }
  } catch (e) {
    // TODO: Add error later
    res.sendStatus(500);
  }

  res.sendStatus(401);
});

export default authRouter;

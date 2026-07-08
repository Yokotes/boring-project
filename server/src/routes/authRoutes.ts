import { Router } from "express";
import jwt from "jsonwebtoken";
import type { AuthRequestBody } from "../types";

// TODO: Remove when db will be ready
const USER_MOCK_DATA = {
  login: "admin",
  password: "admin",
};

const authRouter = Router();

authRouter.post("/auth", (req, res) => {
  const data = req.body as AuthRequestBody | null;

  if (!data) return res.sendStatus(401);

  if (
    data.login === USER_MOCK_DATA.login &&
    data.password === USER_MOCK_DATA.password
  ) {
    const token = jwt.sign(
      { user: data.login },
      import.meta.env.VITE_JWT_SECRET,
    );
    return res
      .setHeader("Set-Cookie", `token=${token}`)
      .status(200)
      .send({ user: data.login });
  }

  res.sendStatus(401);
});

export default authRouter;

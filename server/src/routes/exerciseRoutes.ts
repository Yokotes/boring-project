import { Router } from "express";
import { authMiddleware } from "../middlewares";
import { exerciseService } from "../services";
import type { ExerciseRequestBody } from "../types";

const exerciseRouter = Router();

exerciseRouter.use(authMiddleware);

exerciseRouter.get("/exercise", async (_, res) => {
  const data = await exerciseService.getAll();

  res.status(200).send({ data });
});

exerciseRouter.post("/exercise", async (req, res) => {
  const data = req.body as ExerciseRequestBody | null;

  // TODO: Add error message
  if (!data) return res.sendStatus(400);

  let created;
  try {
    created = await exerciseService.create(data);
  } catch (error) {
    return res.status(500).send({ error });
  }

  res.status(200).send({ data: created });
});

exerciseRouter.put("/exercise/:id", async (req, res) => {
  const id = Number(req.params.id);
  const data = req.body as ExerciseRequestBody | null;

  // TODO: Add error message
  if (!data) return res.sendStatus(400);

  let updated;
  try {
    updated = await exerciseService.update(id, data);
  } catch (error) {
    return res.status(500).send({ error });
  }

  res.status(200).send({ data: updated });
});

export default exerciseRouter;

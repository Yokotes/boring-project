import { Router } from "express";
import { authMiddleware } from "../middlewares";
import { trainingService } from "../services";
import type { TrainingRequestBody } from "../types";

const trainingRouter = Router();

trainingRouter.use(authMiddleware);

trainingRouter.post("/training", async (req, res) => {
  const data = req.body as TrainingRequestBody | null;

  // TODO: Add error message
  if (!data) return res.sendStatus(400);

  let created;
  try {
    created = await trainingService.create(data);
  } catch (error) {
    return res.status(500).send({ error });
  }

  res.status(200).send({ data: created });
});

trainingRouter.get("/training", async (_, res) => {
  const data = await trainingService.getAll();

  res.status(200).send({ data });
});

trainingRouter.get("/training/:id", async (req, res) => {
  const id = Number(req.params.id);
  const data = await trainingService.getDetailedById(id);

  if (!data) return res.sendStatus(404);

  res.status(200).send({ data });
});

export default trainingRouter;

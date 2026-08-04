import { Router } from "express";
import { authMiddleware } from "../middlewares";
import { trainingService } from "../services";

const trainingRouter = Router();

trainingRouter.use(authMiddleware);

trainingRouter.get("/trainings", async (_, res) => {
  const data = await trainingService.getAll();

  res.status(200).send(data);
});

trainingRouter.get("/trainings/:id", async (req, res) => {
  const id = Number(req.params.id);
  const data = await trainingService.getDetailedById(id);

  if (!data) return res.sendStatus(404);

  res.status(200).send(data);
});

export default trainingRouter;

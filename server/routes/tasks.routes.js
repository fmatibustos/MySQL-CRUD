import { Router } from "express";
import {
  getTask,
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", getTask);
router.put("/tasks/:id", createTask);
router.get("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;

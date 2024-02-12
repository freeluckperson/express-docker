import { Router } from "express";
import { getTasks, createTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get("/tasks", getTasks);

router.post("/tasks", createTask);

// router.get("/tasks", getTasks);

// router.get("/tasks", getTasks);

export default router;

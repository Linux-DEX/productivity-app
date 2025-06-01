import { Router } from "express";
import { todoController } from "../controllers/todo.controller";

const router = Router();

router.post("/create", todoController.create);

export const todoRoute = router;

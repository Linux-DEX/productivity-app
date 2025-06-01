import { Router } from "express";
import { todoController } from "../controllers/todo.controller";

const router = Router();

router.post("/create", todoController.create);
router.get("/", todoController.getAll);
router.put("/:id", todoController.update); 


export const todoRoute = router;

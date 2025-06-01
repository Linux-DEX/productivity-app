import { Request, Response } from "express";
import { todoService } from "../services/todo.service";
import { CreateTodoDTO } from "../types/todo";

export const todoController = {
  async create(req: Request, res: Response) {
    try {
      const { task, list, date, fromTime, toTime, priority } =
        req.body as CreateTodoDTO;

      if (!task || !list || !date || !fromTime || !toTime || !priority) {
        return res.status(400).json({ message: "Missing required fields." });
      }

      if (priority < 1 || priority > 5) {
        return res
          .status(400)
          .json({ message: "Priority must be between 1 and 5." });
      }

      const todo = await todoService.createTodo({
        task,
        list,
        date,
        fromTime,
        toTime,
        priority,
      });
      res.status(201).json(todo);
    } catch (err) {
      console.error("Create Todo Error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

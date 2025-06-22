import { Request, Response } from "express";
import { todoService } from "../services/todo.service";
import { CreateTodoDTO } from "../types/todo";

export const todoController = {
  async create(req: Request, res: Response) {
    try {
      const { task, list, date, fromTime, toTime, priority, taskDesc } =
        req.body as CreateTodoDTO;

      if (!task) {
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
        taskDesc,
      });
      res.status(201).json(todo);
    } catch (err) {
      console.error("Create Todo Error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const todos = await todoService.getAllTodos();
      res.status(200).json(todos);
    } catch (err) {
      console.error("Get Todos Error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const { task, list, date, fromTime, toTime, priority } = req.body;

      if (!task || !list || !date || !fromTime || !toTime || !priority) {
        return res.status(400).json({ message: "Missing required fields." });
      }

      const success = await todoService.updateTodo(id, {
        task,
        list,
        date,
        fromTime,
        toTime,
        priority,
      });

      if (!success) {
        return res.status(404).json({ message: "Todo not found" });
      }

      res.status(200).json({ message: "Todo updated successfully" });
    } catch (err) {
      console.error("Update Todo Error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

import { getDb } from "../database/db";
import { CreateTodoDTO } from "../types/todo";

export const todoService = {
  async createTodo(todo: CreateTodoDTO) {
    const db = await getDb();

    const { task, list, date, fromTime, toTime, priority } = todo;

    const [result] = await db.execute(
      `INSERT INTO todos (task, list, date, from_time, to_time, priority)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [task, list, date, fromTime, toTime, priority]
    );

    return {
      id: (result as any).insertId,
      ...todo,
    };
  },
};

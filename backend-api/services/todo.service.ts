import { getDb } from "../database/db";
import { CreateTodoDTO } from "../types/todo";

export const todoService = {
  async createTodo(todo: CreateTodoDTO) {
    const db = await getDb();

    const { task, list, date, fromTime, toTime, priority, taskDesc } = todo;

    const [result] = await db.execute(
      `INSERT INTO todos (task, list, date, from_time, to_time, priority, description)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [task, list, date, fromTime, toTime, priority, taskDesc]
    );

    return {
      id: (result as any).insertId,
      ...todo,
    };
  },

  async getAllTodos() {
    const db = await getDb();
    const [rows] = await db.execute(
      "SELECT * FROM todos ORDER BY date, from_time"
    );
    return rows;
  },

  async updateTodo(id: number, updatedTodo: Partial<CreateTodoDTO>) {
    const db = await getDb();

    const { task, list, date, fromTime, toTime, priority } = updatedTodo;

    const [result] = await db.execute(
      `UPDATE todos
         SET task = ?, list = ?, date = ?, from_time = ?, to_time = ?, priority = ?
         WHERE id = ?`,
      [task, list, date, fromTime, toTime, priority, id]
    );

    return (result as any).affectedRows > 0;
  },
};

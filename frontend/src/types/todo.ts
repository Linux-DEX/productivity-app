export interface CreateTodoParams {
  task: string;
  list: string;
  date: string;
  fromTime: string;
  toTime: string;
  priority: string;
  taskDesc?: string;
}

export interface Todo {
  id: string;
  task: string;
  list: string;
  date: string;
  from_time: string;
  to_time: string;
  priority: string;
}

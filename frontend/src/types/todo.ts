export interface CreateTodoParams {
  task: string;
  list: string;
  date: string;
  fromTime: string;
  toTime: string;
  priority: string;
}

export interface Todo {
  id: string;
  task: string;
  list: string;
  date: string;
  fromTime: string;
  toTime: string;
  priority: string;
}

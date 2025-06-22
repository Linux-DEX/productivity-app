import { todoAPI } from '@/config/api-routelink';
import request from '@/shared/service/request';
import { CreateTodoParams, Todo } from '@/types/todo';

interface ApiResponse<T> {
  status: string;
  data: T;
  message?: string;
}

export const create = async (params: CreateTodoParams): Promise<Todo> => {
  const rdata: ApiResponse<Todo> = await request.post(todoAPI.CREATE_TODO, params);
  return rdata.data?.data as Todo;
};

export const getAllTodos = async (): Promise<Todo[]> => {
  const rdata: ApiResponse<Todo> = await request.get(todoAPI.GET_ALL_TODO);
  return rdata?.data || [];
}

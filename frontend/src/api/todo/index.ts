import { todoAPI } from '@/config/api-routelink';
import request from '@/shared/service/request';
import { CreateTodoParams, Todo } from '@/types/todo';

interface ApiResponse<T> {
  data?: {
    data: T;
  };
}

/**
 * Request: POST
 * Details: Create user by admin
 * @param email
 * @param name
 * @param clients
 * @param roles
 * @param enabled
 */
export const create = async (params: CreateTodoParams): Promise<Todo> => {
  const rdata: ApiResponse<Todo> = await request.post(todoAPI.CREATE_TODO, params);
  return rdata.data?.data as Todo;
};

export const getAllTodos = async (): Promise<Todo[]> => {
  const rdata: ApiResponse<Todo> = await request.get(todoAPI.GET_ALL_TODO);
  console.log("rdata",rdata)
  return rdata.data?.data | [];
}

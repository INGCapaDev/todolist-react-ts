import axios from 'axios';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const taskAPI = axios.create({
  baseURL: 'http://localhost:3000/tasks',
});

export const getTasks = async () => {
  const response = await taskAPI.get('/');
  return response.data;
};

export const createTask = async (title: string) =>
  await taskAPI.post('/', { title });

export const handleComplete = async (todo: {
  id: string;
  completed: boolean;
}) => await taskAPI.put(`/${todo.id}`, { completed: todo.completed });

export const deleteTask = async (id: string) => await taskAPI.delete(`/${id}`);

export const deleteCompleted = async (completed: Todo[]) => {
  const promises = completed.map((todo) => deleteTask(todo.id));
  await Promise.all(promises);
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Props } from '../types/todos';
import Todo from './Todo.tsx';
import { deleteTask } from '../api/taskAPI.ts';
import { toast } from 'react-hot-toast';

export const Todos: React.FC<Props> = ({ todos }) => {
  const queryClient = useQueryClient();

  const { mutate: removeTodo } = useMutation({
    mutationKey: ['removeTodo'],
    mutationFn: deleteTask,
    onSuccess: () => {
      toast.success('Tarea eliminada');
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={() => {
              removeTodo(todo.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
export default Todos;

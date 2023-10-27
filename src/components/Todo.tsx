import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Props } from '../types/todo';
import { handleComplete } from '../api/taskAPI';
import { useState } from 'react';

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
}) => {
  const queryClient = useQueryClient();
  const { mutate: toggleCompletedTodo } = useMutation({
    mutationKey: ['toggleCompletedTodo'],
    mutationFn: handleComplete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });

  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <div className='view'>
      <input
        className='toggle'
        checked={isCompleted}
        type='checkbox'
        onChange={() => {
          setIsCompleted(!isCompleted);
          toggleCompletedTodo({ id, completed: !completed });
        }}
      />
      <label>{title}</label>
      <button className='destroy' onClick={() => onRemoveTodo(id)} />
    </div>
  );
};
export default Todo;

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask } from '../api/taskAPI';
import { toast } from 'react-hot-toast';

export const CreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: createNewTask } = useMutation({
    mutationKey: ['createTask'],
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
      toast.success('Tarea creada correctamente');
    },
  });

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createNewTask(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='new-todo'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder='¿Que quieres hacer?'
        autoFocus
      />
    </form>
  );
};

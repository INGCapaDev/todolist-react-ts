import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { FilterValue } from '../types/filter.d.ts';
import { Filters } from './Filters.tsx';
import { deleteCompleted } from '../api/taskAPI.ts';
import type { ListOfTodos } from '../types/todos';
import { toast } from 'react-hot-toast';

interface Props {
  activeCount: number;
  completedCount: number;
  completedTodos: ListOfTodos;
  filterSelected: FilterValue;
  handleFilterChanged: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  completedTodos = [],
  filterSelected,
  handleFilterChanged,
}) => {
  const queryClient = useQueryClient();

  const { mutate: removeCompleted, isPending } = useMutation({
    mutationKey: ['deleteCompleted'],
    mutationFn: deleteCompleted,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
      toast.success('Tareas completadas eliminadas');
    },
  });

  const onClearCompleted = () => {
    removeCompleted(completedTodos);
  };

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas pendientes
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChanged={handleFilterChanged}
      />

      {completedCount > 0 && (
        <button
          className='clear-completed'
          onClick={onClearCompleted}
          disabled={isPending}>
          Borrar completadas
        </button>
      )}
    </footer>
  );
};

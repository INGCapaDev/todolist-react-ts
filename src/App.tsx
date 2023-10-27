import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Todos from './components/Todos.tsx';
import { TODO_FILTERS } from './consts.ts';
import type { FilterValue } from './types/filter.d.ts';
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import { getTasks } from './api/taskAPI.ts';
import { Toaster } from 'react-hot-toast';

import type { ListOfTodos, Todo } from './types/todos';

const App = () => {
  const { isLoading, error, data, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: getTasks,
    select: (todos: ListOfTodos) => {
      const completedTodos = todos.filter((todo: Todo) => todo.completed);
      const activeTodos = todos.filter((todo: Todo) => !todo.completed);
      return activeTodos.concat(completedTodos);
    },
  });

  const todos = data as ListOfTodos;

  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL,
  );

  const handleFilterChanged = (filter: FilterValue) => {
    setFilterSelected(filter);
  };

  const filteredTodos =
    todos?.filter((todo) => {
      if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
      if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
      return todo;
    }) || [];

  const activeCount = todos?.filter((todo) => !todo.completed).length || 0;
  const completedCount = (todos?.length || 0) - activeCount;
  const completedTodos = todos?.filter((todo) => todo.completed);

  return (
    <div className='todoapp'>
      <Header isLoading={isLoading} />
      {isLoading ? (
        <div className='loader'></div>
      ) : isError ? (
        <div className='error'>Error: {error.message}</div>
      ) : (
        <>
          <Todos todos={filteredTodos} />
          <Footer
            completedCount={completedCount}
            activeCount={activeCount}
            filterSelected={filterSelected}
            handleFilterChanged={handleFilterChanged}
            completedTodos={completedTodos}
          />
        </>
      )}
      <Toaster position='top-right' />
    </div>
  );
};
export default App;

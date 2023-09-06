import { useState } from 'react';
import Todos from './components/Todos.tsx';
import type { TodoTitle, TodoToggleProps } from './types/todos';
import { TODO_FILTERS } from './consts.ts';
import type { FilterValue } from './types/filter.d.ts';
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';

const mockTodos = [
  {
    id: '1',
    title: 'Ver el twitch de midudev',
    completed: true,
  },
  {
    id: '2',
    title: 'Aprender React con TypeScript',
    completed: false,
  },
  {
    id: '3',
    title: 'Sacar ticket de la miduFest',
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL,
  );

  const handleRemove = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({ id, completed }: TodoToggleProps) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChanged = (filter: FilterValue) => {
    setFilterSelected(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const handleRemoveCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompletedTodo={handleCompleted}
      />
      <Footer
        completedCount={completedCount}
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChanged={handleFilterChanged}
        onClearCompleted={handleRemoveCompleted}
      />
    </div>
  );
};
export default App;

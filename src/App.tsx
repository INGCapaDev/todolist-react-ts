import { useState } from 'react';
import Todos from './components/Todos.tsx';

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

  const handleRemove = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className='todoapp'>
      <Todos todos={todos} onRemoveTodo={handleRemove} />
    </div>
  );
};
export default App;

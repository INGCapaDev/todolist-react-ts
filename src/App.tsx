import { useState } from 'react';
import Todos from './components/Todos.tsx';

const mockTodos = [
  {
    id: '1',
    title: 'Ver el twitch de midudev',
    completed: false,
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
  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  );
};
export default App;

import type { Props } from '../types/todos';
import Todo from './Todo.tsx';

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompletedTodo,
}) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompletedTodo={onToggleCompletedTodo}
          />
        </li>
      ))}
    </ul>
  );
};
export default Todos;

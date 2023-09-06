import type { Props } from '../types/todo';

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompletedTodo,
}) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompletedTodo({
      id,
      completed: event.target.checked,
    });
  };

  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type='checkbox'
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button className='destroy' onClick={() => onRemoveTodo(id)} />
    </div>
  );
};
export default Todo;

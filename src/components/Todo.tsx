import type { Props } from '../@types/todo.d.ts';

export const Todo: React.FC<Props> = ({ title, completed }) => {
  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type='checkbox'
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className='destroy' onClick={() => {}} />
    </div>
  );
};
export default Todo;

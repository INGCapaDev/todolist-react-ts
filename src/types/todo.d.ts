import { Todo, TodoToggleProps } from './todos.d.ts';

export interface Props extends Todo {
  onRemoveTodo: (id: string) => void;
  onToggleCompletedTodo: (props: TodoToggleProps) => void;
}

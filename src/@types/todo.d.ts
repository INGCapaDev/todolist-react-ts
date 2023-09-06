import { Todo } from './todos.d.ts';

export interface Props extends Todo {
  onRemoveTodo: (id: string) => void;
}

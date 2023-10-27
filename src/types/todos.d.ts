export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type ListOfTodos = Todo[];

export type TodoToggleProps = Pick<TodoType, 'id' | 'completed'>;
export type TodoTitle = Pick<TodoType, 'title'>;

export interface Props {
  todos: ListOfTodos;
}

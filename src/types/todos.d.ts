export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type ListOfTodos = Todo[];

export type TodoToggleProps = Pick<TodoType, 'id' | 'completed'>;

export interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: string) => void;
  onToggleCompletedTodo: (props: TodoToggleProps) => void;
}

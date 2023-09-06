export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type ListOfTodos = Todo[];

export interface Props {
  todos: ListOfTodos;
}

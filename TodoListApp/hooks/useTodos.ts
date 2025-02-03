import { useState } from 'react';
import { Todo, TodoInput } from '../app/types/todos';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoInput: TodoInput) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      title: todoInput.title,
      completed: todoInput.completed,
      createdAt: new Date()
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  };
}
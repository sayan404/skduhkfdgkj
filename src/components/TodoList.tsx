import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../types';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof localStorage !== 'undefined') {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg md:p-8 transition-colors duration-200">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        My Todo List
      </h1>
      <AddTodoForm onAdd={addTodo} />
      {todos.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
          No tasks yet. Add one above!
        </p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

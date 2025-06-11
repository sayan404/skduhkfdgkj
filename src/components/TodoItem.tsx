import React from 'react';
import { Check, Trash } from 'lucide-react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-3 transition-colors duration-200 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center flex-grow min-w-0">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400 cursor-pointer transition-colors duration-200"
        />
        <span
          className={`ml-4 text-lg flex-grow min-w-0 break-words ${
            todo.completed
              ? 'line-through text-gray-500 dark:text-gray-400'
              : 'text-gray-900 dark:text-gray-100'
          } transition-colors duration-200`}
        >
          {todo.text}
        </span>
        {todo.completed && (
          <Check size={20} className="text-green-500 ml-2 flex-shrink-0" />
        )}
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 p-2 rounded-full text-red-500 hover:bg-red-100 dark:hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200 flex-shrink-0"
        aria-label={`Delete task: ${todo.text}`}
      >
        <Trash size={20} />
      </button>
    </li>
  );
};

export default TodoItem;

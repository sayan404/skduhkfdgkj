import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [newTodoText, setNewTodoText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      onAdd(newTodoText.trim());
      setNewTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-6">
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        className="flex-grow p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
      />
      <button
        type="submit"
        className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 flex items-center justify-center"
        aria-label="Add task"
      >
        <Plus size={24} />
      </button>
    </form>
  );
};

export default AddTodoForm;

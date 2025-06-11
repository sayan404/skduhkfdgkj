import React from 'react';
import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center py-10 px-4 transition-colors duration-200">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      <TodoList />
    </div>
  );
};

export default App;

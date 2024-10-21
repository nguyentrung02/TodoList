import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [newTodoText, setNewTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTodoText, isComplete: false }]);
      setNewTodoText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={todos} onDelete={deleteTodo} onToggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
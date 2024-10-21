import React from 'react';
import './Todo.css';

function TodoList({ todos, onDelete, onToggleComplete }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => onToggleComplete(todo.id)}
          />
          <span className="todo-text">{todo.text}</span>
          <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
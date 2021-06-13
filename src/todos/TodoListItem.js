import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <div className='todo-item-container card'>
      <div className='card-body'>
        <h3>{todo.text}</h3>
        <div className='buttons-container'>
          {todo.isCompleted ? null : (
            <button
              className='completed-button'
              onClick={() => {
                onCompletedPressed(todo.text);
              }}
            >
              Mark as completed
            </button>
          )}

          <button
            className='deleted-button'
            onClick={() => {
              onRemovePressed(todo.text);
            }}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;

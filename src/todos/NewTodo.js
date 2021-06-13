import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';

import './NewTodo.css';

const NewTodo = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='new-todo-form card'>
      <div className='card-body'>
        <input
          type='text'
          className='new-todo-input'
          placeholder='type your new todo here'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className='new-todo-button'
          onClick={() => {
            const isDuplicateText = todos.some(
              (todo) => todo.text === inputValue,
            );
            if (!isDuplicateText) {
              onCreatePressed(inputValue);
              setInputValue('');
            }
          }}
        >
          create
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);

import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, completedTodo } from './actions';

import NewTodo from './NewTodo';
import TodoListItem from './TodoListItem';
import { displayAlert } from './thunks';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
  return (
    <div className='list-wrapper'>
      <NewTodo />
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemovePressed={onRemovePressed}
          onDisplayAlertClicked={onDisplayAlertClicked}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(completedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

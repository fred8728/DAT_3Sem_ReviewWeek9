import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos , deleteTodo, editTodo}) => {
  return (
    <div>
      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todoText}  
          <a href="#/" onClick= {(e)=>e.preventDefault(),deleteTodo(todo.id)}> (delete </a> 
          <a href="#/" onClick= {()=>editTodo(todo.id)}>, edit) </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
}
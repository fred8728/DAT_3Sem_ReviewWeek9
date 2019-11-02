import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewTodo(props) {

  const [todo, setTodo] = useState(props.nextTodo);

  const saveTodo = evt => {
    if (todo.todoText === "") {
      return;
    }
    props.addTodo(todo);
    evt.preventDefault();
  };

  useEffect(() => setTodo({ ...props.nextTodo }), [props.nextTodo]);

  const onChange = evt => {
    const val = evt.target.value;
    todo.todoText = val;
    setTodo({ ...todo });
  };
  const title = todo.id === "" ? "Create new Todo" : "Edit Todo"
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={todo.todoText} onChange={onChange} />
        <br/><br/>
        <button onClick={saveTodo} className="btn btn-info">Save</button>
      </form>
      {todo.id !== "" && <p>Editing todo with</p>}
    </div>
  );
}
export default NewTodo;

NewTodo.propTypes = {
  nextTodo: PropTypes.object,
  addTodo: PropTypes.func
  
}
import React from "react";
import { useTodo } from "../../../TodoContext/TodoContext";

function Item({ todo }) {
  const { todos, setTodos } = useTodo();

  const onchange = id => {
    const clone_todos = [...todos];

    const itemIndex = clone_todos.findIndex(todo => todo.id === id);
    const item = todos[itemIndex];
    item.completed = !item.completed;
    setTodos(clone_todos);
  };

  const onDestroy = id => {
    const clone_todos = [...todos];
    const itemIndex = clone_todos.findIndex(todo => todo.id === id);
    clone_todos.splice(itemIndex, 1);
    setTodos(clone_todos);
  };

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => onchange(todo.id)}
          checked={todo.completed}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => onDestroy(todo.id)}></button>
      </div>
    </li>
  );
}

export default Item;

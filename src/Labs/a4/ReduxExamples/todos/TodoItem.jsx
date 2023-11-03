import React from "react";
import { deleteTodo, setTodo } from "./todosReducer";
import { useDispatch } from "react-redux";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      <button onClick={() => dispatch(setTodo(todo.id))}> Update </button>
      {todo.title}
    </li>
  );
}
export default TodoItem;

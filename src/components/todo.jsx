import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
const todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div> Todo</div>
      {todo.map((todo) => {
        <li key={todo.id}>{todo.text}</li>;
      })}
    </>
  );
};

export default todo;

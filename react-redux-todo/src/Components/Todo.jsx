import React from 'react'
import { useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const { todo } = useSelector((state) => state);

  console.log(todo);
  return (
    <div>
      <TodoInput />
      <TodoList todo={todo}/>
    </div>
  );
};

export default Todo;

import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div>
      <h2>할 일 목록</h2>
      {props.todoList.map((item) => (
        <TodoItem
          removeListHandler={props.removeListHandler}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default TodoList;

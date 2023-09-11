import React, { useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import useTodos from "../../hooks/useTodos";
import Pagination from "../Pagination/Pagination";

const TodoItems = () => {
  const { items, getAllItems, totalPages } = useTodos();

  return (
    <div className="mt-8 flex flex-col gap-y-7 items-center h-full">
      {items.length > 0 &&
        items.map((el, index) => {
          return <TodoItem item={el} key={index} />;
        })}
      <Pagination />
    </div>
  );
};

export default TodoItems;

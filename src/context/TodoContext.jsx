import React from "react";

import axios from "axios";

import { useState, useEffect } from "react";

export const TodoContext = React.createContext(null);

const TodoProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const fetchTodo = (id) => {
    if (id !== null) {
      axios
        .get(`https://localhost:7236/get?id=${id}`)
        .then((response) => response.data)
        .then((data) => setItem(data.data));
    }
  };

  const getAllItems = (perPage = 3, page = 1) => {
    axios
      .get(`https://localhost:7236/getAll?perPage=${perPage}&page=${page}`)
      .then((response) => response.data)
      .then((data) => {
        setItems(data.todoItems);
        setTotalPages(data.totalPages);
        setCurrentPage(page);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!items.length) {
      getAllItems();
    }
  }, [items]);
  return (
    <TodoContext.Provider
      value={{
        getAllItems,
        items,
        setItems,
        setItem,
        item,
        fetchTodo,
        currentPage,
        setCurrentPage,
        setTotalPages,
        totalPages,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import dayjs from "dayjs";

import IconDelete from "../components/Icons/IconDelete";
import IconEdit from "../components/Icons/IconEdit";
import axios from "axios";

import useTodos from "../hooks/useTodos";

import { useNavigate } from "react-router-dom";

const SingleItem = () => {
  const navigate = useNavigate();

  const { item, fetchTodo, setItem, getAllItems } = useTodos();

  const params = useParams();

  const todoId = params.todoId ?? null;

  const deleteItem = () => {
    axios
      .delete(`https://localhost:7236/api/TodoItem?id=${item.id}`)
      .then((response) => response.data)
      .catch((err) => console.log(err))
      .finally(() => {
        alert("Task removed successfully!");
        getAllItems();
        navigate("/");
      });
  };

  const editItem = () => {
    axios
      .post("https://localhost:7236/edit", item)
      .then((response) => response.data)
      .then((data) => setItem(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodo(todoId);
  }, [todoId]);

  return (
    <>
      {item && (
        <div className="flex justify-center mt-8">
          <div className="flex justify-center p-7 gap-x-5 border-gray-300 border w-1/3 rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className="mt-10">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl">{item.id}. task</h2>
              </div>
              <h1 className="text-lg text-gray-700 text-justify">
                {item.content}
              </h1>

              <div className="flex gap-x-2 items-center mt-5 text-gray-400 text-sm justify-between">
                <h4>
                  Created: {dayjs(item.createdAt).format("DD/MM/YYYY hh:mm")}
                </h4>
                <h4>
                  Updated: {dayjs(item.updatedAt).format("DD/MM/YYYY hh:mm")}
                </h4>
              </div>
            </div>
            <div className="w-1/7 flex flex-col gap-y-4">
              <div
                onClick={() => deleteItem()}
                className="gap-x-2 rounded bg-gray-100 border border-gray-400 cursor-pointer hover:bg-gray-200 transition-colors duration-100 ease-in px-1 py-2 flex justify-center items-center"
              >
                <h5 className="text-md">Delete</h5>
                <span className="fill-gray-700">
                  <IconDelete width={18} />
                </span>
              </div>
              <div
                onClick={() => editItem()}
                className="gap-x-2 rounded bg-gray-100 border border-gray-400 cursor-pointer hover:bg-gray-200 transition-colors duration-100 ease-in px-1 py-2 flex justify-center items-center"
              >
                <h5 className="text-md">Change status</h5>
                <span className="fill-gray-700">
                  <IconEdit width={18} />
                </span>
              </div>
              <div className="flex gap-x-2 items-center justify-end mt-4  ">
                <div
                  className={`w-3 h-3 rounded-full ${
                    item.completed ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <h4>{item.completed ? "Completed" : "Uncompleted"}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleItem;

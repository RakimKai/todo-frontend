import React from "react";
import dayjs from "dayjs";

const TodoItem = ({ item }) => {
  const openItemId = () => {
    window.open(`${window.location.href}todo/${item.id}`);
  };
  return (
    <div
      onClick={() => openItemId()}
      className="cursor-pointer p-8 border-gray-300 border w-1/3 rounded shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] transition-shadow duration-100 ease-in-out"
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl">{item.id}. task</h2>
        <div className="flex gap-x-2 items-center justify-end mt-4">
          <div
            className={`w-3 h-3 rounded-full bg-${
              item.completed ? "green" : "red"
            }-500`}
          ></div>
          <h4>{item.completed ? "Completed" : "Uncompleted"}</h4>
        </div>
      </div>
      <div className="w-full text-justify">
        <p>{item.content}</p>
      </div>
      <div className="flex gap-x-2 items-center mt-4 text-gray-400 text-sm justify-between">
        <h4>Created: {dayjs(item.createdAt).format("DD/MM/YYYY hh:mm")}</h4>
        <h4>Updated: {dayjs(item.updatedAt).format("DD/MM/YYYY hh:mm")}</h4>
      </div>
    </div>
  );
};

export default TodoItem;

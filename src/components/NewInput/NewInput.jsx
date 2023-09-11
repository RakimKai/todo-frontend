import React, { useRef } from "react";
import Button from "../Button/Button";
import axios from "axios";
import useTodos from "../../hooks/useTodos";

const NewInput = () => {
  const inputRef = useRef(null);

  const { getAllItems } = useTodos();

  const addNewItem = () => {
    const newItem = {
      content: inputRef.current.value,
      completed: false,
    };

    axios
      .post("https://localhost:7236/create", newItem)
      .then((response) => response.data)
      .catch((err) => console.log(err))
      .finally(() => {
        inputRef.current.value = "";
        alert("Successfully added a new task!");
        getAllItems();
      });
  };

  return (
    <div className="w-1/3 flex gap-x-2">
      <input
        ref={inputRef}
        onChange={() => undefined}
        type="text"
        className="outline-none rounded-md w-full p-2"
      ></input>
      <Button onClick={() => addNewItem()}>Add a task</Button>
    </div>
  );
};

export default NewInput;

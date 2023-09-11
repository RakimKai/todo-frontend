import React, { useEffect, useState } from "react";
import TodoItems from "./components/TodoItems/TodoItems";

const App = () => {
  return (
    <div className="h-full mb-7">
      <TodoItems />
    </div>
  );
};

export default App;

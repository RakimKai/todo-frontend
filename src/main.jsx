import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleItem from "./pages/SingleItem.jsx";
import TodoProvider from "./context/TodoContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/todo/:todoId",
    element: (
      <Layout>
        <SingleItem />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>
);

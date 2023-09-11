import React from "react";
import NewInput from "../NewInput/NewInput";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  const params = useParams();
  return (
    <nav className="w-full flex flex-col gap-y-4 justify-center items-center p-6 min-h-[30vh] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <Link to={"/"} className="font-semibold text-4xl text-gray-100 mb-8">
        To Do list
      </Link>
      {!params.todoId && <NewInput />}
    </nav>
  );
};

export default Navbar;

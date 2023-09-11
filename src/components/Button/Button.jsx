import React from "react";

const Button = (props) => {
  return (
    <button
      className="px-5 py-3 bg-teal-300 w-1/3 text-gray-900 rounded hover:bg-teal-200 duration-100 ease-in transition-all"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;

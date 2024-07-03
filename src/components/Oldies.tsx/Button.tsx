import React from "react";

const Button = ({
  name,
  onClick,
  active,
}: {
  name: string;
  onClick: () => void;
  active: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-black px-4 py-3 border-black border-2 rounded-full montserrat-black hover:bg-black hover:text-white active:bg-black active:text-white ${
        active ? "bg-black text-white" : ""
      }`}
    >
      {name}
    </button>
  );
};

export default Button;

import React from "react";

type Props = {
  text?: string;
  className?: string;
};

const Button = ({ text = "default", className }: Props) => {
  return (
    <button
      className={`w-full py-2 px-4 bg-slate-700 text-white rounded-md font-semibold ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

import React from "react";

type Props = {
  label?: string;
  icon?: React.ReactNode;
};

const FormInput = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      {props.label && <p className="text-xl font-bold">{props.label}</p>}
      <div className="flex relative">
        <input
          className="w-full py-2 px-4 border border-black rounded-md"
          type="text"
        />

        {props.icon && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {props.icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;

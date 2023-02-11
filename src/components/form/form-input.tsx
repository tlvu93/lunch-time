import React from "react";

type Props = {
  name: string;
  label?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute | undefined;
};

const FormInput: React.FC<Props> = ({ name, label, value, onChange, icon }) => {
  return (
    <div className="flex flex-col gap-2 py-2 w-full max-w-3xl">
      {label ? (
        <label htmlFor={name} className="text-xl font-bold">
          {label}
        </label>
      ) : null}
      <div className="flex relative">
        <input
          name={name}
          id={name}
          type="text"
          className="w-full py-2 px-4 border border-black rounded-md"
          value={value}
          onChange={onChange}
        />

        {icon && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;

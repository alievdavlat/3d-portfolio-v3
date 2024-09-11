import React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({
  type,
  name,
  value,
  onChange,
  disabled,
  placeholder,
  className,
  label
}) => {
  return (
 <div className="flex flex-col gap-2 w-full">
 <label className="text-white text-sm mb-1" htmlFor={name}>{label}</label>
 <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      className={twMerge(`
        bg-transparent
        border
        border-blue-800
        focus:border-blue-600
        active:border-blue-600
        focus:outline-none
        outline-none
        p-2

        `, className)}
    />
 </div>
  );
};

export default Input;

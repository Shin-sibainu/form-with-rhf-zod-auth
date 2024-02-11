import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  register: UseFormRegister<any>;
  placeholder?: string;
}

const InputField = ({
  name,
  label,
  type,
  placeholder,
  register,
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-gray-700 text-sm font-bold mb-1 block mt-4"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...register(name, { required: "この項目は必須です。" })}
        placeholder={placeholder}
        className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none"
      />
    </div>
  );
};

export default InputField;

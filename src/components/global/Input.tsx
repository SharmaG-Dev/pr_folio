// components/GlobalInput.tsx

import clsx from "clsx";
import React, { ChangeEvent, FormEvent } from "react";

interface GlobalInputProps {
  outerClasName?: string;
  leftIconClassName?: string;
  rightIconClassName?: string;
  inputClassName?: string;
  onInput?: (e: FormEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string | null;
}

const Input: React.FC<GlobalInputProps> = ({
  outerClasName,
  leftIconClassName,
  rightIconClassName,
  inputClassName,
  type,
  name,
  value,
  placeholder,
  onChange,
  onInput,
  leftIcon,
  rightIcon,
  error,
}) => {
  return (
    <>
      <div className={clsx("relative", outerClasName)}>
        {leftIcon && (
          <div
            className={clsx(
              "absolute inset-y-0 left-0 flex items-center pl-3",
              leftIconClassName
            )}
          >
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onInput={onInput}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx("w-full", inputClassName)}
        />
        {rightIcon && (
          <div
            className={clsx(
              "absolute inset-y-0 right-0 flex items-center pr-3",
              rightIconClassName
            )}
          >
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};

export default Input;
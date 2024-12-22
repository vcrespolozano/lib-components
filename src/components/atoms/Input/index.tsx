import React, { useState } from "react";
import "./Input.scss";

export interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  errorMsg?: string;
  className?: string;
  name: string;
  id?: string;
  type?: HTMLInputElement["type"];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholderLabel?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  value = "",
  placeholder,
  errorMsg,
  className,
  name,
  id,
  type = "text",
  onChange,
  placeholderLabel = false,
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const getPlaceholderBehavior = (): string => {
    let returnClass = "";

    if (placeholderLabel && !label && (focused || value)) {
      returnClass = "placeholder-top";
    } else if (value && (label || !placeholderLabel)) {
      returnClass = "placeholder-hidden";
    }
    return returnClass;
  };

  return (
    <div className={`input__container ${className || ""}`}>
      {label && !placeholderLabel && (
        <label className="input__label">{label}</label>
      )}
      <div className={`input__box ${label ? "withLabel" : ""}`}>
        {placeholder && (
          <span className={`input__placeholder ${getPlaceholderBehavior()}`}>
            {placeholder}
          </span>
        )}
        <input
          name={name}
          id={id || name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={errorMsg ? "withError" : ""}
        />
      </div>
      {errorMsg && <span className="input__error">{errorMsg}</span>}
    </div>
  );
};

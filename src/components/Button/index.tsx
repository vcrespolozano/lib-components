import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  loading = false,
  disabled = false,
  className,
}) => {
  return (
    <button
      className={`button ${className || ""} ${
        loading || disabled ? "buttonDisabled" : ""
      }`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? <span className="buttonSpinner" /> : label}
    </button>
  );
};

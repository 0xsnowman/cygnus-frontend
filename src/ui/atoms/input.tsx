import React from "react";

interface InputProps {
  placeholder?: string;
  width?: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  width = "auto",
  height = "auto",
}) => {
  return (
    <input
      style={{ width: width, height: height }}
      className="atom-input"
      placeholder={placeholder}
    />
  );
};

export default Input;

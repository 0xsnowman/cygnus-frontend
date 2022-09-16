import React from "react";

interface InputProps {
  placeholder?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  width = "auto",
  height = "auto",
  fontSize = "12px",
}) => {
  return (
    <input
      style={{ width: width, height: height, fontSize: fontSize }}
      className="atom-input"
      placeholder={placeholder}
    />
  );
};

export default Input;

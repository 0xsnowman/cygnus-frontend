import React from "react";

import { Box, Text } from "../atoms";

// import Dimension from "../../config/dimension";

interface IButtonProps {
  children: string;
  backgroundColor?: string;
  color?: string;
  padding?: number;
  width?: string;
  height?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor,
  color,
  padding = 15,
  width = "auto",
  height = "auto",
  className = "",
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      className={["molecule-button", className].join(" ")}
      backgroundColor={backgroundColor}
      padding={padding}
      borderRadius={5}
      width={width}
      height={height}
    >
      <Text fontSize="SMALL" color={color} center>
        {children}
      </Text>
    </Box>
  );
};

export default Button;

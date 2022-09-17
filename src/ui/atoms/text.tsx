import React from "react";

import DIMENSION from "../../config/dimension";

interface ITextProps {
  children: string;
  fontSize?: "EXTRA_LARGE" | "LARGE" | "MEDIUM" | "SMALL" | "EXTRA_SMALL";
  fontWeight?: "BOLDER" | "BOLD" | "NORMAL" | "SICK";
  color?: string;
  center?: boolean;
  lineHeight?: number;
}

const Text: React.FC<ITextProps> = ({
  children,
  fontSize = "SMALL",
  fontWeight = "NORMAL",
  center,
  color = "white",
  lineHeight = 1,
}) => {
  return (
    <div
      style={{
        fontSize: DIMENSION.FONT_SIZE[fontSize],
        fontWeight: DIMENSION.FONT_WEIGHT[fontWeight],
        textAlign: center ? "center" : "initial",
        color: color,
        lineHeight: lineHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Text;

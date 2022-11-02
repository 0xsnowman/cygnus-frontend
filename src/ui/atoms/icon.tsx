import React from "react";

import DIMENSION from "../../config/dimension";

interface IIconProps {
  src?: string;
  size?: "LARGE" | "MEDIUM" | "SMALL" | "TOKEN" | "LINK" | "EXTRA_LARGE" | "SEMI_MEDIUM";
  border?: "NONE" | "SMALL" | "MEDIUM" | "LARGE";
  borderRadius?: string;
}

const Icon: React.FC<IIconProps> = ({ src, size = "MEDIUM", border = "NONE", borderRadius = "50%" }) => {
  return (
    <img
      className="atom-icon"
      src={src}
      style={{
        width: DIMENSION.ICON[size],
        height: DIMENSION.ICON[size],
        border: `${DIMENSION.BORDER[border]}px solid #101418`,
        borderRadius: borderRadius,
        backgroundColor: "#101418"
      }}
      alt="icon"
    />
  );
};

export default Icon;

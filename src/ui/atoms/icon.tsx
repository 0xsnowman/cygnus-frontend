import React from "react";

import DIMENSION from "../../config/dimension";

interface IIconProps {
  src?: string;
  size?: "LARGE" | "MEDIUM" | "SMALL" | "TOKEN" | "LINK" | "EXTRA_LARGE";
  border?: "NONE" | "SMALL" | "MEDIUM" | "LARGE";
}

const Icon: React.FC<IIconProps> = ({ src, size = "MEDIUM", border = "NONE" }) => {
  return (
    <img
      className="atom-icon"
      src={src}
      style={{
        width: DIMENSION.ICON[size],
        height: DIMENSION.ICON[size],
        border: `${DIMENSION.BORDER[border]}px solid #101418`,
        borderRadius: '50%'
      }}
      alt="icon"
    />
  );
};

export default Icon;

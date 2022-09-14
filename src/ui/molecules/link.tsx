import React from "react";

import { Box, Icon, Text } from "../atoms";

// import Dimension from "../../config/dimension";

interface ILinkProps {
  children?: string;
  iconSrc?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Link: React.FC<ILinkProps> = ({
  children = "",
  iconSrc = "",
  onClick,
}) => {
  return (
    <Box onClick={onClick} color="#FFFFFF70" className="molecule-link">
      <Text fontSize="SMALL">{children}</Text>
      {iconSrc !== "" ? <Icon src={iconSrc} size="LINK" /> : <></>}
    </Box>
  );
};

export default Link;

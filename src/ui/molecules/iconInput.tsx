import React from "react";

import { Box, Icon, Input } from "../atoms";

interface IIconInputProps {
    icon: string;
}

const IconInput:React.FC<IIconInputProps> = ({icon}) => {
  return (
    <Box>
      <Icon src={icon} />
      <Input />
    </Box>
  );
};

export default IconInput;

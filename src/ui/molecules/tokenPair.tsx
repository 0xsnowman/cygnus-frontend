import React from "react";

import { Box, Flex, Icon } from "../atoms";

interface ITokenPairProps {
  token1: string;
  token2: string;
}

const TokenPair: React.FC<ITokenPairProps> = ({ token1, token2 }) => {
  return (
    <Flex justifyContent="center" backgroundColor="transparent">
      <Box>
        <Icon size="TOKEN" src={token1} border="MEDIUM" />
      </Box>
      <Box marginLeft="-10px">
        <Icon size="TOKEN" src={token2} border="MEDIUM" />
      </Box>
    </Flex>
  );
};

export default TokenPair;

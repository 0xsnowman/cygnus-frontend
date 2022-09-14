import React from "react";

import { Box, Flex, Grid, GridItem, Text, Process } from "../atoms";

import coinPng from "../../assets/icons/coin.png";

// import { Icons } from "../../assets";

import Dimension from "../../config/dimension";
import TokenPair from "../molecules/tokenPair";
import { useNavigate } from "react-router-dom";

const LendingPoolCard = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="organism-lendingpoolcard"
      borderRadius={Dimension.BORDER_RADIUS.LARGE}
      borderWidth={2}
      borderStyle="solid"
      position="relative"
      onClick={() => {navigate("/1")}}
    >
      <Box backgroundColor="#212529" padding={Dimension.PADDING.MEDIUM}>
        <Text center fontSize="MEDIUM">
          TRADER JOE
        </Text>
        <Box padding={Dimension.PADDING.MEDIUM} />
      </Box>
      <Box backgroundColor="#101418" padding={Dimension.PADDING.MEDIUM}>
        <Box padding={Dimension.PADDING.MEDIUM} />
        <Flex flexDirection="column" gap={Dimension.GAP.MEDIUM}>
          <Text center fontSize="MEDIUM" fontWeight="BOLD">
            AVAX-ETH
          </Text>
          <Grid gap={Dimension.GAP.LARGE}>
            <GridItem columns={6}>
              <Flex flexDirection="column">
                <Text color="gray">Borrow APR</Text>
                <Text fontSize="MEDIUM">12.45%</Text>
              </Flex>
            </GridItem>
            <GridItem columns={6}>
              <Flex flexDirection="column">
                <Text color="gray">Lend APR</Text>
                <Text fontSize="MEDIUM">12.45%</Text>
              </Flex>
            </GridItem>
          </Grid>
          <Flex flexDirection="column">
            <Text color="gray">Current Price</Text>
            <Text fontSize="MEDIUM">12.45$</Text>
          </Flex>
          <Flex flexDirection="column">
            <Flex flexDirection="row" justifyContent="space-between">
              <Text color="gray">Utilization</Text>
              <Text>40%</Text>
            </Flex>
            <Process value={0.4} />
          </Flex>
        </Flex>
      </Box>
      <Box position="absolute" width="100%" height="55px" top={65}>
        <Flex justifyContent="center">
          <TokenPair token1={coinPng} token2={coinPng} />
        </Flex>
      </Box>
    </Box>
  );
};

export default LendingPoolCard;

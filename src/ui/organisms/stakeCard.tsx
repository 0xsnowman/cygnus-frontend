import React from "react";

import { Box, Flex, Grid, GridItem, Text, Icon } from "../atoms";

import coinPng from "../../assets/icons/coin.png";
import logoPng from "../../assets/icons/logo.png";

// import { Icons } from "../../assets";

import { Button } from "../molecules";

const StakeCard = () => {
  return (
    <Flex flexDirection="row" justifyContent="center">
      <Box
        className="organism-stakecard"
        borderRadius={10}
        backgroundColor="#242424"
        paddingHorizontal={50}
        paddingVertical={30}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={10}
        >
          <Box padding={30}>
            <Icon src={logoPng} size="TOKEN" />
          </Box>
          <Text color="#888">Staked TVL</Text>
          <Text fontSize="MEDIUM">$1, 686, 598</Text>
          <Box paddingVertical={20}>
            <Flex flexDirection="column" alignItems="center" gap={10}>
              <Text color="#888">APR Estimate</Text>
              <Text>3.46%</Text>
            </Flex>
          </Box>
          <Flex justifyContent="space-between" alignItems="center" gap={20}>
            <Flex flexDirection="column" alignItems="center" flex={1} gap={10}>
              <Icon src={coinPng} size="LINK" />
              <Flex justifyContent="center">
                <Text>1</Text>
              </Flex>
              <Text color="#888">xCYG</Text>
            </Flex>
            <Text>{`=`}</Text>
            <Flex flexDirection="column" alignItems="center" flex={1} gap={10}>
              <Icon src={coinPng} size="LINK" />
              <Box position="relative">
                <Text>1.295676</Text>
              </Box>
              <Text color="#888">CYG</Text>
            </Flex>
          </Flex>
          <Box padding={10}></Box>
          <Box
            borderColor="#888"
            borderWidth={1}
            backgroundColor="#141414"
            borderRadius={10}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              gap={20}
            >
              <Box paddingHorizontal={60} paddingVertical={20}>
                <Flex gap={30} flexDirection="column">
                  <Flex flexDirection="column" alignItems="center" gap={10}>
                    <Text color="#888">xCygnus Balance</Text>
                    <Flex gap={10} alignItems="center">
                      <Text fontSize="MEDIUM">0</Text>
                      <Icon src={coinPng} size="LARGE" />
                    </Flex>
                  </Flex>
                  <Flex flexDirection="column" alignItems="center" gap={10}>
                    <Text color="#888">Claimable xCygnus</Text>
                    <Flex gap={10} alignItems="center">
                      <Text fontSize="MEDIUM">0</Text>
                      <Icon src={coinPng} size="LARGE" />
                    </Flex>
                    <Text fontSize="MEDIUM">($0)</Text>
                  </Flex>
                  <Grid gap={20}>
                    <GridItem columns={6}>
                      <Button backgroundColor="#444">Stake</Button>
                    </GridItem>
                    <GridItem columns={6}>
                      <Button backgroundColor="#444">Unstake</Button>
                    </GridItem>
                  </Grid>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default StakeCard;

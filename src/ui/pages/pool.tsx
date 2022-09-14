import React from "react";

import { Box, Container, Flex, Icon, Text } from "../atoms";

import coinPng from "../../assets/icons/coin.png";
import logoPng from "../../assets/icons/logo.png";
import TokenPair from "../molecules/tokenPair";
import { Page } from "../molecules";
import { LendingPoolView } from "../organisms";

const Pool = () => {
  return (
    <Page>
      <Container>
        <Box className="page-pool">
          <Flex flexDirection="column" gap={15} alignItems="center">
            <Box>
              <Text fontSize="MEDIUM">Spirit Boosted</Text>
            </Box>
            <Box>
              <Text>ETH - AVAX</Text>
            </Box>
            <Flex gap={10} alignItems="center">
              <Text color="#BBB">Deposited</Text>
              <Icon src={logoPng} size="LINK" />
              <Text color="#BBB">LP</Text>
            </Flex>
            <Text>$555,954</Text>
            <Box position="relative" width="56%">
              <Box position="absolute" width="99.4%" top={25}>
                <Flex justifyContent="space-between" gap={120}>
                  <Box
                    borderTop="1px dotted white"
                    borderLeft="1px dotted white"
                    width="40%"
                    height="20px"
                  />
                  <Box
                    borderTop="1px dotted white"
                    borderRight="1px dotted white"
                    width="40%"
                    height="20px"
                  />
                </Flex>
              </Box>
              <TokenPair token1={coinPng} token2={coinPng} />
            </Box>
            <Flex flexDirection="column" gap={20} paddingVertical={30} width="60%">
              <Flex justifyContent="space-between">
                <Text>$306k</Text>
                <Text color="grey">Total Supply</Text>
                <Text>$800k</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>$306k</Text>
                <Text color="grey">Total Borrowed</Text>
                <Text>$800k</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>$306k</Text>
                <Text color="grey">Total Lend</Text>
                <Text>$800k</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>$306k</Text>
                <Text color="grey">Total APR</Text>
                <Text>$800k</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>$306k</Text>
                <Text color="grey">Borrowed APR</Text>
                <Text>$800k</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection="column">
            <LendingPoolView />
          </Flex>
        </Box>
      </Container>
    </Page>
  );
};

export default Pool;

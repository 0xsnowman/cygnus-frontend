import React from "react";

import { Box, Container, Flex, Icon, Text, Process } from "../atoms";
import { Button } from "../molecules";

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
          <Flex flexDirection="column" gap={20}>
            <Flex alignItems="center" justifyContent="space-around" gap={20}>
              <Flex flexDirection="column" gap={20}>
                <Flex gap={10}>
                  <Button backgroundColor="#073549">COVERED CALL</Button>
                  <Button backgroundColor="#073549">V2</Button>
                </Flex>
                <Text fontSize="EXTRA_LARGE">ETH-AVAX-C</Text>
                <Flex justifyContent="space-between">
                  <Text color="#999">
                    Current Vault Deposits
                  </Text>
                  <Text>
                    13.07K AVAX
                  </Text>
                </Flex>
                <Process value={0.4} height={15} borderRadius={10} />
                <Flex justifyContent="space-between">
                  <Text color="#999">
                    Max Vault Capacity
                  </Text>
                  <Text>
                    200K AVAX
                  </Text>
                </Flex>
              </Flex>
              <Flex alignItems="center">
                <Icon src={logoPng} size="EXTRA_LARGE" />                
              </Flex>
            </Flex>
            <Flex>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Page>
  );
};

export default Pool;

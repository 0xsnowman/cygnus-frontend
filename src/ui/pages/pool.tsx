import React from "react";

import { Box, Container, Flex, Icon, Text, Process } from "../atoms";
import { Button } from "../molecules";

import logoPng from "../../assets/icons/logo.png";
import { Page } from "../molecules";
import { DepositTab } from "../organisms";

const Pool = () => {
  return (
    <Page>
      <Container>
        <Box className="page-pool">
          <Flex flexDirection="column" gap={20}>
            <Flex alignItems="center" justifyContent="space-around" gap={20}>
              <Flex flexDirection="column" flex={1} gap={20}>
                <Flex gap={10}>
                  <Button backgroundColor="#073549">COVERED CALL</Button>
                  <Button backgroundColor="#073549">V2</Button>
                </Flex>
                <Text fontSize="EXTRA_LARGE">ETH-AVAX-C</Text>
                <Flex justifyContent="space-between">
                  <Text color="#999">Current Vault Deposits</Text>
                  <Text>13.07K AVAX</Text>
                </Flex>
                <Process value={0.4} height={15} borderRadius={10} />
                <Flex justifyContent="space-between">
                  <Text color="#999">Max Vault Capacity</Text>
                  <Text>200K AVAX</Text>
                </Flex>
              </Flex>
              <Flex alignItems="center" justifyContent="center" flex={1}>
                <Icon src={logoPng} size="EXTRA_LARGE" />
              </Flex>
            </Flex>
            <Flex justifyContent="space-around">
              <Flex flexDirection="column" flex={1} gap={20}>
                <Text>VAULT STRATEGY</Text>
                <Text color="#999">
                  The vault earns yield on its sAVAX deposits by running a
                  weekly automated sAVAX covered call strategy where it stakes
                  its sAVAX deposits in Benqi and then uses its sAVAX to
                  collateralize weekly out-of-money sAVAX call options. The
                  yield earned from both the covered call strategy and the sAVAX
                  staking rewards are reinvested weekly, effectively compounding
                  the yields for depositors over time.
                </Text>
              </Flex>
              <Flex flex={1} justifyContent="center" alignItems="center">
                <Box padding={30}>
                  <DepositTab />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Page>
  );
};

export default Pool;

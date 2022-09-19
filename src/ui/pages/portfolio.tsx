import React, { useState } from "react";

import { Box, Container, Flex, Text, Grid, GridItem } from "../atoms";

import { Page } from "../molecules";
import { LendingPoolCard, LendingPoolTab } from "../organisms";

import Dimension from "../../config/dimension";

const Portfolio = () => {
  const [availablePositions, setAvailablePositions] = useState(["abc"]);
  return (
    <Page>
      <Container>
        <Box className="page-portfolio">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={20}
          >
            <Box width="100%" backgroundColor="#072426" padding={30}>
              <Flex justifyContent="center" alignItems="center" gap={30}>
                <Text color="#14B6A5">
                  The liquidity mining program is live. Stake your rTokens to
                  earn CYG rewards.
                </Text>
                <Box borderRadius={40} border="1px solid #14B6A5" padding={15}>
                  <Text color="#14B6A5">Start Staking</Text>
                </Box>
              </Flex>
            </Box>
            <Box width="50%">
              <Box paddingVertical={20}>
                <Text>PORTFOLIO SUMMARY</Text>
              </Box>
              <Box
                paddingVertical={20}
                paddingHorizontal={20}
                backgroundColor="#1B1B21"
                borderRadius={20}
              >
                <Flex flexDirection="column" gap={5}>
                  <Box paddingVertical={10}>
                    <Text color="#999">Balances</Text>
                  </Box>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    gap={20}
                  >
                    <Flex
                      justifyContent="space-around"
                      alignItems="center"
                      gap={20}
                    >
                      <Text color="white" fontSize="LARGE">
                        $0.00
                      </Text>
                      <Text color="#999" fontSize="EXTRA_SMALL">
                        USD
                      </Text>
                    </Flex>
                    <Flex justifyContent="space-between" gap={10}>
                      <Text color="white" fontSize="EXTRA_SMALL">
                        1W
                      </Text>
                      <Text color="#999" fontSize="EXTRA_SMALL">
                        1M
                      </Text>
                      <Text color="#999" fontSize="EXTRA_SMALL">
                        ALL
                      </Text>
                    </Flex>
                  </Flex>
                  <Box>{/* Chart part */}</Box>
                  <Box paddingVertical={50}></Box>
                  <Box>
                    <Flex justifyContent="space-between">
                      <Flex flexDirection="column" gap={5}>
                        <Text fontSize="EXTRA_SMALL" color="#999">
                          Yield Earned
                        </Text>
                        <Flex gap={10}>
                          <Text color="#999">+$0.00</Text>
                          <Text color="#999">USD</Text>
                        </Flex>
                      </Flex>
                      <Flex flexDirection="column" gap={5}>
                        <Text color="#999">ROI</Text>
                        <Text color="#999">+0.00%</Text>
                      </Flex>
                      <Flex flexDirection="column" gap={5}>
                        <Text color="#999">$CYG Balance</Text>
                        <Text color="#999">0.00</Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box width="50%" overflow="visible">
              <Box paddingVertical={20}>
                <Text>POSITIONS</Text>
              </Box>
              {availablePositions.length > 0 ? (
                <Box paddingVertical={20} overflow="visible">
                  <Grid gap={Dimension.GAP.LARGE}>
                    <GridItem columns={6}>
                      <LendingPoolCard />
                    </GridItem>
                    <GridItem columns={6}>
                      <LendingPoolCard />
                    </GridItem>
                    <GridItem columns={6}>
                      <LendingPoolCard />
                    </GridItem>
                    <GridItem columns={6}>
                      <LendingPoolCard />
                    </GridItem>
                  </Grid>
                </Box>
              ) : (
                <Box>
                  <Text color="#999">
                    You currently have no outstanding positions.
                  </Text>
                </Box>
              )}
            </Box>
            <Box width="50%">
              <Box paddingVertical={20}>
                <Text>TRANSACTIONS</Text>
              </Box>
              <Box>
                <Text color="#999">You currently have no transactions.</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Page>
  );
};

export default Portfolio;

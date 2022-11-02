import React, { useState } from "react";

import { Container, Flex, Grid, GridItem, Text, Box } from "../atoms";
import { Button, Page } from "../molecules";
import { LendingPoolCard, LendingPoolTab } from "../organisms";

import Dimension from "../../config/dimension";

import { ethers } from "ethers";
import { ALL_LENDING_POOLS, POOL_LIST } from "../../config/contracts";

// Avax Provider
const url = "https://api.avax.network/ext/bc/C/rpc";
const provider = new ethers.providers.JsonRpcProvider(url);

const Home = () => {
  const [poolView, setPoolView] = useState<boolean>(false);

  return (
    <Page>
      <Container>
        <Flex flexDirection="column" gap={Dimension.GAP.LARGE}>
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            gap={10}
          >
            <Flex justifyContent="space-between" width="100%">
              <Flex alignItems="center">
                <Box>
                  <Text fontSize="MEDIUM" color="whitesmoke">
                    Lending Pools
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Button>Deposit Asset</Button>
                <Button>Sort By</Button>
                <Button
                  onClick={() => {
                    setPoolView(!poolView);
                  }}
                >
                  Change View
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Grid>
            {[0, 1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <Box key={index} paddingVertical={30} paddingHorizontal={7.5}>
                  <Box width="25px"></Box>
                </Box>
              );
            })}
          </Grid>
          {poolView ? (
            <Grid gap={Dimension.GAP.LARGE}>

            {POOL_LIST.map((item, index) => { 
              return (
              <GridItem key={index} columns={3}>
                <LendingPoolCard key={index} provider={provider} shuttle={item} />
              </GridItem>
              )
            })}

            </Grid>
          ) : (
            <Flex flexDirection="column" gap={10}>
              <LendingPoolTab />
              <LendingPoolTab />
              <LendingPoolTab />
              <LendingPoolTab />
            </Flex>
          )}
        </Flex>
      </Container>
    </Page>
  );
};

{
  /*
   */
}
export default Home;

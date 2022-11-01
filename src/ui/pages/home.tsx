import React, { useState } from "react";

import { Container, Flex, Grid, GridItem, Text, Box } from "../atoms";
import { Button, Page } from "../molecules";
import { LendingPoolCard, LendingPoolTab } from "../organisms";


import Dimension from "../../config/dimension";

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
          {poolView ? (
            <Grid gap={Dimension.GAP.LARGE}>
              <GridItem columns={3}>
                <LendingPoolCard />
              </GridItem>
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

{/*
  */}
export default Home;

import React, { useState } from "react";

import { Container, Flex, Grid, GridItem, Text } from "../atoms";
import { Button, Page } from "../molecules";
import { LendingPoolCard, LendingPoolTab } from "../organisms";

import Dimension from "../../config/dimension";

const Home = () => {
  const [poolView, setPoolView] = useState<boolean>(false);

  return (
    <Page>
      <Container>
        <Flex flexDirection="column" gap={Dimension.GAP.LARGE}>
          <Flex flexDirection="column" justifyContent="flex-end" alignItems="center" gap={30}>
            <Text center fontSize="EXTRA_LARGE" fontWeight="BOLD">
              Lending Pool
            </Text>
            <Flex>
              <Button>Strategy</Button>
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
          {poolView ? (
            <Grid gap={Dimension.GAP.LARGE}>
              <GridItem columns={3}>
                <LendingPoolCard />
              </GridItem>
              <GridItem columns={3}>
                <LendingPoolCard />
              </GridItem>
              <GridItem columns={3}>
                <LendingPoolCard />
              </GridItem>
              <GridItem columns={3}>
                <LendingPoolCard />
              </GridItem>
              <GridItem columns={3}>
                <LendingPoolCard />
              </GridItem>
              <GridItem columns={3}>
                <LendingPoolCard />
              </GridItem>
              <GridItem columns={3}>
                <LendingPoolCard />
              </GridItem>
              <GridItem columns={3}>
                <LendingPoolCard />
              </GridItem>
            </Grid>
          ) : (
            <Flex flexDirection="column" gap={30}>
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

export default Home;

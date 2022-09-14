import React from "react";

import { Box, Container, Flex, Icon, Text } from "../atoms";

import { Page } from "../molecules";
import StakeCard from "../organisms/stakeCard";

import logoPng from "../../assets/icons/logo.png";

const Stake = () => {
  return (
    <Page>
      <Container>
        <Box className="page-stake">
          <Flex flexDirection="column" alignItems="center" gap={20}>
            <Icon src={logoPng} size="EXTRA_LARGE" />
            <Text fontSize="LARGE">xCygnus</Text>
            <Text color="#888">Staking & Governance</Text>
            <Box paddingVertical={20}>
              <Text>
                The gateway for on-chain governance and fee distribution of the
                Tarot Protocol
              </Text>
            </Box>
            <StakeCard />
          </Flex>
        </Box>
      </Container>
    </Page>
  );
};

export default Stake;

import React from "react";

import { Box, Flex, Grid, GridItem, Text, Process } from "../atoms";

import coinPng from "../../assets/icons/coin.png";

// import { Icons } from "../../assets";

import Dimension from "../../config/dimension";
import TokenPair from "../molecules/tokenPair";
import { useNavigate } from "react-router-dom";
import avaxLogo from "../../assets/icons/avax-logo.png";
import btcLogo from "../../assets/icons/btc-logo.png";
import avaxLogoT from "../../assets/icons/transparent-avax.png";

const LendingPoolCard = () => {
  const navigate = useNavigate();
  return (
    <Box
      border="3px solid #030309"
      className="organism-lendingpoolcard"
      borderRadius={Dimension.BORDER_RADIUS.LARGE}
      position="relative"
      onClick={() => {
        navigate("/1");
      }}
    >
      <Box
        backgroundColor="#2d0e13"
        padding={Dimension.PADDING.MEDIUM}
        height="100px"
      >
        <Flex flexDirection="row" gap={Dimension.GAP.SMALL}>
          <Flex
            borderRadius={Dimension.BORDER_RADIUS.MEDIUM}
            flexDirection="row"
            alignItems="center"
          >
            <Box
              backgroundColor="rgba(239, 68, 68, 0.16)"
              borderRadius={Dimension.BORDER_RADIUS.MEDIUM}
              paddingHorizontal={Dimension.PADDING.MEDIUM}
              paddingVertical={Dimension.PADDING.SMALL}
              border="1px solid rgb(239, 68, 68)"
            >
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                TRADER JOE
              </Text>
            </Box>
          </Flex>
          <Flex
            borderRadius={Dimension.BORDER_RADIUS.MEDIUM}
            flexDirection="row"
            alignItems="center"
          >
            <Box
              backgroundColor="#8a2829"
              borderRadius={Dimension.BORDER_RADIUS.MEDIUM}
              paddingHorizontal={Dimension.PADDING.MEDIUM}
              paddingVertical={Dimension.PADDING.SMALL}
            >
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                MCV3
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Box padding={Dimension.PADDING.MEDIUM} />
      </Box>
      <Box backgroundColor="#030309" padding={Dimension.PADDING.SMALL}>
        <Box padding={Dimension.PADDING.MEDIUM} />
        <Flex flexDirection="column" gap={Dimension.GAP.SMALL}>
          <Text fontSize="MEDIUM" fontWeight="BOLD">
            ETH-AVAX
          </Text>
          <Box padding={Dimension.PADDING.SMALL} />

          <Grid>
            <GridItem columns={12}>
              <Flex flexDirection="column">
                <Text color="gray" fontSize="EXTRA_SMALL" fontWeight="SICK">
                  Total Projected USDC APR ⓘ
                </Text>
                <Box paddingVertical={8}>
                  <Text fontSize="MEDIUM">12.45%</Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
          <Box padding={Dimension.PADDING.SMALL} />

          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="gray"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Liq. Incentive ⓘ
              </Text>
              <Box paddingVertical={8}>
                <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                  2.5%
                </Text>
              </Box>
            </GridItem>

            <GridItem columns={4}>
              <Text
                center
                color="gray"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Debt Ratio ⓘ
              </Text>
              <Box padding={8}>
                <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                  95%
                </Text>
              </Box>
            </GridItem>

            <GridItem columns={4}>
              <Flex flexDirection="column">
                <Text
                  center
                  color="gray"
                  fontSize="EXTRA_SMALL"
                  fontWeight="SICK"
                >
                  LP Token Price
                </Text>
                <Box padding={8}>
                  <Text
                    center
                    fontSize="EXTRA_SMALL"
                    color="rgb(22, 206, 185)"
                    fontWeight="SICK"
                  >
                    $4.24
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Box padding={Dimension.PADDING.MEDIUM} />
        <Flex flexDirection="column">
          <Flex flexDirection="column" justifyContent="space-between">
            <Text color="gray" fontSize="EXTRA_SMALL" fontWeight="SICK">
              Current USDC Borrows
            </Text>
            <Box paddingVertical={8}>
              <Process value={0.4} borderRadius="20px" />
            </Box>
            <Text color="gray" fontSize="EXTRA_SMALL" fontWeight="SICK">
              Current USDC Deposits
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box position="absolute" width="100%" height="100px" top={105}>
        <Flex justifyContent="flex-start">
          <TokenPair token1={btcLogo} token2={avaxLogo} />
        </Flex>
      </Box>
    </Box>
  );
};

export default LendingPoolCard;

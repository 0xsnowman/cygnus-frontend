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
      className="organism-lendingpoolcard"
      borderRadius={Dimension.BORDER_RADIUS.LARGE}
      position="relative"
      onClick={() => {
        navigate("/1");
      }}
      border="2px solid #030309"
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
              backgroundColor="#8a2829"
              borderRadius={Dimension.BORDER_RADIUS.SMALL}
              paddingHorizontal={Dimension.PADDING.MEDIUM}
              paddingVertical={Dimension.PADDING.SMALL}
              border="2px solid rgb(239, 68, 68)"
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
              borderRadius={Dimension.BORDER_RADIUS.SMALL}
              paddingHorizontal={Dimension.PADDING.MEDIUM}
              paddingVertical={Dimension.PADDING.SMALL}
              border="2px solid #8a2829"
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
              <Text color="gray" fontSize="EXTRA_SMALL" fontWeight="SICK">
                Total Projected USDC APR ⓘ
              </Text>
            </GridItem>
            <GridItem columns={12}>
              <Box paddingVertical={8}>
                <Text fontSize="MEDIUM">12.45%</Text>
              </Box>
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
            </GridItem>
          </Grid>
          <Box padding={Dimension.PADDING.SMALL} />
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                USDC
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="gray"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Asset
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >ETH/AVAX LP
              </Text>
            </GridItem>
          </Grid>
          <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                12.45%
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="gray"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                APR
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                10.94%
              </Text>
            </GridItem>
          </Grid>
          </Box>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                1.0123
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="gray"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Exchange Rate
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                1.1234
              </Text>
            </GridItem>
          </Grid>
          <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $9213.52
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="gray"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
              TVL
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $9129
              </Text>
            </GridItem>
          </Grid>
          </Box>
        </Flex>
        <Box padding={Dimension.PADDING.MEDIUM} />
          <Flex flexDirection="column" justifyContent="space-between">
            <Flex justifyContent="space-between">
            
            <Text color="gray" fontSize="EXTRA_SMALL" fontWeight="SICK">
              Current USDC Borrows
            </Text>
            <Text color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
              $5238
            </Text>
            </Flex >
            <Box paddingVertical={8}>
              <Process value={0.4} borderRadius="20px" />
            </Box>
            <Flex justifyContent="space-between">
            <Text color="gray" fontSize="EXTRA_SMALL" fontWeight="SICK">
              Current USDC Deposits
            </Text>
            <Text color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
              $9213
            </Text>
            </Flex>
          </Flex>
        <Box paddingVertical={Dimension.PADDING.MEDIUM} />
      </Box>
      <Box backgroundColor="#0d0d1f" padding={Dimension.PADDING.MEDIUM}>
        <Flex justifyContent="space-between" alignItems="center" >
          <Text fontSize="EXTRA_SMALL" fontWeight="SICK">
            Your Position:
          </Text>
          <Text fontWeight="SICK">
            --
          </Text>
        </Flex>
      </Box>

      <Box position="absolute" width="100%" height="100px" top={105} paddingHorizontal={Dimension.PADDING.SMALL}>
        <Flex justifyContent="flex-start">
          <TokenPair token1={btcLogo} token2={avaxLogo} />
        </Flex>
      </Box>
    </Box>
  );
};

export default LendingPoolCard;

import React from "react";

import { Icon, Box, Flex, Grid, GridItem, Text, Process } from "../atoms";

import coinPng from "../../assets/icons/coin.png";

// import { Icons } from "../../assets";

import Dimension from "../../config/dimension";
import TokenPair from "../molecules/tokenPair";
import { useNavigate } from "react-router-dom";
import avaxLogo from "../../assets/icons/avax-logo.png";
import btcLogo from "../../assets/icons/btc-logo.png";
import avaxLogoT from "../../assets/icons/transparent-avax.png";
import arrow from "../../assets/icons/arrow.png";
import funnyArrow from "../../assets/images/arrow.png";

import astronaut from "../../assets/icons/astronaut.png";

const LendingPoolCard = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="organism-lendingpoolcard"
      borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
      position="relative"
      onClick={() => {
        navigate("/1");
      }}
    >
      <Box
        background="transparent linear-gradient(180deg, #E84142 0%, #742121 100%) 0% 0% no-repeat padding-box"
        padding={Dimension.PADDING.MEDIUM}
        height="75px"
      >
        <Flex flexDirection="row" gap={Dimension.GAP.SMALL}>
          <Flex flexDirection="row" alignItems="center">
            <Box
              backgroundColor="rgba(255, 255, 255, 0.5)"
              borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
              paddingHorizontal={Dimension.PADDING.MEDIUM}
              paddingVertical={Dimension.PADDING.SMALL}
            >
              <Text
                center
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
                color="black"
              >
                Trader Joe
              </Text>
            </Box>
          </Flex>

          <Flex flexDirection="row" alignItems="center">
            <Box
              backgroundColor="rgba(255, 255, 255, 0.5)"
              borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
              paddingHorizontal={Dimension.PADDING.MEDIUM}
              paddingVertical={Dimension.PADDING.SMALL}
            >
              <Text
                center
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
                color="black"
              >
                MCV3
              </Text>
            </Box>
          </Flex>

          <Flex flexDirection="row" alignItems="center">
            <Box
              backgroundColor="rgba(255, 255, 255, 0.5)"
              borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
              paddingHorizontal={Dimension.PADDING.MEDIUM}
              paddingVertical={Dimension.PADDING.SMALL}
            >
              <Text
                center
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
                color="black"
              >
                Id: 1
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* ------------------ CARD START --------------- */}

      <Box
        background="linear-gradient(180deg, rgba(1,1,1,0.6) 0%, rgba(13,13,31,0.4) 100%)"
        padding={Dimension.PADDING.MEDIUM}
      >
        <Box padding={Dimension.PADDING.SEMI_SMALL} />

        {/* ------------------ POOL NAME --------------- */}

        <Text fontSize="MEDIUM">ETH-AVAX</Text>

        <Box padding={Dimension.PADDING.SEMI_SMALL} />

        {/* ------------ PROJECTED USDC APY ------------ */}

        <Grid>
          <GridItem columns={12}>
            <Text color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
              Total Projected USDC APR ⓘ
            </Text>
          </GridItem>
          <GridItem columns={12}>
            <Box paddingVertical={Dimension.PADDING.SMALL}>
              <Text color="whitesmoke" fontSize="MEDIUM" fontWeight="SICK">
                12.48%
              </Text>
            </Box>
          </GridItem>
        </Grid>
        <Box padding={Dimension.PADDING.EXTRA_SMALL} />

        {/* ------------ PROJECTED LP APY ------------ */}

        {/*
          <Grid>
            <GridItem columns={12}>
              <Text color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
                Projected Leveraged LP APR (7x) ⓘ
              </Text>
            </GridItem>
            <GridItem columns={12}>
              <Box paddingVertical={Dimension.PADDING.SMALL}>
                <Text color="#E84142" fontSize="MEDIUM" fontWeight="SICK">
                  16.42%
                </Text>
              </Box>
            </GridItem>
          </Grid>
          */}

        {/* ------------------ ASSET ------------------ */}

        <Box padding={Dimension.PADDING.SMALL} />

        <Box paddingVertical={Dimension.PADDING.SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                USDC
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontWeight="SICK"
                fontSize="EXTRA_SMALL"
              >
                Asset
              </Text>
            </GridItem>

            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                ETH/AVAX LP
              </Text>
            </GridItem>
          </Grid>
        </Box>

        <hr color="#A8A8A8" />

        {/* PRICE */}

        <Box paddingVertical={Dimension.PADDING.EXTRA_SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $1.00
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Price
              </Text>
            </GridItem>

            <GridItem columns={4}>
              <Text
                center
                color="#16CEB9"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $4.58
              </Text>
            </GridItem>
          </Grid>
        </Box>

        <hr color="#A8A8A8" />

        {/* ------------ TOTAL SUPPLY ------------ */}

        <Box paddingVertical={Dimension.PADDING.EXTRA_SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                19,200
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Total Supply
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                8,934
              </Text>
            </GridItem>
          </Grid>
        </Box>

        <hr color="#A8A8A8" />

        {/* ------------ TOTAL BALANCE ------------ */}

        <Box paddingVertical={Dimension.PADDING.EXTRA_SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $9213
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                Total Balance
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $9,123
              </Text>
            </GridItem>
          </Grid>
        </Box>

        <hr color="#A8A8A8" />

        {/* ------------ 24H VOLUME ------------ */}

        <Box paddingVertical={Dimension.PADDING.EXTRA_SMALL}>
          <Grid>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $2193
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="#A8A8A8"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                24h Volume
              </Text>
            </GridItem>
            <GridItem columns={4}>
              <Text
                center
                color="whitesmoke"
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
              >
                $420
              </Text>
            </GridItem>
          </Grid>
        </Box>

        <Box padding={Dimension.PADDING.MEDIUM} />

        {/* ------------ UTILIZATION RATE ------------ */}

        <Flex flexDirection="column" justifyContent="space-between">
          <Flex justifyContent="space-between">
            <Text color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
              Current USDC Borrows
            </Text>
            <Text color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
              $5,238
            </Text>
          </Flex>
          <Box paddingVertical={8}>
            <Process value={0.4} borderRadius="20px" />
          </Box>
          <Flex justifyContent="space-between">
            <Text color="#A8A8A8" fontSize="EXTRA_SMALL" fontWeight="SICK">
              Utilization Rate
            </Text>

            <Text color="whitesmoke" fontSize="EXTRA_SMALL" fontWeight="SICK">
              75%
            </Text>
          </Flex>
        </Flex>

        <Box paddingVertical={Dimension.PADDING.SMALL} />

        {/* ------------ LEVERAGED LP APR ------------ */}

    {/* 
        <Box
          paddingVertical={Dimension.PADDING.MEDIUM}
          borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
          backgroundColor="#1e2633"
          border="1px solid black"
        >
          <Box paddingVertical={Dimension.PADDING.SMALL}>
            <Text center fontWeight="SICK" fontSize="EXTRA_SMALL">
              Leveraged LP APR ⓘ
            </Text>
          </Box>

          <Flex justifyContent="space-around">
            <Box>
              <Flex
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
              >
                <Box padding={Dimension.PADDING.EXTRA_SMALL} />
                <Flex>
                  <Box
                    backgroundColor="rgba(255, 255, 255, 0.5)"
                    borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
                    paddingHorizontal={Dimension.PADDING.MEDIUM}
                    paddingVertical={Dimension.PADDING.SMALL}
                  >
                    <Text
                      center
                      fontSize="EXTRA_SMALL"
                      fontWeight="SICK"
                      color="black"
                    >
                      1x
                    </Text>
                  </Box>
                </Flex>

                <Box padding={Dimension.PADDING.EXTRA_SMALL} />

                <Box paddingVertical={Dimension.PADDING.EXTRA_SMALL}>
                  <Text center fontWeight="SICK" fontSize="EXTRA_SMALL">
                    16.42%
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Flex
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
            >
              <Icon src={arrow} size="LARGE" borderRadius="1px" />
            </Flex>

            <Box>
              <Box padding={Dimension.PADDING.EXTRA_SMALL} />
              <Flex
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
              >
                <Box>
                  <Flex>
                    <Box
                      backgroundColor="rgba(255, 255, 255, 0.5)"
                      borderRadius={Dimension.BORDER_RADIUS.EXTRA_LARGE}
                      paddingHorizontal={Dimension.PADDING.MEDIUM}
                      paddingVertical={Dimension.PADDING.SMALL}
                    >
                      <Text
                        center
                        fontSize="EXTRA_SMALL"
                        fontWeight="SICK"
                        color="black"
                      >
                        7x
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box padding={Dimension.PADDING.EXTRA_SMALL} />
                <Box padding={Dimension.PADDING.EXTRA_SMALL}>
                  <Text center fontWeight="SICK" fontSize="EXTRA_SMALL">
                    44.92%
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        */}

      </Box>

      <Box backgroundColor="#0d0d1f" padding={Dimension.PADDING.MEDIUM}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="EXTRA_SMALL" fontWeight="SICK">
            Your Position:
          </Text>
          <Text fontWeight="SICK">--</Text>
        </Flex>
      </Box>

      <Box
        position="absolute"
        top={80}
        paddingHorizontal={Dimension.PADDING.MEDIUM}
      >
        <Flex justifyContent="flex-start">
          <TokenPair token1={btcLogo} token2={avaxLogo} />
        </Flex>
      </Box>
    </Box>
  );
};

export default LendingPoolCard;

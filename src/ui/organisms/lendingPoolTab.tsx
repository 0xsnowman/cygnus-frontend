import React, { useState } from "react";

import { Box, Flex, Text, Input } from "../atoms";
import { Link } from "../molecules";

import coinPng from "../../assets/icons/coin.png";
import avaxLogo from "../../assets/icons/avax-logo.png";
import btcLogo from "../../assets/icons/btc-logo.png";

// import { Icons } from "../../assets";

// import Dimension from "../../config/dimension";
import TokenPair from "../molecules/tokenPair";
import { Button } from "../molecules";
import { useNavigate } from "react-router-dom";
import Dimension from "../../config/dimension";

const LendingPoolTab = () => {
  const [tabViewChannel, setTabViewChannel] = useState("stake");
  // const [collapsedView, setCollapsedView] = useState(true);
  const navigate = useNavigate();

  return (
    <Box className="organism-lendingpooltab">
      <Box
        background="linear-gradient(90deg, #8a2829 -20%, #030309 25%)"
        padding={Dimension.PADDING.SMALL}
        position="relative"
        onClick={() => {
          navigate("/1");
        }}
      >
        {/* onClick={() => {setCollapsedView(!collapsedView)}} */}
        <Flex justifyContent="space-between" alignItems="center">
          <Flex>
            <Box>
              <TokenPair token1={avaxLogo} token2={btcLogo} />
            </Box>
            <Flex flexDirection="column">
              <Box paddingHorizontal={20}>
                <Box padding={Dimension.PADDING.SMALL}>
                  <Text center fontSize="SMALL">
                    AVAX/BTC
                  </Text>
                </Box>
                <Box
                  backgroundColor="#8a2829"
                  borderRadius={Dimension.BORDER_RADIUS.SMALL}
                  paddingHorizontal={Dimension.PADDING.SMALL}
                  paddingVertical={Dimension.PADDING.EXTRA_SMALL}
                  border="2px solid rgb(239, 68, 68)"
                >
                  <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                    TRADER JOE
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex flexDirection="column">
            <Box padding={Dimension.PADDING.SMALL}>
              <Text
                center
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
                color="whitesmoke"
              >
                LP Token Price ⓘ
              </Text>
            </Box>
            <Box
              paddingHorizontal={Dimension.PADDING.SMALL}
              paddingVertical={Dimension.PADDING.EXTRA_SMALL}
            >
              <Text
                center
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
                color="rgb(22, 206, 185)"
              >
                $4.25
              </Text>
            </Box>
          </Flex>
            <Box border="1px solid white"></Box>
          <Flex flexDirection="column">
            <Box padding={Dimension.PADDING.SMALL}>
              <Text
                center
                fontSize="EXTRA_SMALL"
                fontWeight="SICK"
                color="whitesmoke"
              >
                Projected USDC APR ⓘ
              </Text>
            </Box>
            <Box
              paddingHorizontal={Dimension.PADDING.SMALL}
              paddingVertical={Dimension.PADDING.EXTRA_SMALL}
            >
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                4.24%
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="column">
            <Box padding={Dimension.PADDING.SMALL}>
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                3x Leverage APR
              </Text>
            </Box>
            <Box
              paddingHorizontal={Dimension.PADDING.SMALL}
              paddingVertical={Dimension.PADDING.EXTRA_SMALL}
            >
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                14.24%
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="column" height="100%">
            <Box border="1px solid white"></Box>
          </Flex>
          <Flex flexDirection="column">
            <Box padding={Dimension.PADDING.SMALL}>
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                Liq. Incentive ⓘ
              </Text>
            </Box>
            <Box
              paddingHorizontal={Dimension.PADDING.SMALL}
              paddingVertical={Dimension.PADDING.EXTRA_SMALL}
            >
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                2.5%
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="column">
            <Box padding={Dimension.PADDING.SMALL}>
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                Debt Ratio ⓘ
              </Text>
            </Box>
            <Box
              paddingHorizontal={Dimension.PADDING.SMALL}
              paddingVertical={Dimension.PADDING.EXTRA_SMALL}
            >
              <Text center fontSize="EXTRA_SMALL" fontWeight="SICK">
                95%
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="column" height="100%">
            <Box border="1px solid white"></Box>
          </Flex>
          <Flex flexDirection="column">
            <Box padding={Dimension.PADDING.SMALL}>
              <Text center fontSize="EXTRA_SMALL">
                TVL
              </Text>
            </Box>
            <Box
              paddingHorizontal={Dimension.PADDING.SMALL}
              paddingVertical={Dimension.PADDING.EXTRA_SMALL}
            >
              <Text center fontSize="EXTRA_SMALL">
                $42,521.27
              </Text>
            </Box>
          </Flex>
          <Box>
            <svg
              stroke="currentColor"
              fill="grey"
              stroke-width="0"
              viewBox="0 0 192 512"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path>
            </svg>
          </Box>
        </Flex>
      </Box>
      {/* <Box height={collapsedView ? "0px" : "200px"}> */}
      <Box height="0px">
        <Box backgroundColor="#101027">
          <Flex>
            <Flex
              flex={1}
              justifyContent="center"
              backgroundColor={
                tabViewChannel === "stake" ? "#24244A" : "#101027"
              }
              paddingVertical={5}
              borderRadius={0}
              borderTop={
                tabViewChannel === "stake"
                  ? "3px solid #6869E7"
                  : "3px solid #24244A"
              }
            >
              <Button
                padding={5}
                onClick={() => {
                  setTabViewChannel("stake");
                }}
              >
                STAKE
              </Button>
            </Flex>
            <Flex
              flex={1}
              justifyContent="center"
              backgroundColor={
                tabViewChannel === "unstake" ? "#24244A" : "#101027"
              }
              paddingVertical={5}
              borderRadius={0}
              borderTop={
                tabViewChannel === "unstake"
                  ? "3px solid #6869E7"
                  : "3px solid #24244A"
              }
            >
              <Button
                padding={5}
                onClick={() => {
                  setTabViewChannel("unstake");
                }}
              >
                UNSTAKE
              </Button>
            </Flex>
            <Flex
              flex={1}
              justifyContent="center"
              backgroundColor={
                tabViewChannel === "info" ? "#24244A" : "#101027"
              }
              paddingVertical={5}
              borderRadius={0}
              borderTop={
                tabViewChannel === "info"
                  ? "3px solid #6869E7"
                  : "3px solid #24244A"
              }
            >
              <Button
                padding={5}
                onClick={() => {
                  setTabViewChannel("info");
                }}
              >
                INFO
              </Button>
            </Flex>
          </Flex>
        </Box>
        {tabViewChannel === "stake" ? (
          <Box backgroundColor="#24244A" padding={20}>
            <Flex flexDirection="column">
              <Text>
                Stake VTX on Vector to earn a portion of the platform's revenue,
                distributed as xPTP and zJOE tokens.
              </Text>
              <Flex paddingVertical={20} gap={30}>
                <Flex
                  flex={1}
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Flex justifyContent="space-between">
                    <Text color="#C2C2DA">Stake VTX</Text>
                    <Text color="#C2C2DA">0.00</Text>
                  </Flex>
                  <Box
                    borderRadius={5}
                    borderWidth={2}
                    borderColor="white"
                    padding={2}
                    backgroundColor="#111111"
                  >
                    <Flex alignItems="center" justifyContent="space-between">
                      <Input
                        width="70%"
                        height="45px"
                        placeholder="Enter An Amount"
                      />
                      <Box
                        backgroundColor="black"
                        borderRadius={5}
                        borderColor="white"
                        borderWidth={2}
                        paddingVertical={10}
                        paddingHorizontal={20}
                      >
                        <Text center>MAX</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  flex={1}
                  flexDirection="column"
                  justifyContent="space-between"
                  gap={10}
                >
                  <Flex justifyContent="center" alignItems="center">
                    <Flex flex={1}>
                      <Box />
                    </Flex>
                    <Flex
                      borderRadius={50}
                      backgroundColor="#6869E7"
                      width="30px"
                      height="30px"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text>1</Text>
                    </Flex>
                    <Flex flex={2} height="2px" backgroundColor="#6869E7">
                      <Box />
                    </Flex>
                    <Flex
                      borderRadius={50}
                      backgroundColor="#6869E7"
                      width="30px"
                      height="30px"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text>2</Text>
                    </Flex>
                    <Flex flex={1}>
                      <Box />
                    </Flex>
                  </Flex>
                  <Flex gap={20}>
                    <Flex flex={1} justifyContent="center">
                      <Box width="100%">
                        <Button backgroundColor="#6869E7">APPROVE</Button>
                      </Box>
                    </Flex>
                    <Flex flex={1} justifyContent="center">
                      <Box width="100%">
                        <Button backgroundColor="#6869E7">STAKE</Button>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        ) : (
          <></>
        )}
        {tabViewChannel === "unstake" ? (
          <Box backgroundColor="#24244A" padding={20}>
            <Flex flexDirection="column">
              <Flex paddingVertical={20} gap={30}>
                <Flex
                  flex={1}
                  flexDirection="column"
                  justifyContent="space-between"
                  gap={10}
                >
                  <Flex justifyContent="space-between">
                    <Text color="#C2C2DA">Unstake VTX</Text>
                    <Text color="#C2C2DA">0.00</Text>
                  </Flex>
                  <Box
                    borderRadius={5}
                    borderWidth={2}
                    borderColor="white"
                    padding={2}
                    backgroundColor="#111111"
                  >
                    <Flex alignItems="center" justifyContent="space-between">
                      <Input
                        width="70%"
                        height="45px"
                        placeholder="Enter An Amount"
                      />
                      <Box
                        backgroundColor="black"
                        borderRadius={5}
                        borderColor="white"
                        borderWidth={2}
                        paddingVertical={10}
                        paddingHorizontal={20}
                      >
                        <Text center>MAX</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  flex={1}
                  flexDirection="column"
                  justifyContent="space-between"
                  gap={10}
                >
                  <Flex justifyContent="center" alignItems="center">
                    <Flex flex={1}>
                      <Box />
                    </Flex>
                  </Flex>
                  <Flex gap={20}>
                    <Flex flex={1} justifyContent="center">
                      <Box width="100%">
                        <Button backgroundColor="#6869E7">APPROVE</Button>
                      </Box>
                    </Flex>
                    <Flex flex={1} justifyContent="center">
                      <Box width="100%"></Box>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        ) : (
          <></>
        )}
        {tabViewChannel === "info" ? (
          <Box backgroundColor="#24244A" padding={20}>
            <Flex flexDirection="column" gap={10}>
              <Flex gap={20}>
                <Text>VTX Contract:</Text>
                <Link>0x5817d4f0b62a59b17f75207da1848c2ce75e7af4</Link>
              </Flex>
              <Flex gap={20}>
                <Text>Staking Contract:</Text>
                <Link>0x5817d4f0b62a59b17f75207da1848c2ce75e7af4</Link>
              </Flex>
            </Flex>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default LendingPoolTab;

import React, { useState } from "react";

import { Box, Flex, Text, Input } from "../atoms";
import { Link } from "../molecules";

import coinPng from "../../assets/icons/coin.png";

// import { Icons } from "../../assets";

// import Dimension from "../../config/dimension";
import TokenPair from "../molecules/tokenPair";
import { Button } from "../molecules";
import { useNavigate } from "react-router-dom";

const LendingPoolTab = () => {
  const [tabViewChannel, setTabViewChannel] = useState("stake");
  // const [collapsedView, setCollapsedView] = useState(true);
  const navigate = useNavigate();

  return (
    <Box className="organism-lendingpooltab">
      <Box padding={15} position="relative" onClick={() => {navigate("/1")}}>
          {/* onClick={() => {setCollapsedView(!collapsedView)}} */}
        <Flex justifyContent="space-between" alignItems="center">
          <Box position="absolute" top={7} width="100px" height="55px">
            <TokenPair token1={coinPng} token2={coinPng} />
          </Box>
          <Box />
          <Box />
          <Flex flexDirection="column">
            <Text>VTX</Text>
            <Text>STAKE VTX</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text>APR</Text>
            <Text>4.2%</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text>STAKE VTX</Text>
            <Text>0.0VTX</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text>TVL</Text>
            <Text>$4.2M</Text>
          </Flex>
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
                      height={30}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text>1</Text>
                    </Flex>
                    <Flex flex={2} height={2} backgroundColor="#6869E7">
                      <Box />
                    </Flex>
                    <Flex
                      borderRadius={50}
                      backgroundColor="#6869E7"
                      width="30px"
                      height={30}
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
